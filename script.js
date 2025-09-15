// Filtering function for projects, experience, etc.
document.querySelectorAll(".experience-filters button, .project-filters button").forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    // Remove active class from all buttons
    button.parentElement.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Select cards based on section
    const section = button.closest("section").id;
    const cards = document.querySelectorAll(`#${section} .experience-card, #${section} .project-card`);

    cards.forEach(card => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
// Contact Form Script
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload

  // Show success message
  document.getElementById("formMessage").style.display = "block";

  // Clear the form
  this.reset();

  // Hide message after 5 seconds
  setTimeout(() => {
    document.getElementById("formMessage").style.display = "none";
  }, 5000);
});
