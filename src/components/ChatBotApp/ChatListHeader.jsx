const ChatListHeader = ({ onNewChat }) => {
  return (
    <div className="text-mauve flex w-full items-center justify-between px-2.5 py-5 text-xl">
      <h2 className="font-exo font-bold tracking-wider uppercase">Chat List</h2>
      <i
        className="fa-solid fa-pen-to-square cursor-pointer"
        onClick={onNewChat}
      ></i>
    </div>
  );
};

export default ChatListHeader;
