// Dark mode toggle
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// GitHub API fetch repos
const username = "Prabath397"; // <-- your GitHub username
const projectsContainer = document.getElementById("projects-container");
const loadingMessage = document.getElementById("loading-message");

fetch(`https://api.github.com/users/${username}/repos?sort=created`)
  .then(response => response.json())
  .then(repos => {
    // Clear loading message
    loadingMessage.style.display = "none";

    repos.forEach(repo => {
      if (repo.fork) return; // Skip forks

      // Create card
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description ? repo.description : "No description available."}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;

      projectsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading repos:", error);
    loadingMessage.textContent = "⚠️ Failed to load projects.";
  });

// Back to Top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
