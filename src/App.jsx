import { useState } from 'react';
import ChatBotApp from './components/ChatBotApp';
import ChatBotStart from './components/ChatBotStart';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  const handleStartChat = () => {
    setIsChatting(true);

    if (chats.length === 0) {
      createNewChat();
    }
  };

  const createNewChat = (initMessage = '') => {
    const newChat = {
      id: uuidv4(),
      displayId: `Chat ${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString()}`,
      messages: initMessage
        ? [
            {
              type: 'prompt',
              text: initMessage,
              timestamp: new Date().toLocaleTimeString(),
            },
          ]
        : [],
    };

    setChats([newChat, ...chats]);
    setActiveChat(newChat.id);
  };

  const handleGoBack = () => {
    setIsChatting(false);
  };

  return (
    <div className='bg-bg-primary text-text-primary grid h-dvh w-full place-items-center'>
      {!isChatting ? (
        <ChatBotStart onStartChatting={handleStartChat} />
      ) : (
        <ChatBotApp
          chats={chats}
          setChats={setChats}
          onGoBack={handleGoBack}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          onNewChat={createNewChat}
        />
      )}
    </div>
  );
};

export default App;
