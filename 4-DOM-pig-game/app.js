/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/





var score, roundScore, activePlayer, gamePlaying, pastThrow, limit;

init ();


document.querySelector('.btn-roll').addEventListener('click', function() {

    if (gamePlaying) {
        //1. Random number
    //Random numbers for 1 to 6
    var dice = Math.floor(Math.random() * 6) + 1;
    

    //2. Display the result

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src= 'dice-' + dice + '.png';

    //3. Update the current score IF result is not 1.
    if (pastThrow === 6 && dice === 6) {  
    pastThrow=0;
    scores[activePlayer] = 0;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    nextPlayer();
    } else if (dice !== 1) {
        //Add score
        roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        pastThrow = dice;
    } else {
    nextPlayer();
    pastThrow=0;
    }
    }
});



document.querySelector('.btn-hold').addEventListener('click', function() {

    if(gamePlaying){
            // Add current score to global score
    scores[activePlayer] += roundScore;

    // Change the final score
    limit = document.querySelector('.limit').value;
    
    // If you want to create limits with a button
    /*
    document.querySelector('.btn-rule').addEventListener('click', function() {
    limit = document.querySelector('.limit').value;
    });
    */

   var winningScore

    //Undefined, 0, null and "" COERCED to fakse
    // Other values COERCED to true
    if (limit) {
        winningScore = limit;
    } else {
        winningScore = 100;
    }

    // Update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // Check if a player won the game

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            // Stop the game
            gamePlaying = false;
        } else {
            nextPlayer();
        }
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

        //document.querySelector('.dice').style.display = 'none';

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
    gamePlaying=true;
    pastThrow=0;

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
};


/*
3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. 
After that, it's the next player's turn. (Hint: Always save the previous dice roll 
in a separate variable)
2. Add an input field to the HTML where players can set the winning score, 
so that they can change the predefined score of 100. (Hint: you can read that 
value with the .value property in JavaScript. This is a good oportunity to use 
google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player 
looses his current score when one of them is a 1. (Hint: you will need CSS to 
position the second dice, so take a look at the CSS code for the first one.)
*/