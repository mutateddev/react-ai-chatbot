import useChat from '../../contexts/chat-context/useChat';
import Response from './Response';
import Prompt from './Prompt';
import { useEffect, useMemo, useRef } from 'react';

const ChatMessages = () => {
  const { chats, activeChatId } = useChat();
  const scrollRef = useRef();
  const activeChat = chats.find((chat) => chat.id === activeChatId);
  const messages = useMemo(() => activeChat?.messages ?? [], [activeChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className='flex w-full grow flex-col gap-y-10 overflow-y-auto p-2.5'>
      {messages.map((msg, i) =>
        msg.type === 'prompt' ? (
          <Prompt key={i} text={msg.text} timestamp={msg.timestamp} />
        ) : (
          <Response key={i} text={msg.text} timestamp={msg.timestamp} />
        ),
      )}

      <div ref={scrollRef}></div>
    </div>
  );
};

export default ChatMessages;
