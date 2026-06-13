import useChat from '../../contexts/chat-context/useChat';

const ChatWindowHeader = () => {
  const { deactivateChat } = useChat();
  return (
    <div className='bg-bg-tertiary flex min-h-20 w-full items-center justify-between px-5'>
      <h3 className='font-exo text-xl font-bold tracking-wide uppercase'>
        chat with ai
      </h3>
      <div onClick={deactivateChat}>
        <i className='fa-solid fa-arrow-right cursor-pointer text-3xl'></i>
      </div>
    </div>
  );
};

export default ChatWindowHeader;
