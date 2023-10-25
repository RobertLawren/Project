// Get all collapsible buttons and the FAQs element
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const faq1 = document.querySelector('.faq1');
const faq2 = document.querySelector('.faq2');
const faq3 = document.querySelector('.faq3');

// Add a click listener to each button
button1.addEventListener('click', () => {
  // Toggle the display of the corresponding FAQ element
  faq1.style.display = faq1.style.display === 'block' ? 'none' : 'block';
  // Toggle the active class on the button
  button1.classList.toggle('active');
});

button2.addEventListener('click', () => {
  // Toggle the display of the corresponding FAQ element
  faq2.style.display = faq2.style.display === 'block' ? 'none' : 'block';
  // Toggle the active class on the button
  button2.classList.toggle('active');
});

button3.addEventListener('click', () => {
  // Toggle the display of the corresponding FAQ element
  faq3.style.display = faq3.style.display === 'block' ? 'none' : 'block';
  // Toggle the active class on the button
  button3.classList.toggle('active');
});

// Add a keyboard event listener to each button
button1.addEventListener('keydown', event => {
  // If the user presses the Enter key or the Space key
  if (event.code === 'Enter' || event.code === 'Space') {
    // Prevent the default action of the button
    event.preventDefault();
    // Toggle the display of the corresponding FAQ element
    faq1.style.display = faq1.style.display === 'block' ? 'none' : 'block';
    // Toggle the active class on the button
    button1.classList.toggle('active');
  }
});

button2.addEventListener('keydown', event => {
  // If the user presses the Enter key or the Space key
  if (event.code === 'Enter' || event.code === 'Space') {
    // Prevent the default action of the button
    event.preventDefault();
    // Toggle the display of the corresponding FAQ element
    faq2.style.display = faq2.style.display === 'block' ? 'none' : 'block';
    // Toggle the active class on the button
    button2.classList.toggle('active');
  }
});

button3.addEventListener('keydown', event => {
  // If the user presses the Enter key or the Space key
  if (event.code === 'Enter' || event.code === 'Space') {
    // Prevent the default action of the button
    event.preventDefault();
    // Toggle the display of the corresponding FAQ element
    faq3.style.display = faq3.style.display === 'block' ? 'none' : 'block';
    // Toggle the active class on the button
    button3.classList.toggle('active');
  }
});
