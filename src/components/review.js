class Review {
    static all = []

    constructor({id, name, content, game_id}){
        this.id = id
        this.name = name
        this.content = content
        this.game_id = game_id

        Review.all.push(this)
    }

    static render(review) {
        let a = document.createElement('div')
        a.innerHTML += `<div class="card">
        <div class="card-body">
        <ol data-id=${review.id}>
        <h2>Review:</h2>
        <p>${review.content}</p><button class="btn btn-primary btn-smail" data-action='delete'>Delete</button>
        </ol><br>
        </div>
        </div>`
        showDiv.append(a)
        
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
            console.log(".then(2): ", data)
                let a = document.getElementById('games-container')
                const review = new Review(data)
                this.render(review)
            
            reviewInput.value = ""
        })
        .catch(err => console.error(".catch: ", err))
    }
}