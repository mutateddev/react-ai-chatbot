const Response = ({ text, timestamp }) => {
  return (
    <div className='group bg-bg-secondary max-w-[80%] self-start rounded-tr-4xl rounded-br-4xl rounded-bl-4xl border border-white/10 px-4 py-3 text-left shadow-lg transition-all duration-200 hover:bg-white/5'>
      <p className='text-text-secondary text-base leading-relaxed'>{text}</p>

      <span className='font-exo text-text-tertiary mt-1 block text-xs opacity-70 transition-opacity duration-200 group-hover:opacity-100'>
        {timestamp}
      </span>
    </div>
  );
};

export default Response;
