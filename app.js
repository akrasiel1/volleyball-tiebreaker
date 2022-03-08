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

const updateScores = (main, opponent) => {
    if(!isGameOver) {
        main.baseScore +=1;
        if(main.baseScore >= 14 && main.baseScore === opponent.baseScore) {
            winningScore +=1;
        }
        if(main.baseScore === winningScore) {
            isGameOver = true;
            main.score.classList.add('text-success');
            opponent.score.classList.add('text-danger');
            main.button.disabled = true;
            opponent.button.disabled = true;
        }
        main.score.textContent = main.baseScore;
    };
}

home.button.addEventListener('click', () => {
    updateScores(home, away);
});

away.button.addEventListener('click', () => {
    updateScores(away, home);
});



resetBtn.addEventListener('click', () => {
    isGameOver = false;
    home.baseScore = 0;
    away.baseScore = 0;
    home.score.textContent = 0;
    away.score.textContent = 0;
    home.score.classList.remove('text-success', 'text-danger');
    away.score.classList.remove('text-success', 'text-danger');
    home.button.disabled = false;
    away.button.disabled = false;
    winningScore = 15;
});
