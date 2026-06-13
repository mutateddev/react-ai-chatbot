import useChat from '../../contexts/chat-context/useChat';

const ChatListItem = ({ chat }) => {
  const { activeChatId, selectChat, deleteChat } = useChat();

  const isActive = chat.id === activeChatId;

  return (
    <div
      onClick={() => selectChat(chat.id)}
      className={`group flex h-12 w-full cursor-pointer items-center justify-between rounded-lg px-3 transition-all duration-200 ${
        isActive
          ? 'from-linear-pink to-linear-blue bg-linear-to-r text-black/80'
          : 'text-text-primary hover:bg-white/5'
      } `}
    >
      <h4 className='truncate text-sm font-medium'>{chat.title}</h4>

      <i
        onClick={(e) => {
          e.stopPropagation();
          deleteChat(chat.id);
        }}
        className='fa-solid fa-xmark text-text-tertiary cursor-pointer text-sm opacity-0 transition-all duration-200 group-hover:opacity-100 hover:text-red-400'
      />
    </div>
  );
};

export default ChatListItem;
