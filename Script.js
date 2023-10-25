// Get the collapsible button and the FAQs element
const collapsibleButton = document.querySelector('.Collapsible-button');
const faqs = document.querySelector('.faqs');

// Add a click listener to the collapsible button
collapsibleButton.addEventListener('click', () => {
  // Toggle the display of the FAQs element
  faqs.style.display = faqs.style.display === 'block' ? 'none' : 'block';
});

// Add a keyboard event listener to each button
collapsibleButtons[i].addEventListener('keydown', event => {
  // If the user presses the Enter key or the Space key
  if (event.code === 'Enter' || event.code === 'Space') {
    // Prevent the default action of the button
    event.preventDefault();
    // Toggle the active class on the button
    event.target.classList.toggle('active');
    // Get the content of the collapsible box
    const content = event.target.nextElementSibling;
    // Toggle the display of the content
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
});
