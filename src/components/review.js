class Review {
    static all = []

    constructor({id, name, content, game_id}){
        this.id = id
        this.name = name
        this.content = content
        this.game_id = game_id

        Review.all.push(this)
    }
}