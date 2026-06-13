import useChat from '../../contexts/chat-context/useChat';
import Response from './Response';
import Prompt from './Prompt';
import { useEffect, useMemo, useRef } from 'react';

const ChatMessages = () => {
  const { chats, activeChatId } = useChat();
  const scrollRef = useRef(null);

  const activeChat = chats.find((chat) => chat.id === activeChatId);
  const messages = useMemo(() => {
    return activeChat?.messages ?? [];
  }, [activeChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [messages]);

  return (
    <div className='flex w-full grow flex-col gap-y-6 overflow-y-auto p-3'>
      {messages.length === 0 ? (
        <div className='flex grow flex-col items-center justify-center text-center'>
          <i className='fa-solid fa-comments text-linear-pink mb-4 text-6xl' />

          <h3 className='font-exo text-text-primary text-3xl font-bold tracking-wider'>
            Start a New Chat
          </h3>

          <p className='text-text-tertiary mt-3 max-w-md text-lg'>
            Ask anything. Explore ideas, solve problems, or just have a
            conversation.
          </p>
        </div>
      ) : (
        messages.map((msg) =>
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
        )
      )}

      <div ref={scrollRef} />
    </div>
  );
};

export default ChatMessages;
