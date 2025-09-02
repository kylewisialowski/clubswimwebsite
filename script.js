document.addEventListener("DOMContentLoaded", () => {
  const emojis = Array(30).fill('🫧').concat(['🪼', '🐠', '🐡']);
  const container = document.getElementById('emojiBackground');

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  function createBubble() {
    const el = document.createElement('div');
    el.className = 'emoji-bubble';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    el.style.left = `${getRandom(0, 100)}%`;
    el.style.animationDelay = `0s`;
    el.style.animationDuration = `${getRandom(20, 30)}s`;
    el.style.fontSize = `${getRandom(1.5, 2.5)}em`;

    container.appendChild(el);

    // Remove the bubble after it finishes floating
    const lifetime = parseFloat(el.style.animationDuration) * 1000;
    setTimeout(() => {
      container.removeChild(el);
    }, lifetime);
  }

  // Generate a new bubble every 500ms (adjust for more or fewer)
  setInterval(createBubble, 1500);
});
