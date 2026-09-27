import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { SuggestedQuestions } from './SuggestedQuestions';
import { ChatInput } from './ChatInput';

export function ChatPanel({
  isOpen,
  onClose,
  messages,
  isLoading,
  onSendMessage,
  onClearChat,
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="chat-panel" role="dialog" aria-label="AI Portfolio Assistant Chat" aria-modal="false">
      {/* Header */}
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-bot-avatar">
            <img
              src="/images/profile-nav.png"
              alt="Prabath Jayasuriya"
              className="chat-bot-avatar-img"
            />
          </div>
          <div>
            <div className="chat-header-title">
              <h4>Ask My Portfolio</h4>
              <span className="chat-live-badge">
                <span className="chat-live-dot"></span> Powered by Gemini
              </span>
            </div>
            <p className="chat-header-sub">Grounded in authentic portfolio data</p>
          </div>
        </div>
        <div className="chat-header-actions">
          <button
            type="button"
            className="chat-action-btn"
            onClick={onClearChat}
            title="Clear chat history"
            aria-label="Clear chat"
          >
            <i className="fas fa-trash-can"></i>
          </button>
          <button
            type="button"
            className="chat-action-btn"
            onClick={onClose}
            title="Close chat"
            aria-label="Close chat window"
          >
            <i className="fas fa-xmark"></i>
          </button>
        </div>
      </div>

      {/* Body: Messages */}
      <div className="chat-body">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}

        {isLoading && (
          <div className="chat-message-row chat-row-assistant">
            <img
              src="/images/profile-nav.png"
              alt="Prabath AI"
              className="chat-avatar-img"
            />
            <div className="chat-bubble chat-bubble-assistant chat-typing-bubble">
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
              <span className="typing-dot"></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Footer / Input area */}
      <div className="chat-footer">
        {messages.length <= 2 && (
          <SuggestedQuestions onSelectQuestion={onSendMessage} disabled={isLoading} />
        )}
        <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
        <p className="chat-disclaimer">
          Responses are generated from Prabath's portfolio data.
        </p>
      </div>
    </div>
  );
}
