import ReactMarkdown from 'react-markdown';

export function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  const isError = Boolean(message.isError);

  return (
    <div className={`chat-message-row ${isUser ? 'chat-row-user' : 'chat-row-assistant'}`}>
      {!isUser && (
        <img
          src="/images/profile-nav.png"
          alt="Prabath AI"
          className="chat-avatar-img"
        />
      )}
      <div
        className={`chat-bubble ${isUser ? 'chat-bubble-user' : 'chat-bubble-assistant'} ${isError ? 'chat-bubble-error' : ''}`}
      >
        <div className="chat-text-markdown">
          {isUser ? (
            <p className="chat-text">{message.content}</p>
          ) : (
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer" className="chat-link" />
                ),
                p: ({ node, ...props }) => <p className="chat-md-p" {...props} />,
                ul: ({ node, ...props }) => <ul className="chat-md-ul" {...props} />,
                ol: ({ node, ...props }) => <ol className="chat-md-ol" {...props} />,
                li: ({ node, ...props }) => <li className="chat-md-li" {...props} />,
                strong: ({ node, ...props }) => <strong className="chat-md-strong" {...props} />,
              }}
            >
              {message.content}
            </ReactMarkdown>
          )}
        </div>

        <div className="chat-meta">
          <span className="chat-time">{message.timestamp}</span>
          {!isUser && message.sources && message.sources.length > 0 && !isError && (
            <span className="chat-source-tag">
              <i className="fas fa-shield-halved"></i> Grounded
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
