document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || subject === "" || message === "") {
      alert("Please fill in all fields.");
  } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
  } else {
      alert("Message sent successfully!");
      this.reset();
  }
});
