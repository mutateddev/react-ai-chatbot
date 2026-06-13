const ChatWindow = ({ children }) => {
  return (
    <div className='bg-bg-primary flex h-full w-4/5 flex-col overflow-hidden'>
      {children}
    </div>
  );
};

export default ChatWindow;
