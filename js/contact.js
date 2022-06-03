const contactForm = document.getElementById("contact-form");

//
contactForm.onsubmit = (e) => {
  window.confirm("Are You sure?");
};
