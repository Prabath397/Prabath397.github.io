// Dark mode toggle
const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = toggleBtn.querySelector('i');
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    icon.className = 'fas fa-sun';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    icon.className = 'fas fa-moon';
  }
});

// Typewriter Effect for Hero Section
const typingText = document.getElementById("typing-text");
const roles = [
  "Software Engineering Student",
  "Full-Stack Developer",
  "Problem Solver",
  "Tech Enthusiast",
  "Continuous Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function typeWriter() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }
  
  if (!isDeleting && charIndex === currentRole.length) {
    isEnd = true;
    isDeleting = true;
    setTimeout(typeWriter, 2000); // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeWriter, 500); // Pause before next role
  } else {
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, typingSpeed);
  }
}

// Initialize typewriter effect
setTimeout(typeWriter, 1000);

// GitHub API fetch repos with enhanced cards
const username = "Prabath397";
const projectsContainer = document.getElementById("projects-container");
const loadingMessage = document.getElementById("loading-message");

// Sample technologies for project cards
const techKeywords = {
  python: ["python", "django", "flask"],
  java: ["java", "spring", "android"],
  javascript: ["javascript", "node", "react", "vue"],
  cpp: ["c++", "cpp"],
  web: ["html", "css", "bootstrap"],
  database: ["sql", "mysql", "database"]
};

function detectTechnologies(description) {
  const techs = [];
  const desc = description ? description.toLowerCase() : "";
  
  Object.entries(techKeywords).forEach(([tech, keywords]) => {
    if (keywords.some(keyword => desc.includes(keyword))) {
      techs.push(tech);
    }
  });
  
  return techs.length > 0 ? techs : ["code"];
}

fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=6`)
  .then(response => {
    if (!response.ok) throw new Error("GitHub API error");
    return response.json();
  })
  .then(repos => {
    loadingMessage.style.display = "none";
    
    // Filter out forked repos
    const filteredRepos = repos.filter(repo => !repo.fork);
    
    if (filteredRepos.length === 0) {
      projectsContainer.innerHTML = `
        <div class="no-projects" style="grid-column: 1/-1; text-align: center; padding: 40px;">
          <h3>No projects found on GitHub</h3>
          <p>Check back soon or visit my GitHub profile directly!</p>
          <a href="https://github.com/${username}" target="_blank" class="github-link" style="margin-top: 20px;">
            <i class="fab fa-github"></i> Visit GitHub Profile
          </a>
        </div>
      `;
      return;
    }
    
    filteredRepos.forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      
      const technologies = detectTechnologies(repo.description || repo.name);
      const updatedDate = new Date(repo.updated_at).toLocaleDateString();
      
      card.innerHTML = `
        <div class="project-card-content">
          <h3>${repo.name}</h3>
          <p>${repo.description || "A coding project showcasing my development skills."}</p>
          
          <div class="project-tech">
            ${technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          
          <div class="project-stats">
            <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
            <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
            <span><i class="fas fa-circle" style="color: ${repo.language ? '#4CAF50' : '#999'}"></i> ${repo.language || 'Multiple'}</span>
          </div>
          
          <div class="project-links">
            <a href="${repo.html_url}" target="_blank" class="project-link">
              <i class="fab fa-github"></i> View Code
            </a>
            ${repo.homepage ? `
              <a href="${repo.homepage}" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
            ` : ''}
          </div>
          <p style="font-size: 0.8rem; color: #999; margin-top: 15px;">
            <i class="far fa-clock"></i> Updated: ${updatedDate}
          </p>
        </div>
      `;
      
      projectsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading repos:", error);
    loadingMessage.innerHTML = `
      <div style="text-align: center; color: #ff6600; grid-column: 1/-1;">
        <i class="fas fa-exclamation-triangle fa-2x"></i>
        <h3>Failed to load projects</h3>
        <p>Please check your internet connection or visit my GitHub directly.</p>
        <a href="https://github.com/${username}" target="_blank" class="github-link" style="margin-top: 20px;">
          <i class="fab fa-github"></i> Visit GitHub Profile
        </a>
      </div>
    `;
  });

// Back to Top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "flex";
    backToTopBtn.style.opacity = "1";
  } else {
    backToTopBtn.style.opacity = "0";
    setTimeout(() => {
      if (window.scrollY <= 300) {
        backToTopBtn.style.display = "none";
      }
    }, 300);
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      document.querySelector(`a[href="#${sectionId}"]`)?.classList.add('active');
    } else {
      document.querySelector(`a[href="#${sectionId}"]`)?.classList.remove('active');
    }
  });
});

// Add active class styling
const style = document.createElement('style');
style.textContent = `
  .nav-link.active {
    background: rgba(255, 102, 0, 0.3) !important;
    color: #ff6600 !important;
  }
`;
document.head.appendChild(style);

// Form validation
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields before sending.');
    }
  });
}

// Page load animation
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});