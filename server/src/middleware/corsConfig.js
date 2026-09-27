const ALLOWED_ORIGINS = [
  'http://localhost:5173',
  'http://localhost:4173',
  'https://prabath397.github.io',
  'https://prabath397-github-io.vercel.app',
];

export function getCorsOptions() {
  return {
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or server-to-server)
      if (!origin) return callback(null, true);

      const customOrigin = process.env.ALLOWED_ORIGIN;
      if (
        ALLOWED_ORIGINS.includes(origin) ||
        (customOrigin && origin === customOrigin) ||
        origin.endsWith('.vercel.app')
      ) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked for origin: ${origin}`));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  };
}
