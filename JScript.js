var coll = document.getElementsByClassName("Collapsible-button");

var i;

 

for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var faqs = this.nextElementSibling;

    if (faqs.style.display === "block") {

      faqs.style.display = "none";

    } else {

      faqs.style.display = "block";

    }

  });

}
// Add a keyboard event listener to each button
collapsibleButtons.forEach(button => {
    button.addEventListener('keydown', event => {
      // If the user presses the Enter key or the Space key
      if (event.code === 'Enter' || event.code === 'Space') {
        // Prevent the default action of the button
        event.preventDefault();
        // Toggle the active class on the button
        button.classList.toggle('active');
        // Get the content of the collapsible box
        const content = button.nextElementSibling;
        // Toggle the display of the content
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      }
    });
