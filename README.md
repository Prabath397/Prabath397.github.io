# Prabath Jayasuriya — AI-Powered Developer Portfolio

A modern, responsive developer portfolio for **Prabath Udayanga Jayasuriya** featuring an integrated **"Ask My Portfolio" AI Assistant** powered by **Google Gemini**.

🌐 **Live Site:** [https://Prabath397.github.io](https://Prabath397.github.io)

---

## Overview

This repository powers my personal developer portfolio, combining a high-performance **React 19** frontend with an intelligent **Gemini-powered AI assistant** backend. Visitors can explore my background, technical skills, featured full-stack projects, education, and credentials, or interact with the AI assistant to ask questions about my experience.

The assistant is strictly grounded in verified portfolio data and declines to hallucinate unlisted claims.

---

## Highlights

- **"Ask My Portfolio" AI Assistant:** Floating chat widget powered by Google Gemini with low-temperature grounding to answer questions about projects, stack, experience, and background.
- **Responsive Design:** Optimized layout for desktop, tablet, and mobile screens.
- **Theme Switcher:** Seamless Dark and Light theme toggle with `localStorage` persistence.
- **Interactive Certificate Previews:** In-browser high-resolution certificate viewing with LinkedIn verification links.
- **Project Showcase:** Highlights full-stack applications, live demonstrations, and GitHub repositories.
- **Downloadable CV:** Direct access to up-to-date curriculum vitae.
- **Security & Performance:** Server-isolated API keys, rate-limiting, Helmet security headers, and static CDN delivery.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite 6, Custom Modular CSS, Font Awesome 6, Inter font |
| **Backend & API** | Node.js, Express 5, Helmet, CORS, Express-Rate-Limit |
| **AI Integration** | Google Gemini API |
| **Grounding Strategy** | Context Injection with strict negative-constraint system prompt |
| **Hosting** | GitHub Pages (Frontend) & Vercel Serverless (AI Chat API) |

---

## Project Structure

```text
.
├── api/                    # Serverless API routes (POST /api/chat)
│   └── chat.js
├── client/                 # React 19 + Vite 6 Frontend
│   ├── public/             # Static assets (CV, certificate images, favicon)
│   ├── src/
│   │   ├── components/     # Layout, sections, UI, and Chat components
│   │   ├── context/        # ThemeContext (Light & Dark modes)
│   │   ├── data/           # Portfolio dataset for client rendering
│   │   ├── hooks/          # Custom hooks (useTheme, useScrollSpy, useChat)
│   │   └── styles/         # CSS variables & modular component styles
│   ├── index.html
│   └── vite.config.js
├── server/                 # Node.js + Express 5 Backend
│   ├── data/               # Structured JSON knowledge base files
│   ├── src/
│   │   ├── middleware/     # CORS, Helmet, rate limiting, validation
│   │   ├── prompts/        # Grounded system prompt instructions
│   │   ├── routes/         # Express chat & health routes
│   │   ├── services/       # Google Gemini SDK & Knowledge loader
│   │   ├── app.js          # Shared Express app config
│   │   └── index.js        # Local server entry point
│   └── package.json
├── .env.example            # Environment variable template
└── package.json            # Root workspace scripts
```

---

## Local Development Workflow

### 1. Prerequisites
- **Node.js** 18+ and **npm** 9+
- A **Google Gemini API Key** (from [Google AI Studio](https://aistudio.google.com/))

### 2. Installation
Install all dependencies:

```bash
npm run install:all
```

### 3. Environment Variables
Create your local environment file:

```bash
cp .env.example server/.env
```

Open `server/.env` and add your Gemini API key:
```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=3001
NODE_ENV=development
ALLOWED_ORIGIN=http://localhost:5173
```

### 4. Running the Development Servers

```bash
# Terminal 1 — Start the Express API Server (Port 3001):
npm run dev:server

# Terminal 2 — Start the Vite Frontend (Port 5173):
npm run dev:client
```

Visit **`http://localhost:5173`** in your browser. The Vite dev server will automatically proxy chat requests (`/api/*`) to Express on port 3001.

---

## Contact

- **Name:** Prabath Udayanga Jayasuriya
- **Email:** [prabathjayasuriya2003@gmail.com](mailto:prabathjayasuriya2003@gmail.com)
- **LinkedIn:** [prabath-jayasuriya](https://www.linkedin.com/in/prabath-jayasuriya)
- **GitHub:** [Prabath397](https://github.com/Prabath397)

---

## License

MIT License - see [LICENSE.txt](LICENSE.txt)
