const Prompt = ({ text, timestamp: timestamp }) => {
  return (
    <div className='text-text-tertiary max-w-4/5 self-end rounded-tl-4xl rounded-br-4xl rounded-bl-4xl border border-white/10 p-5 text-right text-base shadow-xl'>
      {text}
      <span className='font-exo mt-1 block text-sm'>{timestamp}</span>
    </div>
  );
};

export default Prompt;
