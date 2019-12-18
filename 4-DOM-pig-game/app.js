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

//Random numbers for 1 to 6
dice = Math.floor(Math.random()*6)+1;
console.log(dice);


//Select DOM Object. Setting method
document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//Getting method - we get a valuable from HTML

var x = document.querySelector('#current-1').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';


