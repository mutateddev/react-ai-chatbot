import ChatBotApp from './components/ChatBotApp';
import ChatBotStart from './components/ChatBotStart';

const App = () => {
  return (
    <div className='w-full h-dvh grid place-items-center bg-bg-primary text-text-primary'>
      {/* <ChatBotStart /> */}
      <ChatBotApp />
    </div>
  );
};

export default App;
