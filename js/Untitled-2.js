
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typewriter-text");
  if (!textElement) return;

  const phrases = [
    "Understanding Problems.",
    "Connecting Ideas.",
    "Building Solutions."
  ];

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    textElement.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typingSpeed = 75;
  const deletingSpeed = 35;
  const pauseAfterTyping = 1500;
  const pauseAfterDeleting = 350;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      textElement.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex >= currentPhrase.length) {
        deleting = true;
        setTimeout(typeLoop, pauseAfterTyping);
        return;
      }

      setTimeout(typeLoop, typingSpeed);
    } else {
      charIndex--;
      textElement.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeLoop, pauseAfterDeleting);
        return;
      }

      setTimeout(typeLoop, deletingSpeed);
    }
  }

  typeLoop();
});
