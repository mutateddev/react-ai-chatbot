import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatWindowHeader from './ChatWindowHeader';

const ChatWindow = () => {
  return (
    <div className='bg-bg-primary flex h-full w-4/5 flex-col overflow-hidden'>
      <ChatWindowHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
