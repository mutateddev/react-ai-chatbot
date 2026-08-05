import EmojiPicker from 'emoji-picker-react';

const EmojiPickerButton = ({
  showEmojiPicker,
  setShowEmojiPicker,
  handleEmojiSelect,
}) => {
  return (
    <div className='relative flex w-12 shrink-0 justify-center text-xl sm:w-24 sm:text-2xl'>
      <i
        className='fa-solid fa-face-smile text-text-tertiary cursor-pointer transition hover:text-white'
        onClick={() => setShowEmojiPicker((prev) => !prev)}
      />

      {showEmojiPicker && (
        <div
          className='absolute bottom-12 left-0 z-50 sm:bottom-14'
          onClick={(e) => e.stopPropagation()}
        >
          <div className='max-w-[calc(100vw-1rem)] overflow-hidden rounded-lg'>
            <EmojiPicker
              onEmojiClick={(emojiObject) => handleEmojiSelect(emojiObject)}
              width={300}
              height={350}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiPickerButton;
