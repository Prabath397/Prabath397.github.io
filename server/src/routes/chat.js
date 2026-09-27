import { getPortfolioContext } from '../services/knowledge.js';
import { generateResponse } from '../services/gemini.js';

export async function chatRoute(req, res) {
  try {
    const { message, history } = req.body;

    // 1. Load structured portfolio context
    const context = getPortfolioContext();

    // 2. Call Gemini API service with message, history, and context
    const result = await generateResponse(message, history, context);

    // 3. Return grounded response
    res.json({
      reply: result.reply,
      sources: result.sources || ['portfolio-knowledge-base'],
      modelUsed: result.modelUsed,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[Chat Route Error]:', error);
    res.status(500).json({
      error: 'Failed to process chat query.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
