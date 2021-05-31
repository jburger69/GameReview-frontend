gameURL = "http://localhost:3000/api/v1/games"
const showDiv = document.createElement('div')
const renderDiv = document.getElementById("games-container")


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


const mainDiv = document.getElementById("games-container")
mainDiv.addEventListener("click", (event) => {
    e = event.target
    switch(event.target.dataset.id){
        case "reviews":
            console.log("clicked button")
            fetch(gameURL)
            .then(r => r.json())
            .then(data => {
                Game.getInfo(data.find(g => g.id == e.id)) 
    })
    .catch(err => console.log(err))
            break;
        default:
            console.log("clicked")
            break;
    }
})


