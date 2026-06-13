import EmojiPicker from 'emoji-picker-react';

const EmojiPickerButton = ({
  showEmojiPicker,
  setShowEmojiPicker,
  handleEmojiSelect,
}) => {
  return (
    <div className='flex w-24 cursor-pointer justify-center text-2xl'>
      <i
        className='fa-solid fa-face-smile'
        onClick={() => setShowEmojiPicker((prv) => !prv)}
      ></i>

      {showEmojiPicker && (
        <div
          onClick={(e) => e.stopPropagation()}
          className='absolute bottom-16 left-20'
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
