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
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(
.[^<>()[\]\\.,;:\s@"]+)*)|(\".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  }
});

// Dark mode toggle functionality
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};

const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
}

// Check for user's last dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

// Store the user's dark mode preference
const setDarkModePreference = (isEnabled) => {
  localStorage.setItem('darkMode', isEnabled ? 'enabled' : 'disabled');
};

// Listen for changes to the dark mode toggle
const darkToggleBtn = document.getElementById('dark-mode-toggle');
if (darkToggleBtn) {
  darkToggleBtn.addEventListener('change', (e) => {
    setDarkModePreference(e.target.checked);
    if (e.target.checked) {
      toggleDarkMode();
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
}

// Default preference setting function
const applyDefaultSetting = () => {
  const isEnabled = localStorage.getItem('darkMode') === 'enabled';
  darkToggleBtn.checked = isEnabled;
  if (isEnabled) {
    toggleDarkMode();
  }
};

document.addEventListener('DOMContentLoaded', applyDefaultSetting);