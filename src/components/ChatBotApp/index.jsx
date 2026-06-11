const ChatBotApp = () => {
  const tempActive = true;
  return (
    <div className="flex h-full w-full">
      <div className="border-text-primary/50 bg-bg-secondary flex h-full w-1/4 flex-col gap-y-4 border-r p-4">
        {/* chat list header */}
        <div className="text-mauve flex w-full items-center justify-between px-2.5 py-5 text-xl">
          <h2 className="font-exo font-bold tracking-wider uppercase">
            Chat List
          </h2>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
        {/* chat list item */}
        <div
          className={`bg-bg-tertiary flex h-14 w-full items-center justify-between rounded-sm px-2.5 py-1.5 shadow ${tempActive ? "from-linear-pink to-linear-blue bg-linear-150 font-medium text-black/80" : ""}`}
        >
          <h4 className="text-base">Chat 20/7/2024 12:59:42 Pm</h4>
          <i
            className={`fa-regular fa-circle-xmark cursor-pointer text-xl ${!tempActive ? "text-red-400/70" : "hover:text-red-800/70"}`}
          ></i>
        </div>

        <div className="bg-bg-tertiary flex h-14 w-full items-center justify-between rounded-sm px-2.5 py-1.5 shadow">
          <h4>Chat 20/7/2024 12:59:42 Pm</h4>
          <i className="fa-regular fa-circle-xmark cursor-pointer text-xl text-red-400/70"></i>
        </div>
        <div className="bg-bg-tertiary flex h-14 w-full items-center justify-between rounded-sm px-2.5 py-1.5 shadow">
          <h4>Chat 20/7/2024 12:59:42 Pm</h4>
          <i className="fa-regular fa-circle-xmark cursor-pointer text-xl text-red-400/70"></i>
        </div>
      </div>

      {/* chat window */}
      <div className="flex h-full w-3/4 flex-col">
        {/* chat title */}
        <div className="bg-bg-tertiary flex min-h-20 w-full items-center justify-between px-5">
          <h3 className="font-exo text-xl font-bold tracking-wide uppercase">
            chat with ai
          </h3>
          <i className="fa-solid fa-arrow-right cursor-pointer text-3xl"></i>
        </div>

        {/* chat */}
        <div className="flex w-full grow flex-col gap-y-10 p-2.5">
          {/* prompt */}
          <div className="text-text-tertiary max-w-4/5 self-end rounded-tl-4xl rounded-br-4xl rounded-bl-4xl border border-white/10 p-5 text-right text-base shadow-xl">
            Hi, connected
            <span className="font-exo mt-1 block text-sm">12:59:03 PM</span>
          </div>
          {/* response */}
          <div className="text-text-secondary max-w-4/5 self-start rounded-tr-4xl rounded-br-4xl rounded-bl-4xl border border-white/40 p-5 text-left text-base shadow-xl">
            Hi, yes is connected Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Pariatur sit necessitatibus nobis. Pariatur, eaque
            fuga.
            <span className="font-exo mt-1 block text-sm">13:03:03 PM</span>
          </div>
          {/* typing message */}
          <div className="font-exo text-peach mt-auto animate-pulse text-base">
            typing...
          </div>
        </div>

        <form
          action="msg-form"
          className="bg-bg-secondary border-text-primary/50 flex h-24 w-full items-center border-t shadow inset-shadow-yellow-200"
        >
          <div className="flex w-24 cursor-pointer justify-center text-2xl">
            <i className="fa-solid fa-face-smile"></i>
          </div>
          <input
            type="text"
            className="text-text-tertiary h-full grow border-none pl-5 text-lg outline-none"
            placeholder="Type a message"
          />

          <div className="flex w-20 cursor-pointer justify-center">
            <i className="fa-solid fa-paper-plane block text-xl"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
