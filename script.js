window.onload = function () {

  // MOBILE MENU
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }

  // TYPING EFFECT
  const roles = [
    'AI Engineer',
    'Data Engineer',
    'Python Developer',
    'Generative AI Enthusiast'
  ];

  const typing = document.getElementById('typing');

  if (typing) {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
      const current = roles[roleIndex];

      if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {
          deleting = true;
          setTimeout(typeEffect, 1500);
          return;
        }
      } else {
        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }

      setTimeout(typeEffect, deleting ? 50 : 100);
    }

    typeEffect();
  }

  // SIMPLE OPEN CHATBOT
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatBody = document.getElementById('chat-body');

  function addMessage(message, type) {
    const div = document.createElement('div');
    div.className = type === 'user' ? 'user-message' : 'bot-message';
    div.innerText = message;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function getBotResponse(text) {
    text = text.toLowerCase();

    if (text.includes('hi') || text.includes('hello')) {
      return 'Hello 👋 Welcome to Priyesh Yadav\\'s portfolio!';
    }

    if (text.includes('skill')) {
      return 'My skills include Python, SQL, PySpark, Databricks, Machine Learning, and Generative AI.';
    }

    if (text.includes('project')) {
      return 'Featured projects: AI Resume Analyzer, RAG Chatbot, and Sales Data Pipeline.';
    }

    if (text.includes('certificate') || text.includes('certification')) {
      return 'I have Databricks and Infosys certifications related to Data Engineering, Machine Learning, and Generative AI.';
    }

    if (text.includes('resume')) {
      return 'You can download my resume using the Download Resume button at the top of the portfolio.';
    }

    if (text.includes('contact') || text.includes('email') || text.includes('linkedin') || text.includes('github')) {
      return 'Please use the Contact section or connect with me through LinkedIn and GitHub.';
    }

    return 'I can answer simple questions about my skills, projects, certifications, resume, and contact information.';
  }

  function sendMessage() {
    const text = userInput.value.trim();
    if (text === '') return;

    addMessage(text, 'user');
    userInput.value = '';

    setTimeout(() => {
      addMessage(getBotResponse(text), 'bot');
    }, 400);
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
  }

  if (userInput) {
    userInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
};
