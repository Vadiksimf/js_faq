/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/





var score, roundScore, activePlayer;

init ();

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    //Random numbers for 1 to 6
    var dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    //2. Display the result

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src= 'dice-' + dice + '.png';

    //3. Update the current score IF result is not 1.

    if (dice !== 1) {
        //Add score
        roundScore = roundScore + dice;
        console.log(roundScore)
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
} else {
    nextPlayer();
    }
});



document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Check if a player won the game

        if (scores[activePlayer] > 19) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

        } else {
            nextPlayer();
        }
});


function nextPlayer () {
        //Next player
        activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
        roundScore = 0;

        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';

        //Change the classes with toggle
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

        // Change the classes
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
};

    // New Game button
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores=[0,0];
    activePlayer=0;
    roundScore=0;

    //Select DOM Object. Setting method
    //document.querySelector('#current-' + activePlayer).textContent = dice;
    //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

    //Getting method - we get a valuable from HTML
    /*
    var x = document.querySelector('#score-0').textContent;
    console.log(x);
    */

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');


}


