'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for fixed header if any
          behavior: 'smooth',
        });
      }
    });
  });

  // Dark mode toggle
  const toggleButton = document.createElement('button');
  toggleButton.innerText = 'Toggle Dark Mode';
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Basic form validation for contact form
  const contactForm = document.querySelector('.contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      let isValid = true;

      if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        isValid = false;
      }

      if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        isValid = false;
      }

      if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        isValid = false;
      }

      if (isValid) {
        // In a real application, you would send this data to a server
        // For now, we'll just log it and show a success message.
        console.log('Form Submitted!', {
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          message: messageInput.value.trim(),
        });
        alert('Thank you for your message! I will get back to you shortly.');
        contactForm.reset(); // Clear the form
      } else {
        console.log('Form validation failed.');
      }
    });
  }

  function isValidEmail(email) {
    // Basic email regex for demonstration
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(\