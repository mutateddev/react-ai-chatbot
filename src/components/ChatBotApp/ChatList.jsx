import useChat from '../../contexts/chat-context/useChat';
import ChatListHeader from './ChatListHeader';
import ChatListItem from './ChatListItem';

const ChatList = ({ isSidebarOpen, closeSidebar }) => {
  const { chats } = useChat();

  return (
    <div
      className={`bg-bg-secondary fixed inset-y-0 left-0 z-50 flex h-dvh w-72 flex-col border-r border-white/10 p-3 transition-transform duration-300 ease-in-out md:static md:z-auto md:h-full md:w-2/6 md:translate-x-0 xl:w-1/4 ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } `}
    >
      <ChatListHeader closeSidebar={closeSidebar} />

      <div className='flex-1 scrollbar-thin scrollbar-thumb-white/10 space-y-2 overflow-y-auto pr-1 hover:scrollbar-thumb-white/20'>
        {chats.map((chat) => (
          <ChatListItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
