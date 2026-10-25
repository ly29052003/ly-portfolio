
document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.classList.add("js-scroll-reveal");

  const elements = document.querySelectorAll(".scroll-reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach(function (element) {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px 0px 0px"
    }
  );

  elements.forEach(function (element) {
    observer.observe(element);
  });
});
// JavaScript Document