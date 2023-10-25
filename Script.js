const collapsibleButtons = document.querySelectorAll('.Collapsible-button');

collapsibleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const faqSection = button.nextElementSibling;
    faqSection.style.display = faqSection.style.display === 'block' ? 'none' : 'block';
  });
});
