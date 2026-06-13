import useChat from '../../contexts/chat-context/useChat';

const ChatWindowHeader = () => {
  const { deactivateChat } = useChat();

  return (
    <div className='bg-bg-tertiary flex min-h-16 w-full items-center justify-between border-b border-white/10 px-5'>
      <h3 className='font-exo text-text-primary text-xl font-bold tracking-widest uppercase select-none'>
        Chat with AI
      </h3>

      <button
        onClick={deactivateChat}
        className='text-text-tertiary flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95'
      >
        <span className='text-sm font-medium'>Back</span>
        <i className='fa-solid fa-arrow-right text-lg' />
      </button>
    </div>
  );
};

export default ChatWindowHeader;
