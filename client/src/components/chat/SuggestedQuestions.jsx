const DEFAULT_SUGGESTIONS = [
  "What full-stack projects has Prabath built?",
  "What are his backend and database skills?",
  "Tell me about his education and grades",
  "How can I contact or hire Prabath?",
];

export function SuggestedQuestions({ onSelectQuestion, disabled }) {
  return (
    <div className="chat-suggestions">
      <p className="chat-suggestions-title">
        <i className="fas fa-lightbulb"></i> Suggested questions:
      </p>
      <div className="chat-chips">
        {DEFAULT_SUGGESTIONS.map((q, idx) => (
          <button
            key={idx}
            type="button"
            className="chat-chip"
            onClick={() => onSelectQuestion(q)}
            disabled={disabled}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
