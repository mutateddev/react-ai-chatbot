'use client';

import { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const ChatBotApp = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='relative flex h-full w-full overflow-hidden'>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden'
        />
      )}

      {/* Sidebar */}
      <ChatList
        isSidebarOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      {/* Main Chat */}
      <ChatWindow openSidebar={() => setIsSidebarOpen(true)} />
    </div>
  );
};

export default ChatBotApp;
