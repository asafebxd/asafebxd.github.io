let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section_animation");
    }
  });
});

const viewbox = document.querySelectorAll(".image");
viewbox.forEach((section) => {
  observer.observe(section);
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("contact_button").onclick = function () {
  scrollToSection("contact");
};

document.getElementById("work_button").onclick = function () {
  scrollToSection("work");
};

document.getElementById("about_button").onclick = function () {
  scrollToSection("about");
};

document.getElementById("home_button").onclick = function () {
  scrollToSection("home");
};

document.getElementById("contact_button_main").onclick = function () {
  scrollToSection("contact");
};
