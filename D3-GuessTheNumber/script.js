let secretNumber = (Math.floor(Math.random() * 100) +1);
console.log("Secret Number is:", secretNumber); //only used by devs

let checkBtn = document.getElementById("checkBtn");
let userInput = document.getElementById("userInput");
let attempts = 0;
checkBtn.addEventListener("click" , function () {
    attempts++ ;
    let attemptsInfo = document.getElementById("attemptsInfo");
    let remaining = 5 - attempts;
    attemptsInfo.innerText = `Attempts left: ${remaining}`;

    let guess = Number(userInput.value);
    console.log("User guessed:", guess);
    let resultMessage = document.getElementById("resultMessage");
   
    if(secretNumber === guess){
        resultMessage.innerText = `🎉 Correct! The number was ${secretNumber}`;
        userInput.disabled = true;
        checkBtn.disabled = true;
    }else if (guess > secretNumber){
        resultMessage.innerText = "Too high";
    }else{
        resultMessage.innerText = "Too Low";
    }

    if(attempts === 5 && guess!==secretNumber){
        resultMessage.innerText = `😢 Game Over! The correct number was ${secretNumber}`;
        userInput.disabled = true;
        checkBtn.disabled = true;
    }
});