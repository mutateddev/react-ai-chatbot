import ChatWindowHeader from './ChatWindowHeader';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import ChatWindow from './ChatWindow';
import ChatMessages from './ChatMessages';

const ChatBotApp = () => {
  return (
    <div className='relative flex h-full w-full'>
      <ChatList />

      <ChatWindow>
        <ChatWindowHeader />
        <ChatMessages />
        <ChatInput />
      </ChatWindow>
    </div>
  );
};

export default ChatBotApp;
