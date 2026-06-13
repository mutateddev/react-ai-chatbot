import { useState } from 'react';
import EmojiPickerButton from './EmojiPicker';
import useChat from '../../contexts/chat-context/useChat';
import TypingIndicator from './TypingIndicator';

const ChatInput = () => {
  const { sendMessage } = useChat();

  const [inputValue, setInputValue] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [aiTyping, setAiTyping] = useState(false);

  const handleEmojiSelect = (emojiObj) => {
    setInputValue((prev) => prev + emojiObj.emoji);
  };

  const buildMessage = (type, text) => ({
    type,
    text,
    timestamp: new Date().toLocaleTimeString(),
  });

  const handleSendMessage = async () => {
    const text = inputValue.trim();
    if (!text || aiTyping) return;

    // send user message
    sendMessage(buildMessage('prompt', text));
    setInputValue('');
    setAiTyping(true);

    try {
      const res = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
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
                content: text,
              },
            ],
          }),
        },
      );

      const data = await res.json();

      const aiMessage = buildMessage(
        'response',
        data.choices[0].message.content,
      );

      sendMessage(aiMessage);
    } catch (err) {
      console.error('AI error:', err);
    } finally {
      setAiTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className='relative'>
      {/* typing indicator (outside input) */}
      {aiTyping && (
        <div className='absolute -top-10 left-3'>
          <TypingIndicator />
        </div>
      )}

      <form
        onSubmit={(e) => e.preventDefault()}
        className='bg-bg-secondary border-text-primary/50 flex min-h-24 w-full items-center border-t shadow'
      >
        <EmojiPickerButton
          showEmojiPicker={showEmojiPicker}
          setShowEmojiPicker={setShowEmojiPicker}
          handleEmojiSelect={handleEmojiSelect}
        />

        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className='text-text-tertiary h-full grow border-none pl-5 text-lg outline-none focus:placeholder-transparent'
          placeholder='Type a message...'
          onFocus={() => setShowEmojiPicker(false)}
        />

        <button
          type='button'
          onClick={handleSendMessage}
          disabled={aiTyping}
          className='flex w-20 cursor-pointer justify-center'
        >
          <i
            className={`fa-solid fa-paper-plane text-xl transition ${
              aiTyping ? 'cursor-not-allowed opacity-40' : ''
            }`}
          />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
