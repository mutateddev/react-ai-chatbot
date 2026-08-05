import useChat from '../../contexts/chat-context/useChat';

const ChatListItem = ({ chat }) => {
  const { activeChatId, selectChat, deleteChat } = useChat();

  const isActive = chat.id === activeChatId;

  return (
    <div
      onClick={() => selectChat(chat.id)}
      className={`group flex h-11 w-full cursor-pointer items-center justify-between rounded-lg px-3 transition-all duration-200 sm:h-12 ${
        isActive
          ? 'from-linear-pink to-linear-blue bg-linear-to-r text-black/80'
          : 'text-text-primary hover:bg-white/10'
      } `}
    >
      <h4 className='min-w-0 truncate text-sm font-medium'>{chat.title}</h4>

      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteChat(chat.id);
        }}
        className={`flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-all duration-200 ${
          isActive
            ? 'bg-red-500/10 text-red-400 opacity-100'
            : `text-text-tertiary opacity-100 md:opacity-0 md:group-hover:opacity-100 `
        } hover:scale-110 hover:bg-red-500/20 hover:text-red-400`}
        aria-label='Delete chat'
      >
        <i className='fa-solid fa-xmark text-sm' />
      </button>
    </div>
  );
};

export default ChatListItem;
