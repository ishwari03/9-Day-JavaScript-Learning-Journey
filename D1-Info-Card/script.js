const fullName = "Alice Johnson";
const myAge = 20;
const favQuote = "Dont Give Up - There is no failure except in no longer trying!";
const hobbies = ["Reading", "Sketching", "Coding"];

console.log(`Hi, I'm ${fullName}. I'm ${myAge} years old.`);
console.log(`Favorite quote: "${favQuote}"`);
console.log("My hobbies are:", hobbies);

const nameElement = document.getElementById("name");
const ageElement = document.getElementById("age");
const quoteElement = document.getElementById("quotes");
const hobbyElement = document.getElementById("hobbies");

nameElement.textContent = `Name: ${fullName}`;
ageElement.textContent = `Age: ${myAge}`;
quoteElement.textContent = `Quote: ${favQuote}`;
hobbyElement.textContent = ""; 
hobbies.forEach(hobby => {
  const li = document.createElement("li");
  li.textContent = hobby;
  hobbyElement.appendChild(li);
});


