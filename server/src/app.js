import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { getCorsOptions } from './middleware/corsConfig.js';
import { createRateLimiter } from './middleware/rateLimiter.js';
import { validateChatInput } from './middleware/validate.js';
import { chatRoute } from './routes/chat.js';

dotenv.config();

const app = express();

// Security headers
app.use(helmet());

// CORS configuration
app.use(cors(getCorsOptions()));

// JSON Body Parser
app.use(express.json({ limit: '1mb' }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    phase: 'Production Ready',
    timestamp: new Date().toISOString(),
  });
});

// Chat AI Endpoint
const rateLimiter = createRateLimiter();
app.post('/api/chat', rateLimiter, validateChatInput, chatRoute);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Server Error]:', err);
  res.status(500).json({ error: 'Internal server error' });
});

export default app;
