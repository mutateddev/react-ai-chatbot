import Response from "./Response";
import Prompt from "./Prompt";
import TypingIndicator from "./TypingIndicator";

const ChatMessages = ({ messages, isTyping, chatEndRef }) => {
  return (
    <div className="flex w-full grow flex-col gap-y-10 overflow-y-auto p-2.5">
      {messages.map((msg, i) =>
        msg.type === "prompt" ? (
          <Prompt key={i} text={msg.text} timestamp={msg.timestamp} />
        ) : (
          <Response key={i} text={msg.text} timestamp={msg.timestamp} />
        ),
      )}

      {isTyping && <TypingIndicator />}
      <div ref={chatEndRef}></div>
    </div>
  );
};

export default ChatMessages;
