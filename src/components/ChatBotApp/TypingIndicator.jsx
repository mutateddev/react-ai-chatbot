const TypingIndicator = () => {
  return (
    <div className='text-peach flex items-center gap-2 px-4 py-2'>
      {/* dots */}
      <div className='flex items-center gap-1'>
        <span className='bg-peach h-2 w-2 animate-bounce rounded-full [animation-delay:-0.2s]' />
        <span className='bg-peach h-2 w-2 animate-bounce rounded-full [animation-delay:-0.1s]' />
        <span className='bg-peach h-2 w-2 animate-bounce rounded-full' />
      </div>

      {/* text */}
      <p className='font-exo text-sm opacity-80'>Typing</p>
    </div>
  );
};

export default TypingIndicator;
