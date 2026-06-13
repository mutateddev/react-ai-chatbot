import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
import ChatInput from './ChatInput';
import ChatWindow from './ChatWindow';
import ChatMessages from './ChatMessages';

const ChatBotApp = () => {
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
