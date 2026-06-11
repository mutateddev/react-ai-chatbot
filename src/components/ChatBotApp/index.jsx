import { useEffect, useRef, useState } from "react";
import Prompt from "./Prompt";
import TypingIndicator from "./TypingIndicator";
import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";

const ChatBotApp = ({
  chats,
  setChats,
  onGoBack,
  activeChat,
  setActiveChat,
  onNewChat,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState(chats[0]?.messages || []);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const activeChatObj = chats.find((chat) => chat.id === activeChat);
    setMessages(activeChatObj ? activeChatObj.messages : []);
  }, [activeChat, chats]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handelInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = async () => {
    if (inputValue.trim() === "") return;

    const newMessage = {
      type: "prompt",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString(),
    };

    if (!activeChat) {
      onNewChat(inputValue);
      setInputValue("");
    } else {
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputValue("");

      const updatedChats = chats.map((chat) => {
        if (chat.id === activeChat) {
          return { ...chat, messages: updatedMessages };
        }
        return chat;
      });
      setChats(updatedChats);

      setIsTyping(true);
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputValue }],
            max_tokens: 500,
          }),
        },
      );
      const data = await response.json();
      const chatResponse = data.choices[0].message.content.trim();

      const newResponse = {
        type: "response",
        text: chatResponse,
        timestamp: new Date().toLocaleTimeString(),
      };

      const updatedMessagesWithResponse = [...updatedMessages, newResponse];
      setMessages(updatedMessagesWithResponse);
      setIsTyping(false);

      const updatedGhatsWithResponse = chats.map((chat) => {
        if (chat.id === activeChat) {
          return { ...chat, messages: updatedGhatsWithResponse };
        }

        return chat;
      });
      setChats(updatedGhatsWithResponse);
    }
  };

  const handleSelectChat = (id) => {
    setActiveChat(id);
  };

  const handleDeleteChat = (id) => {
    const updatedChats = chats.filter((chat) => chat.id !== id);
    setChats(updatedChats);

    if (id === activeChat) {
      const newActiveChat = updatedChats.length > 0 ? updatedChats[0].id : null;
      setActiveChat(newActiveChat);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-full w-full">
      <ChatList
        chats={chats}
        activeChat={activeChat}
        handleSelectChat={handleSelectChat}
        onNewChat={onNewChat}
        onDeleteChat={handleDeleteChat}
      />

      {/* chat window */}
      <div className="flex h-full w-3/4 flex-col">
        <ChatHeader onGoBack={onGoBack} />

        {/* chat */}
        <div className="flex w-full grow flex-col gap-y-10 overflow-y-auto p-2.5">
          {/* prompt & response */}
          {messages.map((msg, i) =>
            msg.type === "prompt" ? (
              <Prompt key={i} text={msg.text} timestamp={msg.timestamp} />
            ) : (
              <Response key={i} text={msg.text} timestamp={msg.timestamp} />
            ),
          )}

          {/* typing message */}
          {isTyping && <TypingIndicator />}
          <div ref={chatEndRef}></div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-bg-secondary border-text-primary/50 flex min-h-24 w-full items-center border-t shadow inset-shadow-yellow-200"
        >
          <div className="flex w-24 cursor-pointer justify-center text-2xl">
            <i className="fa-solid fa-face-smile"></i>
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handelInputChange}
            onKeyDown={handleKeyDown}
            className="text-text-tertiary h-full grow border-none pl-5 text-lg outline-none focus:placeholder-transparent"
            placeholder="Type a message..."
          />

          <button
            onClick={sendMessage}
            className="flex w-20 cursor-pointer justify-center"
          >
            <i className="fa-solid fa-paper-plane block text-xl"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
