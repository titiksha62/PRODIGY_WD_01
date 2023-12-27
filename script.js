document.addEventListener("DOMContentLoaded", function () {

    var navbar = document.getElementById("navbar");
  
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        navbar.style.backgroundColor = "rgba(51, 51, 51, 0.9)";
      } else {
        navbar.style.backgroundColor = "rgba(51, 51, 51, 0.8)";
      }
    };
  

    var contentSections = document.querySelectorAll(".content");
  
    function setActiveSection() {
      contentSections.forEach((section) => {
        const bounding = section.getBoundingClientRect();
        const offset = 100;
  
        if (
          bounding.top >= 0 - offset &&
          bounding.bottom <= window.innerHeight + offset
        ) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    }
  
    window.addEventListener("scroll", setActiveSection);
    window.addEventListener("resize", setActiveSection);
    setActiveSection();
  
    contentSections.forEach(function (section) {
      section.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
      });
  
      section.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });
  });
  