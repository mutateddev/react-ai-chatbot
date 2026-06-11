const ChatBotStart = ({ onStartChatting }) => {
  return (
    <div
    className="grid h-full w-full place-items-center"
    onClick={onStartChatting}
    >
      <button className="from-linear-pink to-linear-blue font-exo hover:to-linear-pink hover:from-linear-blue h-36 min-w-xs cursor-pointer rounded-2xl bg-linear-17 text-5xl font-semibold tracking-wider text-black/80 uppercase shadow-xl transition-all duration-200 ease-in-out outline-none hover:-translate-y-1 hover:text-black hover:shadow-2xl active:scale-95">
        Chat AI
      </button>
    </div>
  );
};

export default ChatBotStart;
