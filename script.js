const forgiveBtn = document.getElementById("forgiveBtn");
const surprise = document.getElementById("surprise");
const heartsContainer = document.getElementById("hearts");

forgiveBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");

  forgiveBtn.textContent = "Sending you the biggest hug! 🫂💗";
  forgiveBtn.disabled = true;
  forgiveBtn.style.opacity = "0.85";

  surprise.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  // Make a little heart celebration!
  for (let i = 0; i < 25; i++) {
    setTimeout(createHeart, i * 100);
  }
});

function createHeart() {
  const heart = document.createElement("span");

  const symbols = ["💗", "💕", "💖", "💘", "🎀", "💝"];
  heart.classList.add("heart");
  heart.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 18 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6500);
}

// A few floating hearts appear automatically.
setInterval(createHeart, 800);