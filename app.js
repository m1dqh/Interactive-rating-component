const submitBtn = document.querySelector('.card-submit-button');
const ratingBtns = document.querySelectorAll('.rating-btn');
let ratingScore = document.querySelector('.rating-score');
const submitContainer = document.querySelector('.submit-container');

function displayScore(e){
    let ratingMessage = `You selected ${e.target.textContent} out of ${ratingBtns.length}`;
    ratingScore.textContent = ratingMessage;
}

ratingBtns.forEach((btn, i) =>  {
    btn.addEventListener('click', e => {
        ratingBtns.forEach(btn => {
            btn.classList.remove('selected');
        })
        btn.classList.add('selected');
        submitBtn.addEventListener('click', ev => {
            ev.preventDefault();
            submitContainer.classList.add('submitted');
            displayScore(e);
        });
    });
})
