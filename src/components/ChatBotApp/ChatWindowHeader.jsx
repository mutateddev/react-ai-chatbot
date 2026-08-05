import useChat from '../../contexts/chat-context/useChat';

const ChatWindowHeader = ({ openSidebar }) => {
  const { deactivateChat } = useChat();

  return (
    <div className='bg-bg-tertiary flex min-h-16 w-full items-center justify-between border-b border-white/10 px-4 sm:px-5'>
      <div className='flex items-center gap-3'>
        {/* Mobile Menu Button */}
        <button
          onClick={openSidebar}
          className='text-text-tertiary flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition hover:bg-white/10 hover:text-white md:hidden'
          aria-label='Open sidebar'
        >
          <i className='fa-solid fa-bars text-lg' />
        </button>

        <h3 className='font-exo text-text-primary text-lg font-bold tracking-widest uppercase select-none sm:text-xl'>
          Chat with AI
        </h3>
      </div>

      <button
        onClick={deactivateChat}
        className='text-text-tertiary flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95'
      >
        <span className='hidden text-sm font-medium sm:block'>Back</span>

        <i className='fa-solid fa-arrow-right text-lg' />
      </button>
    </div>
  );
};

export default ChatWindowHeader;
