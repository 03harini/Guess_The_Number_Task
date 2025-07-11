// ---------- index.html logic ----------
const submitbutton = document.getElementById("submit");
const msg = document.getElementById("message");
const life = document.getElementById("lives");
let randomnumber = Math.floor(Math.random() * 100) + 1;
let lives = 5;

if (submitbutton) {
    submitbutton.onclick = () => {
        let userInput = Number(document.getElementById("number-input").value);

        if (userInput === randomnumber) {
            location.href = "./win.html";
        } else {
            lives--;
            life.textContent = lives;
            msg.style.display = "block";

            if (userInput > randomnumber) {
                msg.textContent = "Oops 😅! Your guess is greater than my guess";
            } else {
                msg.textContent = "Oops 😅! Your guess is smaller than my guess";
            }

            if (lives === 0) {
                location.href = "./lose.html";
            }
        }
    };
}

// ---------- win.html & lose.html logic ----------
const playAgainButton = document.getElementById("play-again-button");

if (playAgainButton) {
    playAgainButton.addEventListener("click", () => {
        location.href = "./index.html";
    });
}
