var collapsibleButtons = document.getElementsByClassName("Collapsible-button");

for (var i = 0; i < collapsibleButtons.length; i++) {
  collapsibleButtons[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var faqs = this.nextElementSibling;
    if (faqs.style.display === "block") {
      faqs.style.display = "none";
    } else {
      faqs.style.display = "block";
    }
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
}
