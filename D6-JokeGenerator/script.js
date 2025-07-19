const button = document.getElementById("jokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");
button.addEventListener("click", getJoke);

function getJoke(){
    jokeDisplay.innerHTML = 'Getting a joke <span class="spinner-inline"></span>';
   fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
         console.log("Setup:", data.setup);
    console.log("Punchline:", data.punchline);
        jokeDisplay.innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(error =>{
        jokeDisplay.innerText = "Oops! Something went wrong.";
        console.error(error);
    });
}

