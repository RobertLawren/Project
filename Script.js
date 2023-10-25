document.addEventListener('DOMContentLoaded', () => {
  // Get all collapsible buttons and the corresponding FAQ sections
  const buttons = document.querySelectorAll('.Collapsible-button');
  const faqs = document.querySelectorAll('.faqs');

  // Add a click listener to each button
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Toggle the display of the corresponding FAQ element
      faqs[index].classList.toggle('active');
    });
  });
});
