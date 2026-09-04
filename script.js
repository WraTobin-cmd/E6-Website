function comingSoon(platform) {
  alert(platform + " link will be added when the official URL is ready.");
  return false;
}

// Small reveal animation using IntersectionObserver.
const items = document.querySelectorAll(".section > *, .world-card, .mode, .testing-box");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

items.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(18px)";
  item.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(item);
});
