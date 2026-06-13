import useChat from '../../contexts/chat-context/useChat';
import Response from './Response';
import Prompt from './Prompt';
import { useEffect, useRef } from 'react';

const ChatMessages = () => {
  const { chats, activeChatId } = useChat();
  const scrollRef = useRef(null);

  const activeChat = chats.find((chat) => chat.id === activeChatId);
  const messages = activeChat?.messages || [];

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [messages]);

  return (
    <div className='flex w-full grow flex-col gap-y-6 overflow-y-auto p-3'>
      {messages.map((msg) =>
        msg.type === 'prompt' ? (
          <Prompt
            key={msg.timestamp}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ) : (
          <Response
            key={msg.timestamp}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ),
      )}

      <div ref={scrollRef} />
    </div>
  );
};

export default ChatMessages;
