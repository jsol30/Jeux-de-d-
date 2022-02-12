let score, counter, activePlayer, newGame;

function init() {
    counter = 0;
    activePlayer = 0;
    newGame = true;
    score = [0, 0]

document.querySelector('.dice').style.display = 'none';
document.getElementById('counter-0').textContent = '0';
document.getElementById('counter-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-roll').addEventListener('click', function(){
    if (newGame) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = './image/dice-' + dice + '.png';       
        if (dice !== 1) {
            counter += dice;
            document.querySelector('.score-' + activePlayer).textContent = counter;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    counter = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (newGame) {
        score[activePlayer] += counter;
        document.querySelector('.counter-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] > 99) {
            document.querySelector('.player-' + activePlayer).textContent = 'Victoire!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
         newGame = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

init();