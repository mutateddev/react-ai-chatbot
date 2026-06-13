import useChat from '../../contexts/chat-context/useChat';

const ChatListHeader = () => {
  const { createChat } = useChat();

  const handleCreateChat = (e) => {
    e.stopPropagation();
    createChat();
  };

  return (
    <div className='bg-bg-secondary/60 flex items-center justify-between border-b border-white/10 px-4 py-4 backdrop-blur-md'>
      <div className='flex flex-col'>
        <h2 className='font-exo text-text-tertiary hidden text-sm tracking-widest uppercase sm:block'>
          Conversations
        </h2>

        <span className='text-text-primary mr-3 text-sm font-semibold sm:text-lg'>
          Chat List
        </span>
      </div>

      {/* BUTTON */}
      <button
        onClick={handleCreateChat}
        className='group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white/5 transition-all duration-300 hover:bg-white/10 active:scale-95'
      >
        <i className='fa-solid fa-pen-to-square text-text-tertiary text-base transition-colors duration-300 group-hover:text-white' />

        {/* glow */}
        <span className='from-linear-pink/20 to-linear-blue/20 absolute inset-0 rounded-xl bg-linear-to-r opacity-0 blur-md transition-all duration-300 group-hover:opacity-100' />
      </button>
    </div>
  );
};

export default ChatListHeader;
