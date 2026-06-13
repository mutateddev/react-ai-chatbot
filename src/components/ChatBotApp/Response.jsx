const Response = ({ text, timestamp }) => {
  return (
    <div className='text-text-secondary max-w-4/5 self-start rounded-tr-4xl rounded-br-4xl rounded-bl-4xl border border-white/40 p-5 text-left text-base shadow-xl'>
      {text}
      <span className='font-exo mt-1 block text-sm'>{timestamp}</span>
    </div>
  );
};

export default Response;
