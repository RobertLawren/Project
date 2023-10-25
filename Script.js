document.addEventListener('DOMContentLoaded', () => {
  // Get all collapsible buttons and the corresponding FAQ sections
  const buttons = document.querySelectorAll('.Collapsible-button');
  const faqs = document.querySelectorAll('.faqs');

  // Add a click listener to each button
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Toggle the display of the corresponding FAQ element
      faqs[index].style.display = faqs[index].style.display === 'block' ? 'none' : 'block';
      // Toggle the active class on the button
      button.classList.toggle('active');
    });
  });

  // Add a keyboard event listener to each button
  buttons.forEach((button, index) => {
    button.addEventListener('keydown', event => {
      // If the user presses the Enter key or the Space key
      if (event.code === 'Enter' || event.code === 'Space') {
        // Prevent the default action of the button
        event.preventDefault();
        // Toggle the display of the corresponding FAQ element
        faqs[index].style.display = faqs[index].style.display === 'block' ? 'none' : 'block';
        // Toggle the active class on the button
        button.classList.toggle('active');
      }
    });
  });
});
