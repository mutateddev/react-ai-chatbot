import useChat from '../../contexts/chat-context/useChat';

const ChatListItem = ({ chat }) => {
  const { activeChatId, selectChat, deleteChat } = useChat();

  return (
    <div
      onClick={() => selectChat(chat.id)}
      className={`bg-bg-tertiary flex h-14 w-full cursor-pointer items-center justify-between rounded-sm px-2.5 py-1.5 shadow ${chat.id === activeChatId ? 'from-linear-pink to-linear-blue bg-linear-150 font-medium text-black/80' : ''}`}
    >
      <h4 className='text-base'>{chat.title}</h4>
      <i
        onClick={(e) => {
          e.stopPropagation();
          deleteChat(chat.id);
        }}
        className={`fa-regular fa-circle-xmark cursor-pointer text-xl ${!activeChatId ? 'text-red-400/70' : 'hover:text-red-800/70'}`}
      ></i>
    </div>
  );
};

export default ChatListItem;
