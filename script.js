const texts = [
  "Developer",
  "App Creator",
  "UI Designer",
  "Tech Enthusiast"
];

let index = 0;

setInterval(() => {
  document.getElementById("typing-text").textContent = texts[index];
  index = (index + 1) % texts.length;
}, 2000);