import { useContext } from 'react';
import chatContext from './chat-context';

const useChat = () => {
  const ctx = useContext(chatContext);

  if (!ctx) {
    throw new Error('useChat must be used within ChatProvider');
  }

  return ctx;
};

export default useChat;
