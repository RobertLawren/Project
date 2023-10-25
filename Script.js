// Get all collapsible buttons and the FAQs element
const collapsibleButtons = document.querySelectorAll('.Collapsible-button');
const faqs = document.querySelectorAll('.faq');

// Loop through each button and add event listeners
for (let i = 0; i < collapsibleButtons.length; i++) {
  // Add a click listener to the button
  collapsibleButtons[i].addEventListener('click', () => {
    // Get the corresponding FAQ element
    const faq = collapsibleButtons[i].nextElementSibling;
    // Toggle the display of the FAQ element
    faq.style.display = faq.style.display === 'block' ? 'none' : 'block';
    // Toggle the active class on the button
    collapsibleButtons[i].classList.toggle('active');
  });

  // Add a keyboard event listener to the button
  collapsibleButtons[i].addEventListener('keydown', event => {
    // If the user presses the Enter key or the Space key
    if (event.code === 'Enter' || event.code === 'Space') {
      // Prevent the default action of the button
      event.preventDefault();
      // Get the corresponding FAQ element
      const faq = collapsibleButtons[i].nextElementSibling;
      // Toggle the display of the FAQ element
      faq.style.display = faq.style.display === 'block' ? 'none' : 'block';
      // Toggle the active class on the button
      collapsibleButtons[i].classList.toggle('active');
    }
  });
}
