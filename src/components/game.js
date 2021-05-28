class Game {

    constructor({id, title, price, genre, platform}){
        this.id = id
        this.title = title
        this.price = price
        this.genre = genre
        this.platform = platform
    }

    render(){
        return(`<div class="card">
            <div class="card-body">
            <h4 class="card-title">Game: ${this.title}</h4>
            <p class="card-text">
            Price: $${this.price}<br>
            Genre: ${this.genre}<br>
            Platform: ${this.platform}<br>
            </p>
            <button class="btn btn-primary btn-smail">View Reviews</button>
            </div>
            </div>`
        )
    }

    addToDom(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.innerHTML += this.render()
    }
}