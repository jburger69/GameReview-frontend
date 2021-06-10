class Game {

    static all = []

    constructor({id, title, price, genre, platform, reviews}){
        this.id = id
        this.title = title
        this.price = price
        this.genre = genre
        this.platform = platform
        this.reviews = reviews.map(r => new Review(r))

        Game.all.push(this)
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
            <button id=${this.id} data-id="reviews" class="btn btn-primary btn-smail">View Reviews</button>
            </div>
            </div>`
        )
    }

    renderSingleGame(){
        return(
            `
            <div class="card">
            <div class="card-body">
            <h4 class="card-title">Game: ${this.title}</h4>
            <p class="card-text">
            Price: $${this.price}<br>
            Genre: ${this.genre}<br>
            Platform: ${this.platform}<br>
            </p>
            </div>
            </div>`
        )
    }

    static getInfo(game) {
        const gameSingle = Game.all.find(g => g.id === game.id)
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.innerHTML = ""
        gameSingle.addSingleGameToDom();
        gameSingle.getGameForm(gameSingle.id);
        gameSingle.reviews.map(review => Review.render(review, gameSingle.id))
    }

    addToDom(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.innerHTML += this.render()
    }

    addSingleGameToDom(){
        const gamesContainer = document.getElementById("games-container");
        gamesContainer.innerHTML += this.renderSingleGame()
        this.homeButton()
    }

    getGameForm(id){
        ReviewForm.addReviewForm(id)
    }

    homeButton() {
        const gamesContainer = document.getElementById("games-container");
        let homeButton = document.createElement("button")
        homeButton.innerText = "Home"
        gamesContainer.append(homeButton)
        homeButton.addEventListener('click', function(){
            console.log("firing")
            renderDiv.innerHTML = ""
            showDiv.innerHTML = ""
            // Game.all.forEach(game => {
            // const g = new Game(game)
            // g.addToDom()
            fetchGames()
        })
    }
}