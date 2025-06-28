// Dark Mode Toggle
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Store preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On load, set saved theme
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

// Category Filter
const filter = document.getElementById('categoryFilter');
if (filter) {
  filter.addEventListener('change', () => {
    const selected = filter.value;
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach(card => {
      if (selected === 'all' || card.dataset.category === selected) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}
