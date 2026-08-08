const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.getElementById("site-nav");
const navToggle = document.getElementById("nav-toggle");
const themeToggle = document.getElementById("theme-toggle");
const backToTop = document.getElementById("back-to-top");
const contactForm = document.getElementById("contact-form");
const projectsContainer = document.getElementById("projects-container");
const loadingMessage = document.getElementById("loading-message");

const pinnedRepositories = [
  {
    name: "Cinnamon-Export-Management-System",
    description: "Web-based cinnamon export management system with buyer, supplier, and admin modules.",
    language: "PHP",
    color: "#4f5d95",
    stars: 1,
    url: "https://github.com/Prabath397/Cinnamon-Export-Management-System"
  },
  {
    name: "EcoStay-Retreat-Android-App",
    description: "Android resort booking app built with Java and SQLite for eco-room bookings, activities, notifications, and admin management.",
    language: "Java",
    color: "#b07219",
    stars: 1,
    url: "https://github.com/Prabath397/EcoStay-Retreat-Android-App"
  },
  {
    name: "Mern-AI-Support-Chatbot",
    description: "ChatGPT-style MERN AI assistant with JWT auth, MongoDB conversations, file attachments, OCR image reading, admin dashboard, and OpenRouter AI integration.",
    language: "JavaScript",
    color: "#f1e05a",
    stars: 1,
    url: "https://github.com/Prabath397/Mern-AI-Support-Chatbot"
  },
  {
    name: "Enterprise-Smart-Courier-System",
    description: "Full-stack logistics SaaS with Spring Boot, PostgreSQL, React, Docker, JWT auth, parcel tracking, warehouse workflows, delivery management, and reports.",
    language: "Java",
    color: "#b07219",
    stars: 1,
    url: "https://github.com/Prabath397/Enterprise-Smart-Courier-System"
  },
  {
    name: "Cozy-Comfort-SOC-System-ASP.NET-Core",
    description: "Service-oriented blanket ordering and inventory management system built with ASP.NET Core Web API, SQL Server, PHP and JavaScript.",
    language: "C#",
    color: "#178600",
    stars: 1,
    url: "https://github.com/Prabath397/Cozy-Comfort-SOC-System-ASP.NET-Core"
  },
  {
    name: "Dockerized-Student-Task-Manager",
    description: "Student task management web app built with Flask, MySQL, Docker, and Docker Compose.",
    language: "Python",
    color: "#3572A5",
    stars: 1,
    url: "https://github.com/Prabath397/Dockerized-Student-Task-Manager"
  }
];

function setTheme(isDark) {
  body.classList.toggle("dark-mode", isDark);
  themeToggle?.setAttribute("aria-pressed", String(isDark));

  if (themeToggle) {
    themeToggle.innerHTML = isDark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  }
}

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme ? savedTheme === "dark" : prefersDark);

themeToggle?.addEventListener("click", () => {
  const nextThemeIsDark = !body.classList.contains("dark-mode");
  localStorage.setItem("theme", nextThemeIsDark ? "dark" : "light");
  setTheme(nextThemeIsDark);
});

function closeNavigation() {
  body.classList.remove("nav-open");
  navToggle?.setAttribute("aria-expanded", "false");
  if (navToggle) navToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

navToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.innerHTML = isOpen
    ? '<i class="fas fa-xmark"></i>'
    : '<i class="fas fa-bars"></i>';
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeNavigation();
});

const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateScrollState() {
  const scrolled = window.scrollY > 24;
  header?.classList.toggle("is-scrolled", scrolled);
  backToTop?.classList.toggle("is-visible", window.scrollY > 520);

  let activeSection = sections[0];

  sections.forEach(section => {
    if (section.offsetTop - 130 <= window.scrollY) {
      activeSection = section;
    }
  });

  navLinks.forEach(link => {
    const isActive = activeSection && link.getAttribute("href") === `#${activeSection.id}`;
    link.classList.toggle("is-active", Boolean(isActive));
  });
}

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", updateScrollState);
updateScrollState();

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeUrl(value, fallback = "#") {
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : fallback;
  } catch {
    return fallback;
  }
}

function renderRepoCard(repo) {
  const repoName = escapeHTML(repo.name);
  const description = escapeHTML(repo.description || "A practical coding repository from my learning and development work.");
  const repoUrl = escapeHTML(safeUrl(repo.url));
  const language = escapeHTML(repo.language || "Code");
  const color = escapeHTML(repo.color || "#0969da");
  const stars = Number.isFinite(repo.stars) ? repo.stars : 0;

  return `
    <article class="repo-card pinned-repo-card">
      <div class="repo-title-row">
        <i class="far fa-window-maximize repo-icon" aria-hidden="true"></i>
        <h4><a href="${repoUrl}" target="_blank" rel="noopener noreferrer">${repoName}</a></h4>
        <span class="repo-visibility">Public</span>
      </div>
      <p>${description}</p>
      <div class="repo-footer">
        <span class="repo-language"><span class="language-dot" style="--repo-language-color: ${color};"></span>${language}</span>
        <span><i class="far fa-star"></i> ${stars}</span>
      </div>
    </article>
  `;
}

function loadRepositories() {
  if (!projectsContainer || !loadingMessage) return;

  loadingMessage.hidden = true;
  projectsContainer.innerHTML = pinnedRepositories.map(renderRepoCard).join("");
}

loadRepositories();

contactForm?.addEventListener("submit", event => {
  event.preventDefault();

  const name = contactForm.querySelector('input[name="name"]').value.trim();
  const email = contactForm.querySelector('input[name="email"]').value.trim();
  const message = contactForm.querySelector('textarea[name="message"]').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields before sending.");
    return;
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:prabathjayasuriya2003@gmail.com?subject=${subject}&body=${bodyText}`;
});
