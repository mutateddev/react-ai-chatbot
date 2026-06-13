const ChatListItem = ({ chat, activeChat, handleSelectChat, onDeleteChat }) => {
  return (
    <div
      onClick={() => handleSelectChat(chat.id)}
      className={`bg-bg-tertiary flex h-14 w-full cursor-pointer items-center justify-between rounded-sm px-2.5 py-1.5 shadow ${chat.id === activeChat ? 'from-linear-pink to-linear-blue bg-linear-150 font-medium text-black/80' : ''}`}
    >
      <h4 className='text-base'>{chat.displayId}</h4>
      <i
        onClick={(e) => {
          e.stopPropagation();
          onDeleteChat(chat.id);
        }}
        className={`fa-regular fa-circle-xmark cursor-pointer text-xl ${!activeChat ? 'text-red-400/70' : 'hover:text-red-800/70'}`}
      ></i>
    </div>
  );
};

export default ChatListItem;
