import { useEffect, useState } from 'react';
import useChat from '../../contexts/chat-context/useChat';

const ChatBotStart = () => {
  const { activateChat, chats, createChat } = useChat();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(t);
  }, []);

  const handleStartChat = () => {
    if (chats.length === 0) createChat();
    activateChat();
  };

  return (
    <div className='bg-bg-primary fixed inset-0 flex items-center justify-center overflow-hidden'>
      {/* layered gradient mesh background */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,166,246,0.15),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(137,180,250,0.12),transparent_55%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,169,127,0.08),transparent_60%)]' />
      </div>

      {/* subtle noise overlay feel */}
      <div className='bg-bg-secondary absolute inset-0 opacity-10' />

      <div
        className={`relative flex flex-col items-center gap-8 text-center transition-all duration-700 ease-out ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <h1 className='font-exo text-text-primary text-6xl font-bold tracking-widest uppercase'>
          Chat AI
        </h1>

        <p className='text-text-tertiary max-w-md text-base leading-relaxed'>
          A minimal AI workspace. Think, chat, and build ideas instantly.
        </p>

        <button
          onClick={handleStartChat}
          className='from-linear-pink to-linear-blue relative cursor-pointer rounded-2xl bg-linear-to-r px-10 py-4 text-xl font-bold tracking-wider text-black/80 uppercase shadow-[0_0_30px_rgba(201,166,246,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(137,180,250,0.35)] active:scale-95'
        >
          Start Chat
        </button>

        <span className='text-text-tertiary animate-pulse text-xs tracking-wider opacity-60'>
          Press Enter to begin
        </span>
      </div>
    </div>
  );
};

export default ChatBotStart;
