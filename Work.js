// Smooth scroll for nav links document.querySelectorAll('nav a').forEach(link => { link.addEventListener('click', function (e) { e.preventDefault(); const target = document.querySelector(this.getAttribute('href')); target.scrollIntoView({ behavior: 'smooth' }); }); });

// Simple contact form feedback const form = document.getElementById('contactForm'); form.addEventListener('submit', function (e)
