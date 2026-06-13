import useChat from '../../contexts/chat-context/useChat';
import ChatListHeader from './ChatListHeader';
import ChatListItem from './ChatListItem';

const ChatList = () => {
  const { chats } = useChat();

  return (
    <div className='border-text-primary/50 bg-bg-secondary flex h-full w-1/4 flex-col gap-y-4 border-r p-4'>
      <ChatListHeader />

      {chats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
