import { useChat } from '../../hooks/useChat';
import { ChatPanel } from './ChatPanel';

export function ChatWidget() {
  const {
    messages,
    isLoading,
    isOpen,
    sendMessage,
    toggleChat,
    closeChat,
    clearChat,
  } = useChat();

  return (
    <div className="chat-widget-container">
      {/* Floating Action Button */}
      <button
        type="button"
        className={`chat-fab ${isOpen ? 'is-active' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open Ask My Portfolio assistant'}
        aria-expanded={isOpen}
      >
        <span className="chat-fab-icon">
          {isOpen ? (
            <i className="fas fa-xmark"></i>
          ) : (
            <i className="fas fa-comment-dots"></i>
          )}
        </span>
        {!isOpen && (
          <span className="chat-fab-label">
            Ask My Portfolio <span className="chat-fab-sparkle">✦</span>
          </span>
        )}
      </button>

      {/* Floating Chat Panel */}
      <ChatPanel
        isOpen={isOpen}
        onClose={closeChat}
        messages={messages}
        isLoading={isLoading}
        onSendMessage={sendMessage}
        onClearChat={clearChat}
      />
    </div>
  );
}
