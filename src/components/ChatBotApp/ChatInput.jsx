import { useState } from "react";
import EmojiPickerButton from "./EmojiPicker";

const ChatInput = ({
  inputValue,
  handleInputChange,
  handleKeyDown,
  sendMessage,
  setInputValue,
}) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiSelect = (emojiObj) => {
    setInputValue((prvInp) => prvInp + emojiObj.emoji);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="bg-bg-secondary border-text-primary/50 relative flex min-h-24 w-full items-center border-t shadow inset-shadow-yellow-200"
    >
      <EmojiPickerButton
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
        handleEmojiSelect={handleEmojiSelect}
      />

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="text-text-tertiary h-full grow border-none pl-5 text-lg outline-none focus:placeholder-transparent"
        placeholder="Type a message..."
        onFocus={() => setShowEmojiPicker(false)}
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
