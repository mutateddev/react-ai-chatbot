import useChat from '../../contexts/chat-context/useChat';

const ChatListHeader = () => {
  const { createChat } = useChat();

  const handleCreateChat = (e) => {
    e.stopPropagation();
    createChat();
  };

  return (
    <div className='text-mauve flex w-full items-center justify-between px-2.5 py-5 text-xl'>
      <h2 className='font-exo font-bold tracking-wider uppercase'>Chat List</h2>
      <i
        className='fa-solid fa-pen-to-square cursor-pointer'
        onClick={(e) => handleCreateChat(e)}
      ></i>
    </div>
  );
};

export default ChatListHeader;
