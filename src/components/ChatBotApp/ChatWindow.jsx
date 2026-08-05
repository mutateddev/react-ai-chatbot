import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatWindowHeader from './ChatWindowHeader';

const ChatWindow = ({ openSidebar }) => {
  return (
    <div className='bg-bg-primary flex h-full min-w-0 flex-1 flex-col overflow-hidden'>
      <ChatWindowHeader openSidebar={openSidebar} />

      <ChatMessages />

      <ChatInput />
    </div>
  );
};

export default ChatWindow;
