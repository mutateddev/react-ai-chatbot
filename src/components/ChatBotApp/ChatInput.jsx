const ChatInput = ({
  inputValue,
  handleInputChange,
  handleKeyDown,
  sendMessage,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-bg-secondary border-text-primary/50 flex min-h-24 w-full items-center border-t shadow inset-shadow-yellow-200"
    >
      <div className="flex w-24 cursor-pointer justify-center text-2xl">
        <i className="fa-solid fa-face-smile"></i>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="text-text-tertiary h-full grow border-none pl-5 text-lg outline-none focus:placeholder-transparent"
        placeholder="Type a message..."
      />

      <button
        onClick={sendMessage}
        className="flex w-20 cursor-pointer justify-center"
      >
        <i className="fa-solid fa-paper-plane block text-xl"></i>
      </button>
    </form>
  );
};

export default ChatInput;
