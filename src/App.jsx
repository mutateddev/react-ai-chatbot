import ChatBotApp from './components/ChatBotApp';
import ChatBotStart from './components/ChatBotStart';
import useChat from './contexts/chat-context/useChat';

const App = () => {
  const { isChatOpen } = useChat();

  return (
    <div className='bg-bg-primary text-text-primary relative grid h-dvh w-full place-items-center'>
      {!isChatOpen ? <ChatBotStart /> : <ChatBotApp />}
    </div>
  );
};

export default App;
