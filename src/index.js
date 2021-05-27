document.addEventListener("DOMContentLoaded", () => {
    fetchGames();
})


function fetchGames() {
    const gamesContainer = document.getElementById("games-container")

    fetch("http://localhost:3000/api/v1/games")
    .then(r => r.json())
    .then(data => {
        data.forEach(function(game){
            gamesContainer.innerHTML += `<li>Game: ${game.title}<br>Price: $${game.price}<br>Genre: ${game.genre}<br>Platform: ${game.platform}</li><br>`
        })
    })
    .catch(err => console.log(err))
}