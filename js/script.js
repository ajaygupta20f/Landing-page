document.addEventListener("DOMContentLoaded", function() {
  // Smooth scrolling for navigation links
  // Smooth Scrolling Effect
document.addEventListener("DOMContentLoaded", function () {
  const smoothScrollLinks = document.querySelectorAll("a[href^='#']");

  smoothScrollLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();

          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50,
                  behavior: "smooth"
              });
          }
      });
  });
});


  // Fade-in effect when scrolling
  const fadeInElements = document.querySelectorAll(".fade-in");
  
  function fadeInOnScroll() {
      fadeInElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
              element.classList.add("visible");
          }
      });
  }
  
  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Run on load in case elements are already in view
});
// Change Navbar Background on Scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      navbar.style.background = "rgba(0, 0, 0, 0.9)";
  } else {
      navbar.style.background = "rgba(0, 0, 0, 0.8)";
  }
});
// Smooth Scrolling Effect & Close Navbar on Click (Mobile)
document.addEventListener("DOMContentLoaded", function () {
  const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  smoothScrollLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();

          const targetId = this.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - 50,
                  behavior: "smooth"
              });
          }

          // Close the navbar when clicking on a link (for mobile devices)
          if (navbarCollapse.classList.contains("show")) {
              navbarCollapse.classList.remove("show");
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const closeNavbarBtn = document.querySelector(".close-navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  // Open sidebar menu
  navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.add("show");
  });

  // Close sidebar menu
  closeNavbarBtn.addEventListener("click", function () {
      navbarCollapse.classList.remove("show");
  });

  // Close sidebar when clicking a menu link
  navLinks.forEach(link => {
      link.addEventListener("click", function () {
          navbarCollapse.classList.remove("show");
      });
  });
});
