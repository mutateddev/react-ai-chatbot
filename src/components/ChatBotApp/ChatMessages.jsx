import { useRef } from 'react';
import useChat from '../../contexts/chat-context/useChat';
import Response from './Response';
import Prompt from './Prompt';
import TypingIndicator from './TypingIndicator';

const ChatMessages = () => {
  const chatEndRef = useRef(null);
  // FIX smooth scrolling when change chat to the end
  // useEffect(() => {
  //   chatEndRef.current?.scrollIntoView({
  //     behavior: 'smooth',
  //   });
  // }, [messages]);
  const { chats, activeChatId } = useChat();

  const messages = chats.find((chat) => chat.id === activeChatId).messages;

  const tempType = true;
  return (
    <div className='flex w-full grow flex-col gap-y-10 overflow-y-auto p-2.5'>
      {messages.map((msg, i) =>
        msg.type === 'prompt' ? (
          <Prompt key={i} text={msg.text} timestamp={msg.timestamp} />
        ) : (
          <Response key={i} text={msg.text} timestamp={msg.timestamp} />
        ),
      )}
      {/* /FIX type indicator */}
      {tempType && <TypingIndicator />}
      <div ref={chatEndRef}></div>
    </div>
  );
};

export default ChatMessages;
