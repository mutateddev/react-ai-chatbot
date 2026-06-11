import { useState } from "react";
import ChatBotApp from "./components/ChatBotApp";
import ChatBotStart from "./components/ChatBotStart";

const App = () => {
  const [isChatting, setIsChatting] = useState(false);

  const handleStartChat = () => {
    setIsChatting(true);
  };

  const handleGoBack = () => {
    setIsChatting(false);
  };

  return (
    <div className="bg-bg-primary text-text-primary grid h-dvh w-full place-items-center">
      {!isChatting ? (
        <ChatBotStart onStartChatting={handleStartChat} />
      ) : (
        <ChatBotApp onGoBack={handleGoBack} />
      )}
    </div>
  );
};

export default App;
