const submitbutton = document.getElementById("submit");
const msg = document.getElementById("message");
const life = document.getElementById("lives-text");

let randomnumber = Math.floor(Math.random() * 100) + 1;  //1 to 100
let lives = 5;

submitbutton.onclick = () => {
    let userInput = document.getElementById("number-input").value;

    userInput = Number(userInput);

    if (userInput === randomnumber) {
        location.href = "./win.html";
    } else {
        lives--;
        life.textContent = lives;
         msg.style.display = "block";
        if (lives === 0) {
            location.href = "./lose.html";
        } else if (userInput > randomnumber) {
            msg.textContent = "Oops 😅! Your guess is greater than my guess";
        } else {
            msg.textContent = "Oops 😅! Your guess is smaller than my guess";
        }
    }
}

