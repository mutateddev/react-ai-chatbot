import { useEffect, useState } from "react";
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

  useEffect(() => {
    const activeChatObj = chats.find((chat) => chat.id === activeChat);
    setMessages(activeChatObj ? activeChatObj.messages : []);
  }, [activeChat, chats]);

  const handelInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const sendMessage = () => {
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
        <div className="flex w-full grow flex-col gap-y-10 p-2.5">
          {/* prompt & response */}
          {messages.map((msg, i) =>
            msg.type === "prompt" ? (
              <Prompt key={i} text={msg.text} timestamp={msg.timestamp} />
            ) : (
              <Response key={i} text={msg.text} timestamp={msg.timestamp} />
            ),
          )}

          {/* typing message */}
          <TypingIndicator />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-bg-secondary border-text-primary/50 flex h-24 w-full items-center border-t shadow inset-shadow-yellow-200"
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
