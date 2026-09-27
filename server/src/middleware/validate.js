export function validateChatInput(req, res, next) {
  const { message, history } = req.body || {};

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'Message is required and must be a non-empty string.' });
  }

  if (message.length > 500) {
    return res.status(400).json({ error: 'Message length exceeds maximum allowed limit of 500 characters.' });
  }

  if (history && !Array.isArray(history)) {
    return res.status(400).json({ error: 'History must be an array of prior messages.' });
  }

  if (Array.isArray(history) && history.length > 20) {
    return res.status(400).json({ error: 'History length exceeds maximum allowed limit of 20 messages.' });
  }

  next();
}
