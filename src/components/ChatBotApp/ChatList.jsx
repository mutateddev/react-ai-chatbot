const ChatList = ({ chats, tempActive }) => {
  return (
    <div className="border-text-primary/50 bg-bg-secondary flex h-full w-1/4 flex-col gap-y-4 border-r p-4">
      {/* chat list header */}
      <div className="text-mauve flex w-full items-center justify-between px-2.5 py-5 text-xl">
        <h2 className="font-exo font-bold tracking-wider uppercase">
          Chat List
        </h2>
        <i className="fa-solid fa-pen-to-square"></i>
      </div>
      {/* chat list item */}
      {chats.map((chat, i) => (
        <div
          key={i}
          className={`bg-bg-tertiary flex h-14 w-full items-center justify-between rounded-sm px-2.5 py-1.5 shadow ${tempActive ? "from-linear-pink to-linear-blue bg-linear-150 font-medium text-black/80" : ""}`}
        >
          <h4 className="text-base">{chat.id}</h4>
          <i
            className={`fa-regular fa-circle-xmark cursor-pointer text-xl ${!tempActive ? "text-red-400/70" : "hover:text-red-800/70"}`}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
