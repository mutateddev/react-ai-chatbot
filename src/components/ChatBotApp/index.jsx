import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const ChatBotApp = () => {
  return (
    <div className='relative flex h-full w-full overflow-hidden'>
      <ChatList />
      <ChatWindow />
    </div>
  );
};

export default ChatBotApp;
