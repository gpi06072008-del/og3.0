// LOVE COUNTER
const startDate = new Date("January 25, 2025 21:30:00").getTime();

function updateCounter() {
  const now = new Date().getTime();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("counter").innerHTML =
    `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateCounter, 1000);

// AUTO TYPING LETTER
const text = "From 25 January 2025 at 9:30 PM... you changed my life forever. Even though we are long distance, my heart beats only for you. Happy Birthday my love ❤️";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

typeWriter();

// CAKE CLICK
function blowCandles() {
  document.getElementById("cakeText").innerText = "Candles blown! Make a wish 💖";
}

// SECRET MESSAGE
function unlockSecret() {
  const pass = prompt("Enter password 💌 Hint: This number is very special to us");
  if (pass === "0607") {
    document.getElementById("secretMessage").style.display = "block";
  } else {
    alert("Wrong password 😜");
  }
}

// MUSIC AUTOPLAY (works after first tap - browser rule)
document.addEventListener("click", function() {
  document.getElementById("bgMusic").play();
}, { once: true });
