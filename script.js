const text = "Welcome to Brown Club Swim";
const target = document.getElementById("typed-text");

let i = 0;
function typeCharacter() {
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(typeCharacter, 100); // speed of typing
  }
}

typeCharacter();
