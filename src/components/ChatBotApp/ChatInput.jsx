import { useState } from 'react';
import EmojiPickerButton from './EmojiPicker';
import useChat from '../../contexts/chat-context/useChat';
import TypingIndicator from './TypingIndicator';

const ChatInput = () => {
  const { sendMessage } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [aiTyping, setAiTyping] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEmojiSelect = (emojiObj) => {
    setInputValue((prvInp) => prvInp + emojiObj.emoji);
  };

  const buildMessage = (type, text) => ({
    type,
    text,
    timestamp: new Date().toLocaleTimeString(),
  });

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const userMessage = buildMessage('prompt', inputValue);
    sendMessage(userMessage);
    setInputValue('');
    setAiTyping(true);
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_Groq_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'user',
            content: inputValue,
          },
        ],
      }),
    });
    const data = await res.json();
    const aiMessage = buildMessage('response', data.choices[0].message.content);
    sendMessage(aiMessage);
    setAiTyping(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className='relative'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='bg-bg-secondary border-text-primary/50 flex min-h-24 w-full items-center border-t shadow inset-shadow-yellow-200'
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
          disabled={aiTyping}
        >
          <i
            className={`fa-solid fa-paper-plane block text-xl ${aiTyping ? 'cursor-not-allowed opacity-40' : ''}`}
          ></i>

          {aiTyping && <TypingIndicator />}
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
