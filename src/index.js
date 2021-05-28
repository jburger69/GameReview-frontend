document.addEventListener("DOMContentLoaded", () => {
    fetchGames();
})


function fetchGames() {
    const gamesContainer = document.getElementById("games-container")

    fetch("http://localhost:3000/api/v1/games")
    .then(r => r.json())
    .then(data => {
        data.forEach(game => {
            const g = new Game(game)
            g.addToDom()
        })
    })
    .catch(err => console.log(err))
}