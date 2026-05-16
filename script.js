const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.getElementById("site-nav");
const navToggle = document.getElementById("nav-toggle");
const themeToggle = document.getElementById("theme-toggle");
const backToTop = document.getElementById("back-to-top");
const contactForm = document.getElementById("contact-form");
const projectsContainer = document.getElementById("projects-container");
const loadingMessage = document.getElementById("loading-message");

const username = "Prabath397";

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

function formatRepoName(name) {
  return String(name)
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .replace(/\b\w/g, letter => letter.toUpperCase());
}

const techKeywords = {
  Python: ["python", "django", "flask"],
  Java: ["java", "spring", "android"],
  JavaScript: ["javascript", "node", "react", "vue"],
  "C++": ["c++", "cpp"],
  Web: ["html", "css", "bootstrap"],
  SQL: ["sql", "mysql", "database"]
};

function detectTechnologies(repo) {
  const searchableText = [
    repo.name,
    repo.description,
    repo.language,
    ...(repo.topics || [])
  ].join(" ").toLowerCase();

  const detected = Object.entries(techKeywords)
    .filter(([, keywords]) => keywords.some(keyword => searchableText.includes(keyword)))
    .map(([label]) => label);

  if (repo.language && !detected.includes(repo.language)) {
    detected.unshift(repo.language);
  }

  return [...new Set(detected)].slice(0, 4);
}

function renderRepoCard(repo) {
  const repoName = escapeHTML(formatRepoName(repo.name));
  const description = escapeHTML(repo.description || "A practical coding repository from my learning and development work.");
  const repoUrl = escapeHTML(safeUrl(repo.html_url));
  const updatedDate = new Date(repo.updated_at).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  const technologies = detectTechnologies(repo);

  return `
    <article class="repo-card">
      <h4>${repoName}</h4>
      <p>${description}</p>
      <div class="repo-tags">
        ${(technologies.length ? technologies : ["Code"]).map(tech => `<span>${escapeHTML(tech)}</span>`).join("")}
      </div>
      <div class="repo-footer">
        <span><i class="fas fa-clock"></i> ${updatedDate}</span>
        <a href="${repoUrl}" target="_blank" rel="noopener noreferrer">
          View
          <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </article>
  `;
}

async function loadRepositories() {
  if (!projectsContainer || !loadingMessage) return;

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
    if (!response.ok) throw new Error("GitHub API request failed");

    const repos = await response.json();
    const visibleRepos = repos
      .filter(repo => !repo.fork && !repo.archived)
      .sort((a, b) => new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at))
      .slice(0, 6);

    loadingMessage.hidden = true;

    if (!visibleRepos.length) {
      projectsContainer.innerHTML = `
        <article class="repo-card">
          <h4>No repositories found</h4>
          <p>Visit my GitHub profile to see my latest public work.</p>
          <div class="repo-footer">
            <span>GitHub</span>
            <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer">Open profile</a>
          </div>
        </article>
      `;
      return;
    }

    projectsContainer.innerHTML = visibleRepos.map(renderRepoCard).join("");
  } catch (error) {
    console.error(error);
    loadingMessage.hidden = true;
    projectsContainer.innerHTML = `
      <article class="repo-card">
        <h4>Could not load repositories</h4>
        <p>The GitHub feed is unavailable right now. You can still view my projects directly on GitHub.</p>
        <div class="repo-footer">
          <span>Connection issue</span>
          <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer">Open GitHub</a>
        </div>
      </article>
    `;
  }
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
