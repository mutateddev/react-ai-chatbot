import { useReducer } from 'react';
import chatContext from './chat-context';
import { v4 as uuidv4 } from 'uuid';

const initState = { chats: [], activeChatId: null, isChatOpen: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'chat/start':
      return { ...state, isChatOpen: true };

    case 'chat/stop':
      return { ...state, isChatOpen: false };

    case 'chat/create': {
      const newChat = {
        id: uuidv4(),
        title: `Chat ${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString()}`,
        messages: action.payload.initMessage
          ? [
              {
                type: 'prompt',
                text: action.payload.initMessage,
                timestamp: new Date().toLocaleTimeString(),
              },
            ]
          : [],
      };
      return {
        ...state,
        chats: [newChat, ...state.chats],
        activeChatId: newChat.id,
      };
    }

    case 'chat/delete': {
      const deletedChatId = action.payload.id;

      const updatedChats = state.chats.filter(
        (chat) => chat.id !== deletedChatId,
      );

      const isActiveChatDeleted = state.activeChatId === deletedChatId;

      return {
        ...state,
        chats: updatedChats,
        activeChatId: isActiveChatDeleted
          ? (updatedChats[0]?.id ?? null)
          : state.activeChatId,
        isChatOpen: updatedChats.length > 0,
      };
    }

    case 'chat/select': {
      const selectedChat = state.chats.find(
        (chat) => chat.id === action.payload.id,
      );
      return { ...state, activeChatId: selectedChat.id };
    }

    case 'chat/sendMessage': {
      const updatedChats = state.chats.map((chat) => {
        if (chat.id !== state.activeChatId) return chat;

        return {
          ...chat,
          messages: [...chat.messages, action.payload.message],
        };
      });

      return { ...state, chats: updatedChats };
    }

    default:
      return state;
  }
};

const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const activateChat = () => {
    dispatch({ type: 'chat/start' });
  };

  const deactivateChat = () => {
    dispatch({ type: 'chat/stop' });
  };

  const createChat = (initMessage = '') => {
    dispatch({ type: 'chat/create', payload: { initMessage } });
  };

  const selectChat = (id) => {
    dispatch({ type: 'chat/select', payload: { id } });
  };

  const deleteChat = (id) => {
    dispatch({ type: 'chat/delete', payload: { id } });
  };

  const sendMessage = (message) => {
    console.log(message);
    dispatch({ type: 'chat/sendMessage', payload: { message } });
  };

  const ctxValue = {
    chats: state.chats,
    activeChatId: state.activeChatId,
    isChatOpen: state.isChatOpen,
    activateChat,
    deactivateChat,
    createChat,
    selectChat,
    deleteChat,
    sendMessage,
  };
  return (
    <chatContext.Provider value={ctxValue}>{children}</chatContext.Provider>
  );
};

export default ChatProvider;
