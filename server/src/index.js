// Server entry point — will be implemented in Phase 2
// This file will start the Express server for local development.

import app from './app.js';

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`[server] Portfolio API running on http://localhost:${PORT}`);
});
