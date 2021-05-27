document.addEventListener("DOMContentLoaded", () => {
    fetchGames();
})


function fetchGames() {
    fetch("http://localhost:3000/api/v1/games")
    .then(r => r.json())
    .then(data => console.log(data) )
    .catch(err => console.log(err))
}