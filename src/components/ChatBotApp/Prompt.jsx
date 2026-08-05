const Prompt = ({ text, timestamp }) => {
  return (
    <div className='max-w-[90%] self-end rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl border border-white/10 bg-white/5 px-3 py-2 text-right shadow-lg sm:max-w-[80%] sm:px-4 sm:py-3'>
      <p className='text-text-primary text-sm leading-relaxed wrap-break-word sm:text-base'>
        {text}
      </p>

      <span className='font-exo text-text-tertiary mt-1 block text-[10px] sm:text-xs'>
        {timestamp}
      </span>
    </div>
  );
};

export default Prompt;
