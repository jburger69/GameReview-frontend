const gameURL = "http://localhost:3000/api/v1/games"
const showDiv = document.createElement('div')
const renderDiv = document.getElementById("games-container")
const deleteButton = document.getElementsByClassName('delete-button')


document.addEventListener("DOMContentLoaded", () => {
    fetchGames();
})


function fetchGames() {
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
    id = event.target.id
    switch(event.target.dataset.id){
        case "reviews":
            fetch(`http://localhost:3000/api/v1/games/${id}`)
            .then(r => r.json())
            .then(data => {
                Game.getInfo(data)
            })
            .catch(err => console.log(err))

            }
    })




