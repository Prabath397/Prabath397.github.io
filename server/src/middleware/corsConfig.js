// CORS configuration — will be implemented in Phase 2
//
// Development: allows http://localhost:5173
// Production: allows only the deployed portfolio domain
//
// Configured via ALLOWED_ORIGIN environment variable

export function getCorsOptions() {
  return {
    origin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  };
}
