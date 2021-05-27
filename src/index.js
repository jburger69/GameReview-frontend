document.addEventListener("DOMContentLoaded", () => {
    fetchGames();
})


function fetchGames() {
    const gamesContainer = document.getElementById("games-container")

    fetch("http://localhost:3000/api/v1/games")
    .then(r => r.json())
    .then(data => {
        data.forEach(function(game){
            gamesContainer.innerHTML += `<div class="card">
            <div class="card-body">
            <h4 class="card-title">Game: ${game.title}<br></h4>
            <p class="card-text">
            Price: $${game.price}<br>
            Genre: ${game.genre}<br>
            Platform: ${game.platform}<br>
            </p>
            </div>
            </div>`
        })
    })
    .catch(err => console.log(err))
}