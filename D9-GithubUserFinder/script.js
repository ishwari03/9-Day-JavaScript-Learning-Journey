let searchHistory = [];

async function getUser(){
try{
    const username = document.getElementById("username").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Loading...</p>`;
    const response = await fetch (`https://api.github.com/users/${username}`);
    if(!response.ok){
        throw new Error("User not found");
    }
    const data = await response.json(); //destructuring

    const {login, avatar_url, name, location, followers, html_url,public_repos}=data;
    if (!searchHistory.includes(login)) {
        searchHistory.push(login);
        updateHistory();
    }
    document.getElementById("result").innerHTML = `
    <img src="${avatar_url}">
    <h2>${name || login}</h2>
    <p>📍 Location: ${location || "Not available"}</p>
    <p>👥 Followers: ${followers}</p>
    <p>📦 Public Repos: ${public_repos}</p>
    <a href="${html_url}" target="_blank">🔗 View Profile</a>
    <br>
    <button onclick="copyLink('${html_url}')">📤 Copy GitHub Link</button>
    
    `;
}catch (error){
    document.getElementById("result").innerHTML = `<p style="color:red;">❌ ${error.message}</p>`
}
}
document.getElementById("username").addEventListener("keydown", function (event) {
    if(event.key === "Enter") {
        getUser();
    }
})
function updateHistory() {
  const ul = document.getElementById("history");
  const title = document.getElementById("history-title");
  ul.innerHTML = ""; // clear old list
  if (searchHistory.length === 0) {
    title.style.display = "none";
    return;
  }

  title.style.display = "block";
  searchHistory.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user;
    li.style.cursor = "pointer";
    li.onclick = () => {
      document.getElementById("username").value = user;
      getUser(); // search again
    };
    ul.appendChild(li);
  });
}

function copyLink(link){
    navigator.clipboard.writeText(link)
    .then(() => alert("🔗 Profile link copied to clipboard!"))
    .catch(err => alert("❌ Failed to copy the link."));
}