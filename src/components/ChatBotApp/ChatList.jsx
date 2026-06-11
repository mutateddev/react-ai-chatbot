const ChatList = ({
  chats,
  tempActive,
  onNewChat,
  activeChat,
  handleSelectChat,
  onDeleteChat,
}) => {
  return (
    <div className="border-text-primary/50 bg-bg-secondary flex h-full w-1/4 flex-col gap-y-4 border-r p-4">
      {/* chat list header */}
      <div className="text-mauve flex w-full items-center justify-between px-2.5 py-5 text-xl">
        <h2 className="font-exo font-bold tracking-wider uppercase">
          Chat List
        </h2>
        <i
          className="fa-solid fa-pen-to-square cursor-pointer"
          onClick={onNewChat}
        ></i>
      </div>
      {/* chat list item */}
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => handleSelectChat(chat.id)}
          className={`bg-bg-tertiary flex h-14 w-full cursor-pointer items-center justify-between rounded-sm px-2.5 py-1.5 shadow ${chat.id === activeChat ? "from-linear-pink to-linear-blue bg-linear-150 font-medium text-black/80" : ""}`}
        >
          <h4 className="text-base">{chat.displayId}</h4>
          <i
            onClick={(e) => {
              e.stopPropagation();
              onDeleteChat(chat.id);
            }}
            className={`fa-regular fa-circle-xmark cursor-pointer text-xl ${!activeChat ? "text-red-400/70" : "hover:text-red-800/70"}`}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
