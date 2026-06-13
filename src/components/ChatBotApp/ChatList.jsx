import ChatListHeader from './ChatListHeader';
import ChatListItem from './ChatListItem';

const ChatList = ({
  chats,
  onNewChat,
  activeChat,
  handleSelectChat,
  onDeleteChat,
}) => {
  return (
    <div className='border-text-primary/50 bg-bg-secondary flex h-full w-1/4 flex-col gap-y-4 border-r p-4'>
      <ChatListHeader onNewChat={onNewChat} />

      {chats.map((chat) => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          activeChat={activeChat}
          handleSelectChat={handleSelectChat}
          onDeleteChat={onDeleteChat}
        />
      ))}
    </div>
  );
};

export default ChatList;
