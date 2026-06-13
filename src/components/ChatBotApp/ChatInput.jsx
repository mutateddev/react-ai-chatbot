import { useState } from 'react';
import EmojiPickerButton from './EmojiPicker';
import useChat from '../../contexts/chat-context/useChat';

const ChatInput = () => {
  const { sendMessage } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmojiSelect = (emojiObj) => {
    setInputValue((prvInp) => prvInp + emojiObj.emoji);
  };

  const buildMessage = () => ({
    type: 'prompt',
    text: inputValue,
    timestamp: new Date().toLocaleTimeString(),
  });

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessage = buildMessage();
    sendMessage(newMessage);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className='bg-bg-secondary border-text-primary/50 relative flex min-h-24 w-full items-center border-t shadow inset-shadow-yellow-200'
    >
      <EmojiPickerButton
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
        handleEmojiSelect={handleEmojiSelect}
      />

      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className='text-text-tertiary h-full grow border-none pl-5 text-lg outline-none focus:placeholder-transparent'
        placeholder='Type a message...'
        onFocus={() => setShowEmojiPicker(false)}
      />

      <button
        onClick={handleSendMessage}
        className='flex w-20 cursor-pointer justify-center'
      >
        <i className='fa-solid fa-paper-plane block text-xl'></i>
      </button>
    </form>
  );
};

export default ChatInput;
