# Prabath Jayasuriya — AI-Powered Developer Portfolio

A modern, responsive developer portfolio for **Prabath Udayanga Jayasuriya** featuring an integrated **"Ask My Portfolio" AI Assistant** powered by **Google Gemini (gemini-2.0-flash)**.

The assistant is strictly grounded in authentic portfolio data (projects, skills, experience, education, certifications, and contact details) and refuses to hallucinate unverified claims.

---

## Architecture & Tech Stack

```text
.
├── api/                    # Vercel serverless function (POST /api/chat)
│   └── chat.js
├── client/                 # React 19 + Vite 6 Frontend
│   ├── public/             # Static documents (CV, certificates) & images
│   ├── src/
│   │   ├── components/     # Layout, Section, UI, and Chat components
│   │   ├── context/        # ThemeContext (Light & Dark modes)
│   │   ├── data/           # Portfolio dataset for client rendering
│   │   ├── hooks/          # Custom hooks (useTheme, useScrollSpy, useChat)
│   │   └── styles/         # CSS variables & modular component styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js      # Dev server & Express proxy
├── server/                 # Node.js + Express 5 Backend
│   ├── data/               # 7 Structured JSON knowledge base files
│   ├── src/
│   │   ├── middleware/     # CORS, Helmet, rate limiting, input validation
│   │   ├── prompts/        # System prompt with strict AI grounding instructions
│   │   ├── routes/         # Express chat & health check routes
│   │   ├── services/       # Google Gemini SDK service & Knowledge loader
│   │   ├── app.js          # Shared Express app config
│   │   └── index.js        # Local server entry point
│   └── package.json
├── .env.example            # Environment variable template
├── vercel.json             # Vercel production deployment config
└── package.json            # Root workspace scripts
```

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite 6, Custom Modular CSS, Font Awesome 6, Inter font |
| **Backend** | Node.js, Express 5, Helmet, CORS, Express-Rate-Limit |
| **AI Integration** | Google Gemini API (`gemini-2.0-flash` via `@google/generative-ai`) |
| **Grounding Strategy** | Context Injection with strict negative-constraint system prompt |
| **Deployment** | Vercel (Static CDN frontend + Node.js Serverless Function API) |

---

## Key Features

- **"Ask My Portfolio" AI Assistant:** Floating chat widget in bottom-right corner.
  - Answers questions about projects, stack, experience, and background.
  - Suggestion chips for quick queries.
  - Low temperature (`0.2`) grounding: strictly answers from real portfolio data and declines unlisted questions.
  - Fallback error handling if API key is not configured.
- **Theme Switcher:** Seamless Dark and Light theme toggle with `localStorage` persistence.
- **Responsive Layout:** Works smoothly on desktop, tablet, and mobile devices.
- **Interactive Certificate Previews:** Embedded PDFs with direct viewing and LinkedIn credential links.
- **Project Showcase:** Highlights full-stack builds and GitHub pinned repositories.
- **Security Built-In:**
  - Gemini API key is isolated on the server — never exposed to the browser.
  - Rate limiting (10 requests per minute per IP).
  - Input validation (max 500 characters, max 20 history items).
  - Security headers via Helmet.

---

## Local Development Workflow

### 1. Prerequisites
- **Node.js** 18+ and **npm** 9+
- A **Google Gemini API Key** (from [Google AI Studio](https://aistudio.google.com/))

### 2. Installation
Install all dependencies for both client and server:

```bash
# In the root project directory:
npm run install:all
```

### 3. Environment Variables
Create your local environment file:

```bash
# Copy template to server/.env
cp .env.example server/.env
```

Open `server/.env` and replace `your_gemini_api_key_here` with your actual Google Gemini API key:
```env
GEMINI_API_KEY=AIzaSy...
PORT=3001
NODE_ENV=development
ALLOWED_ORIGIN=http://localhost:5173
```

### 4. Running the Development Servers

Open two terminals:

```bash
# Terminal 1 — Start the Express API Server (Port 3001):
npm run dev:server

# Terminal 2 — Start the Vite Frontend (Port 5173):
npm run dev:client
```

Visit **`http://localhost:5173`** in your browser. The Vite dev server will automatically proxy chat requests (`/api/*`) to Express on port 3001.

---

## Deploying to Vercel (Connecting to a NEW GitHub Repository)

> [!IMPORTANT]
> To keep your existing GitHub Pages repository (`Prabath397.github.io`) intact online, connect this project to a **NEW** GitHub repository.

### Step 1: Create a New GitHub Repository
1. Log in to [GitHub](https://github.com/) and click **New Repository**.
2. Give it a name (for example: `prabath-ai-portfolio` or `ai-portfolio`).
3. Set visibility to **Public** or **Private**.
4. Do **NOT** initialize with a README, license, or `.gitignore` (they already exist in this project).
5. Click **Create repository** and copy the HTTPS URL (e.g. `https://github.com/Prabath397/prabath-ai-portfolio.git`).

### Step 2: Update the Git Remote Locally & Push
In your project terminal, switch the Git remote to your new repository and push:

```bash
# 1. Point the remote to your new repository URL
git remote set-url origin https://github.com/Prabath397/YOUR_NEW_REPO_NAME.git

# 2. Stage all files
git add .

# 3. Commit your changes
git commit -m "feat: complete AI-powered portfolio with React, Vite, Express, and Gemini"

# 4. Push to the new repository
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Log in to [Vercel](https://vercel.com/) and click **Add New...** → **Project**.
2. Import your newly created repository (`prabath-ai-portfolio`).
3. Vercel will automatically detect `vercel.json`:
   - **Framework Preset:** Other / Vite
   - **Build Command:** `cd client && npm run build`
   - **Output Directory:** `client/dist`
   - **Install Command:** `cd client && npm install && cd ../server && npm install`
4. Expand **Environment Variables** and add:
   - `GEMINI_API_KEY` = *your_google_gemini_api_key*
   - `NODE_ENV` = `production`
5. Click **Deploy**.

Vercel will build the frontend, deploy the `/api/chat` serverless function, and give you a live production URL!

---

## Contact

- **Name:** Prabath Udayanga Jayasuriya
- **Email:** [prabathjayasuriya2003@gmail.com](mailto:prabathjayasuriya2003@gmail.com)
- **LinkedIn:** [prabath-jayasuriya](https://www.linkedin.com/in/prabath-jayasuriya)
- **GitHub:** [Prabath397](https://github.com/Prabath397)

## License

MIT License — see [LICENSE.txt](LICENSE.txt)
