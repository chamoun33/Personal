const navLinks = document.querySelectorAll(".nav-collapse ul li a");
  const sections = document.querySelectorAll("span[id]");

  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.5 // 50% of the section must be visible to be considered active
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  // Observe the spans
  sections.forEach(section => observer.observe(section));