const Response = ({ text, timestamp }) => {
  return (
    <div className='group bg-bg-secondary max-w-[90%] self-start rounded-tr-4xl rounded-br-4xl rounded-bl-4xl border border-white/10 px-3 py-2 text-left shadow-lg transition-all duration-200 hover:bg-white/5 sm:max-w-[80%] sm:px-4 sm:py-3'>
      <p className='text-text-secondary text-sm leading-relaxed break-words sm:text-base'>
        {text}
      </p>

      <span className='font-exo text-text-tertiary mt-1 block text-[10px] opacity-70 transition-opacity duration-200 group-hover:opacity-100 sm:text-xs'>
        {timestamp}
      </span>
    </div>
  );
};

export default Response;
