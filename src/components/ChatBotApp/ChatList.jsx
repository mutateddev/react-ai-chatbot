import useChat from '../../contexts/chat-context/useChat';
import ChatListHeader from './ChatListHeader';
import ChatListItem from './ChatListItem';

const ChatList = () => {
  const { chats } = useChat();

  return (
    <div className='bg-bg-secondary flex h-dvh w-1/5 flex-col border-r border-white/10 p-3'>
      <ChatListHeader />

      <div className='flex-1 scrollbar-thin scrollbar-thumb-white/10 space-y-2 overflow-y-auto pr-1 hover:scrollbar-thumb-white/20'>
        {chats.map((chat) => (
          <ChatListItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
