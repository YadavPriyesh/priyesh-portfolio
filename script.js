// =========================
// LIGHTWEIGHT PREMIUM PORTFOLIO JS
// Optimized for GitHub Pages
// =========================

// -------------------------
// Mobile Navigation
// -------------------------
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close menu when clicking a link
document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// -------------------------
// Scroll Progress Bar
// -------------------------
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  scrollProgress.style.width = progress + '%';
});

// -------------------------
// Active Navigation Link
// -------------------------
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navMenu a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// -------------------------
// Scroll Reveal Animation
// -------------------------
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// -------------------------
// Counter Animation
// -------------------------
const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = +counter.dataset.target;
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 50));

    const updateCounter = () => {
      current += increment;

      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
    counterObserver.unobserve(counter);
  });
}, {
  threshold: 0.6
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});

// -------------------------
// Theme Toggle
// -------------------------
const themeToggle = document.getElementById('themeToggle');

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');

  const theme = document.body.classList.contains('light')
    ? 'light'
    : 'dark';

  localStorage.setItem('theme', theme);
});

// -------------------------
// Back To Top Button
// -------------------------
const topBtn = document.getElementById('topBtn');

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// -------------------------
// Contact Form Demo Handler
// -------------------------
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const button = contactForm.querySelector('button');

    button.textContent = 'Message Sent ✓';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = 'Send Message';
      button.disabled = false;
      contactForm.reset();
    }, 2500);
  });
}

// -------------------------
// AI Chatbot
// -------------------------
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const suggestionButtons = document.querySelectorAll('.chat-suggestions button');

// Open / Close Chat
chatToggle.addEventListener('click', () => {
  chatWindow.style.display =
    chatWindow.style.display === 'block'
      ? 'none'
      : 'block';
});

closeChat.addEventListener('click', () => {
  chatWindow.style.display = 'none';
});

// Add message to chat
function addMessage(text, type = 'bot') {
  const message = document.createElement('div');

  message.className = `message ${type}`;
  message.textContent = text;

  chatBody.appendChild(message);

  chatBody.scrollTop = chatBody.scrollHeight;
}

// Typing indicator
function showTyping() {
  const typing = document.createElement('div');

  typing.className = 'message bot';
  typing.textContent = 'Typing...';

  chatBody.appendChild(typing);
  chatBody.scrollTop = chatBody.scrollHeight;

  return typing;
}

// Intelligent predefined responses
function getBotReply(message) {
  const msg = message.toLowerCase();

  if (
    msg.includes('who are you') ||
    msg.includes('about yourself')
  ) {
    return 'I am Priyesh Yadav’s AI portfolio assistant. Priyesh is an AI Engineer specializing in Generative AI, RAG systems, Databricks, PySpark, Python, SQL, and scalable LLM applications.';
  }

  if (
    msg.includes('project') ||
    msg.includes('show projects')
  ) {
    return 'Featured projects include Enterprise RAG Assistant, AI Resume Analyzer, Customer Support AI Agent, Data Engineering Pipeline, and a GenAI Chat Application.';
  }

  if (
    msg.includes('skill') ||
    msg.includes('technology')
  ) {
    return 'Core skills include Python, SQL, LangChain, LangGraph, OpenAI APIs, Gemini, FastAPI, Databricks, PySpark, AWS, Azure, PostgreSQL, FAISS, and Pinecone.';
  }

  if (
    msg.includes('cert') ||
    msg.includes('certificate')
  ) {
    return 'Priyesh holds Databricks Certified Generative AI Engineer Associate, Databricks Machine Learning Engineer Associate, Python Programmer, PySpark Data Engineering, and SQL certifications.';
  }

  if (
    msg.includes('experience') ||
    msg.includes('work')
  ) {
    return 'Experience includes Software Engineering, AI Engineering, Data Engineering, and continuous research in AI agents, RAG architectures, and next-generation intelligent systems.';
  }

  if (
    msg.includes('resume') ||
    msg.includes('cv')
  ) {
    return 'You can download the complete resume from the Resume section using the “Download Resume” button.';
  }

  if (msg.includes('github')) {
    return 'GitHub contains AI projects, RAG systems, data engineering pipelines, and machine learning implementations. Update the GitHub link in the Contact section with your profile URL.';
  }

  if (msg.includes('linkedin')) {
    return 'You can connect with Priyesh on LinkedIn for AI Engineering, Generative AI, Data Engineering, and collaboration opportunities.';
  }

  if (
    msg.includes('hire') ||
    msg.includes('contact')
  ) {
    return 'Priyesh is open to AI Engineer, Data Engineer, Generative AI, and LLM Application opportunities. Use the Contact section to send a message or connect via LinkedIn and GitHub.';
  }

  return 'I can help you learn about Priyesh’s projects, skills, certifications, experience, resume, and hiring information. Try asking: “Show projects”, “Skills”, or “Hire me”.';
}

// Send message
function sendMessage() {
  const text = chatInput.value.trim();

  if (!text) return;

  addMessage(text, 'user');
  chatInput.value = '';

  const typing = showTyping();

  setTimeout(() => {
    typing.remove();
    addMessage(getBotReply(text), 'bot');
  }, 600);
}

// Send button
sendBtn.addEventListener('click', sendMessage);

// Enter key support
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Suggestion buttons
suggestionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const text = button.textContent;

    addMessage(text, 'user');

    const typing = showTyping();

    setTimeout(() => {
      typing.remove();
      addMessage(getBotReply(text), 'bot');
    }, 500);
  });
});

// -------------------------
// Performance Optimization
// -------------------------

// Prevent expensive resize handlers
let resizeTimer;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    // Close mobile menu on desktop resize
    if (window.innerWidth > 768) {
      navMenu.classList.remove('show');
    }
  }, 150);
});

// -------------------------
// Initial State
// -------------------------

// Hide top button initially
window.addEventListener('scroll', () => {
  topBtn.style.opacity = window.scrollY > 400 ? '1' : '0';
  topBtn.style.pointerEvents = window.scrollY > 400 ? 'auto' : 'none';
});

// Set initial state
topBtn.style.opacity = '0';
topBtn.style.pointerEvents = 'none';

// Lightweight startup log
console.log('🚀 Premium AI Portfolio Loaded Successfully');
