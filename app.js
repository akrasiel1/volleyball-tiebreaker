const home = {
    baseScore: 0,
    score: document.querySelector('#home-score'),
    button : document.querySelector('#home-add')
};

const away = {
    baseScore: 0,
    score: document.querySelector('#away-score'),
    button : document.querySelector('#away-add')
};

const resetBtn = document.querySelector('#reset');
let winningScore = 15;
let isGameOver = false;


home.button.addEventListener('click', () => {
    if(!isGameOver) {
        home.baseScore +=1;
        if(home.baseScore >= 14 && home.baseScore === away.baseScore) {
            winningScore +=1;
        }
        if(home.baseScore === winningScore) {
            isGameOver = true;
            home.score.classList.add('text-success');
            away.score.classList.add('text-danger');
        }
        home.score.textContent = home.baseScore;
    }
});

away.button.addEventListener('click', () => {
    if(!isGameOver) {
        away.baseScore +=1;
        if(away.baseScore >= 14 && away.baseScore === home.baseScore) {
            winningScore +=1;
        }
        if(away.baseScore === winningScore) {
            isGameOver = true;
            away.score.classList.add('text-success');
            home.score.classList.add('text-danger');
        }
        away.score.textContent = away.baseScore;
    }
});



resetBtn.addEventListener('click', () => {
    isGameOver = false;
    home.baseScore = 0;
    away.baseScore = 0;
    home.score.textContent = 0;
    away.score.textContent = 0;
    home.score.classList.remove('text-success', 'text-danger');
    away.score.classList.remove('text-success', 'text-danger');

});
