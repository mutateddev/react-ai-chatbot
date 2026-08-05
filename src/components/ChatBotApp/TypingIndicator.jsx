const TypingIndicator = () => {
  return (
    <div className='text-peach flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2'>
      {/* dots */}
      <div className='flex items-center gap-1'>
        <span className='bg-peach h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.2s] sm:h-2 sm:w-2' />

        <span className='bg-peach h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.1s] sm:h-2 sm:w-2' />

        <span className='bg-peach h-1.5 w-1.5 animate-bounce rounded-full sm:h-2 sm:w-2' />
      </div>

      {/* text */}
      <p className='font-exo text-xs opacity-80 sm:text-sm'>Typing</p>
    </div>
  );
};

export default TypingIndicator;
