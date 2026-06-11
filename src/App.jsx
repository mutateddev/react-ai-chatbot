import { useState } from "react";
import ChatBotApp from "./components/ChatBotApp";
import ChatBotStart from "./components/ChatBotStart";

const App = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);

  const handleStartChat = () => {
    setIsChatting(true);

    if (chats.length === 0) {
      const newChat = {
        id: `Chat ${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString()}`,
        messages: [],
      };
      setChats([newChat]);
    }
  };

  const handleGoBack = () => {
    setIsChatting(false);
  };

  return (
    <div className="bg-bg-primary text-text-primary grid h-dvh w-full place-items-center">
      {!isChatting ? (
        <ChatBotStart onStartChatting={handleStartChat} />
      ) : (
        <ChatBotApp chats={chats} setChats={setChats} onGoBack={handleGoBack} />
      )}
    </div>
  );
};

export default App;
