class ReviewForm {

    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    static addReviewForm(id){
        const form = document.createElement('form');
        form.dataset.id = id
        form.innerHTML = `
            <div class="card">
            <div class="card-body">
            <h4>Create a Review</h4>
            <input id="review-input" placeholder='review' type='text'/><br>
            <input class="btn btn-primary btn-smail id="review-submit" value='Post review' type='submit'/>`
        renderDiv.append(showDiv)
        showDiv.append(form)
    
        form.addEventListener("submit", this.handleSubmit)
    }

    static handleSubmit(event) {
        event.preventDefault()
        const reviewInput = event.target[0]
        Review.createReview(event, reviewInput)
    }
    

}