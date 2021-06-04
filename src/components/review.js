class Review {
    static all = []

    constructor({id, name, content, game_id}){
        this.id = id
        this.name = name
        this.content = content
        this.game_id = game_id

        Review.all.push(this)
    }

    static render(review, gameId) {
        let a = document.createElement('div')
        a.innerHTML += `<div class="card" id=${review.id}>
        <div class="card-body">
        <ol data-id=${gameId}>
        <h2>Review:</h2>
        <p>${review.content}</p><button id=delete-${review.id} data-id="delete" class="btn btn-primary btn-small" data-action='delete'>Delete</button>
        </ol><br>
        </div>
        </div>`
        showDiv.append(a)
        let button = document.getElementById(`delete-${review.id}`)
        button.addEventListener("click", (e) => { 
            e.target.parentElement.parentElement.parentElement.remove()
            return this.deleteReview(gameId, review.id)
        })
        
    }

    static createReview(event, reviewInput) {

        let form = event.target
        let id = event.target.dataset.id
        fetch(`${gameURL}/${id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                review: {
                    content: reviewInput.value,
                    game_id: id
                }
            })
        })
        .then(resp => resp.json())
        .then(data => {
        
            let a = document.getElementById('games-container')
            const review = new Review(data)
            this.render(review)
            
            reviewInput.value = ""
        })
        .catch(err => console.error(".catch: ", err))
    }

    static deleteReview(id, rev){
        fetch(`${gameURL}/${id}/reviews/${rev}`, {
            method: "DELETE"
        })
        .catch(err => console.error(err))
    }
        
}