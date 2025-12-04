// auth.js - shared optional login logic for all pages

window.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem('userEmail');

  // Optional login → no alert or redirect if not logged in
  if (user) {
    document.body.classList.add('logged-in');
  }
});

