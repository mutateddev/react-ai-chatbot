const Prompt = ({ text, timestamp }) => {
  return (
    <div className='max-w-[80%] self-end rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl border border-white/10 bg-white/5 px-4 py-3 text-right shadow-lg'>
      {/* message */}
      <p className='text-text-primary text-base leading-relaxed'>{text}</p>

      {/* timestamp */}
      <span className='font-exo text-text-tertiary mt-1 block text-xs'>
        {timestamp}
      </span>
    </div>
  );
};

export default Prompt;
