import useChat from '../../contexts/chat-context/useChat';
import ChatListHeader from './ChatListHeader';
import ChatListItem from './ChatListItem';

const ChatList = () => {
  const { chats } = useChat();

  return (
    <div className='border-text-primary/50 bg-bg-secondary scrollbar-thumb-text-primary/30 fixed flex max-h-dvh w-1/4 scrollbar-thin flex-col gap-y-4 overflow-y-auto border-r p-4'>
      <ChatListHeader />

      {chats.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
};

export default ChatList;
