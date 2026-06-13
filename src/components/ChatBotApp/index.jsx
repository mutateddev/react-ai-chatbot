import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import ChatWindow from './ChatWindow';
import ChatMessages from './ChatMessages';

const ChatBotApp = () => {
  // const sendMessage = async () => {
  //   if (inputValue.trim() === '') return;

  //   const newMessage = {
  //     type: 'prompt',
  //     text: inputValue,
  //     timestamp: new Date().toLocaleTimeString(),
  //   };

  //   if (!activeChat) {
  //     onNewChat(inputValue);
  //     setInputValue('');
  //   } else {
  //     const updatedMessages = [...messages, newMessage];
  //     setMessages(updatedMessages);
  //     setInputValue('');

  //     const updatedChats = chats.map((chat) => {
  //       if (chat.id === activeChat) {
  //         return { ...chat, messages: updatedMessages };
  //       }
  //       return chat;
  //     });
  //     setChats(updatedChats);

  //     setIsTyping(true);
  //     const response = await fetch(
  //       'https://api.openai.com/v1/chat/completions',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  //         },
  //         body: JSON.stringify({
  //           model: 'gpt-3.5-turbo',
  //           messages: [{ role: 'user', content: inputValue }],
  //           max_tokens: 500,
  //         }),
  //       },
  //     );
  //     const data = await response.json();
  //     const chatResponse = data.choices[0].message.content.trim();

  //     const newResponse = {
  //       type: 'response',
  //       text: chatResponse,
  //       timestamp: new Date().toLocaleTimeString(),
  //     };

  //     const updatedMessagesWithResponse = [...updatedMessages, newResponse];
  //     // setMessages(updatedMessagesWithResponse);
  //     setIsTyping(false);

  //     const updatedGhatsWithResponse = chats.map((chat) => {
  //       if (chat.id === activeChat) {
  //         return { ...chat, messages: updatedGhatsWithResponse };
  //       }

  //       return chat;
  //     });
  //     setChats(updatedGhatsWithResponse);
  //   }
  // };

  return (
    <div className='flex h-full w-full'>
      <ChatList />

      <ChatWindow>
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </ChatWindow>
    </div>
  );
};

export default ChatBotApp;
