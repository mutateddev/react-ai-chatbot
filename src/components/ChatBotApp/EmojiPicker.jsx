import EmojiPicker from 'emoji-picker-react';

const EmojiPickerButton = ({
  showEmojiPicker,
  setShowEmojiPicker,
  handleEmojiSelect,
}) => {
  return (
    <div className='relative flex w-24 justify-center text-2xl'>
      <i
        className='fa-solid fa-face-smile text-text-tertiary cursor-pointer transition hover:text-white'
        onClick={() => setShowEmojiPicker((prev) => !prev)}
      />

      {showEmojiPicker && (
        <div
          className='absolute bottom-14 left-0 z-50'
          onClick={(e) => e.stopPropagation()}
        >
          <EmojiPicker
            onEmojiClick={(emojiObject) => handleEmojiSelect(emojiObject)}
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerButton;
