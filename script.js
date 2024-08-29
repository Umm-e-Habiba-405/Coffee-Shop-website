// Example for future interactions if needed.
document.querySelector('.btn').addEventListener('click', function () {
    alert("Getting your coffee ready!");
});
// Select all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent default behavior of anchor link
    e.preventDefault();

    // Get the href attribute of the clicked link (it contains the section to scroll to)
    const targetSection = this.getAttribute('href').substring(1);

    // Scroll to the section with a smooth scroll effect
    document.getElementById(targetSection).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const scrollToTopButton = document.getElementById('scroll-to-top');

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', function () {
      if (window.scrollY > 200) { // Show after scrolling down 200px
          scrollToTopButton.style.display = 'block';
      } else {
          scrollToTopButton.style.display = 'none';
      }
  });

  // Scroll to top when the button is clicked
  scrollToTopButton.addEventListener('click', function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Smooth scroll
      });
  });
});




