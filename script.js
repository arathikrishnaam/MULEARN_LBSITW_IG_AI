// Function to display information dynamically
function showInfo(type) {
  const infoContent = document.getElementById('info-content');
  let content = '';

  switch (type) {
    case 'ai':
      content = `<h3>Artificial Intelligence (AI)</h3>
                 <p>AI simulates human intelligence to solve problems and automate tasks, such as chatbots and self-driving cars.</p>`;
      break;
    case 'ml':
      content = `<h3>Machine Learning (ML)</h3>
                 <p>ML allows machines to learn from data and improve performance, used in recommendation systems and fraud detection.</p>`;
      break;
    case 'dl':
      content = `<h3>Deep Learning (DL)</h3>
                 <p>DL uses neural networks to handle large datasets, enabling applications like image recognition and NLP.</p>`;
      break;
    default:
      content = `<p>Invalid selection.</p>`;
  }

  infoContent.innerHTML = content;
  fadeIn(infoContent);
}

// Smooth fade-in animation
function fadeIn(element) {
  let opacity = 0;
  element.style.opacity = opacity;

  const interval = setInterval(() => {
    opacity += 0.1;
    element.style.opacity = opacity;

    if (opacity >= 1) clearInterval(interval);
  }, 50);
}

// Smooth scrolling for nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
