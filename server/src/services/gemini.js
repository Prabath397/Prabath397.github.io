import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildSystemPrompt } from '../prompts/system.js';

let genAI = null;

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    return null;
  }
  if (!genAI) {
    genAI = new GoogleGenerativeAI(apiKey);
  }
  return genAI;
}

async function executeChatWithModel(client, modelName, systemPrompt, history, message) {
  const model = client.getGenerativeModel({
    model: modelName,
    systemInstruction: systemPrompt,
  });

  const formattedHistory = (history || []).map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content || msg.text || '' }],
  }));

  const chat = model.startChat({
    history: formattedHistory,
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 1024,
    },
  });

  const result = await chat.sendMessage(message);
  const response = await result.response;
  return response.text();
}

/**
 * Generates an AI response grounded in the portfolio knowledge base.
 */
export async function generateResponse(message, history = [], portfolioContext = '') {
  const client = getGeminiClient();

  if (!client) {
    console.warn('[Gemini Service] GEMINI_API_KEY not configured in environment.');
    return {
      reply: "The Gemini AI assistant service is currently running in fallback mode because `GEMINI_API_KEY` has not been configured in `server/.env`. Please set a valid Google Gemini API key to enable dynamic AI responses!",
      sources: ['system.config'],
    };
  }

  const systemPrompt = buildSystemPrompt(portfolioContext);
  const preferredModel = process.env.GEMINI_MODEL || 'gemini-3.6-flash';

  try {
    // Attempt with user-preferred model (e.g. gemini-3.6-flash)
    const text = await executeChatWithModel(client, preferredModel, systemPrompt, history, message);
    return {
      reply: text,
      sources: ['portfolio-knowledge-base'],
      modelUsed: preferredModel,
    };
  } catch (error) {
    // If the specified model is not found in the public API (404), fall back to gemini-2.0-flash
    const isModelNotFound = error.message?.includes('404') || error.message?.toLowerCase().includes('not found');

    if (isModelNotFound && preferredModel !== 'gemini-2.0-flash') {
      console.warn(`[Gemini Service] Model "${preferredModel}" not found on Google API. Auto-falling back to "gemini-2.0-flash"...`);
      try {
        const fallbackText = await executeChatWithModel(client, 'gemini-2.0-flash', systemPrompt, history, message);
        return {
          reply: fallbackText,
          sources: ['portfolio-knowledge-base'],
          modelUsed: 'gemini-2.0-flash (fallback from ' + preferredModel + ')',
        };
      } catch (fallbackError) {
        console.error('[Gemini Service] Fallback error:', fallbackError);
        throw new Error(`AI generation error: ${fallbackError.message}`);
      }
    }

    console.error('[Gemini Service] Error generating content:', error);
    throw new Error(`AI generation error: ${error.message}`);
  }
}
