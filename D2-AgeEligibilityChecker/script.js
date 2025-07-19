const btn = document.querySelector('#checkBtn'); // Get the button
btn.addEventListener('click', function() {
    const inputValue = document.querySelector('#ageInput').value; // Get input value
    const age = Number(inputValue); // Convert to number
    console.log(age);

    const messageList = [];
    if (age>=16){
        messageList.push("drive 🚗");
    }
    if (age >= 18) {
    messageList.push("vote 🗳️");
  }
  if (age >= 21) {
    messageList.push("drink 🍷");
  }
  let message = "";

  if (messageList.length === 0) {
    message = "You're too young for now 😅";
  } else {
    message = "You can " + messageList.join(", and ");
  }
console.log(message);
const resultDiv = document.querySelector('#result')
resultDiv.textContent = message;
})