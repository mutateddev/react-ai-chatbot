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

    sendMessage(buildMessage('prompt', text));

    setInputValue('');
    setAiTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to get AI response');
      }

      sendMessage(buildMessage('response', data.message));
    } catch (err) {
      console.error('AI error:', err);

      sendMessage(
        buildMessage(
          'response',
          '⚠️ Unable to reach the AI service. If the service is restricted in your region, try using a without VPN or different IP and send your message again.',
        ),
      );
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
      {aiTyping && (
        <div className='absolute -top-10 left-2 sm:left-3'>
          <TypingIndicator />
        </div>
      )}

      <form
        onSubmit={(e) => e.preventDefault()}
        className='bg-bg-secondary border-text-primary/50 flex min-h-16 w-full items-center border-t px-2 shadow sm:min-h-24 sm:px-0'
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
          className='text-text-tertiary h-full min-w-0 grow border-none px-2 text-sm outline-none placeholder:text-sm focus:placeholder-transparent sm:pl-5 sm:text-lg'
          placeholder='Type a message...'
          onFocus={() => setShowEmojiPicker(false)}
        />

        <button
          type='button'
          onClick={handleSendMessage}
          disabled={aiTyping}
          className='flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center sm:h-auto sm:w-20'
        >
          <i
            className={`fa-solid fa-paper-plane text-lg transition sm:text-xl ${
              aiTyping ? 'cursor-not-allowed opacity-40' : ''
            }`}
          />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
