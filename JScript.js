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
