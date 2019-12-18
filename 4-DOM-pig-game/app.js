/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/





var score, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = [0,0];
activePlayer = 1;

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

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    //Random numbers for 1 to 6
    dice = Math.floor(Math.random()*6)+1;

    //2. Display the result

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src= 'dice-' + dice + '.png';

    //3. Update the current score IF result is not 1.
    document.getElementById('current-' + activePlayer).textContent = dice;

})

