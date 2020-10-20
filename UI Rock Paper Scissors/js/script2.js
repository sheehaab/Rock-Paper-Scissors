const playerBtns = document.querySelectorAll('.player-btn');
const scorePlayer = document.querySelector('.player-score');
const scorePc = document.querySelector('.pc-score');
const paperBtnPc = document.querySelector('.paper-btn-pc');
const rockBtnPc = document.querySelector('.rock-btn-pc');
const scissorsBtnPc = document.querySelector('.scissors-btn-pc');
const whoWinner = document.querySelector('.who');
const winnerParent = document.querySelector('.who-wins');
const playAgain = document.querySelector('.play-again');
const playerH5 = document.querySelector('.player-h5');
let playerName = prompt(`Type Your Name Please!`);
playerH5.textContent = playerName;



let playerScore =0;
let computerScore = 0;

playerBtns.forEach((button)=>{
	button.addEventListener('click',function(e){
		if(playerScore >= 5 || computerScore >= 5){
			return;
		}
		game(e.target.id);
	})
})



function computerPlay(){
	let paperBtn2 = document.querySelector('#paper-btn-pc');
	let rockBtn2 = document.querySelector('#rock-btn-pc');
	let scissorsBtn2 = document.querySelector('#scissors-btn-pc');
	let array = [paperBtn2,rockBtn2,scissorsBtn2];
	let random = Math.floor(Math.random() * (3 - 0) + 0);
	
	if(array[random] === paperBtn2){
		paperBtn2.style.cssText = "background-color:#065446;transform: scale(1.2);border:.5px solid gold";
		setTimeout(function(){
			paperBtn2.style.removeProperty('transform')
			paperBtn2.style.removeProperty('background-color')
			paperBtn2.style.removeProperty('border')

	},500)
		return 'img-paper';
	}else if(array[random] === rockBtn2){
		rockBtn2.style.cssText = "background-color:#065446;transform: scale(1.2);border:.5px solid gold";
		setTimeout(function(){
			rockBtn2.style.removeProperty('transform')
			rockBtn2.style.removeProperty('background-color')
			rockBtn2.style.removeProperty('border')

	},500)
		return 'img-rock';
	}else if(array[random] === scissorsBtn2){
		scissorsBtn2.style.cssText = "background-color:#065446;transform: scale(1.2);border:.5px solid gold";
		setTimeout(function(){
			scissorsBtn2.style.removeProperty('transform')
			scissorsBtn2.style.removeProperty('background-color')
			scissorsBtn2.style.removeProperty('border')

	},500)
		
		return 'img-scissors';
	}

}

function playRound(player,pc){
	
	let whoWins = ``;
	if(player === pc){
		whoWins = `Tie`;
	}else{
		if(player === `img-paper` && pc === `img-rock`){
			whoWins = `${playerName} wins`;
		}else if(player === `img-rock` && pc === `img-paper`){
			whoWins = `pc wins`;
		}

		if(player === `img-rock` && pc === `img-scissors`){
			whoWins = `${playerName} wins`;
		
		}else if(player === `img-scissors` && pc === `img-rock`){
			whoWins = `pc wins`;
		}

		if(player === `img-scissors` && pc === `img-paper`){
			whoWins = `${playerName} wins`;
		}else if(player === `img-paper` && pc === `img-scissors`){
			whoWins = `pc wins`;
		}
	}

	return whoWins;
}

function game(playerSelect){
	let playerSelection = playerSelect;
	let computerSelection = computerPlay();
	let roundResult = playRound(playerSelection,computerSelection);
	if(roundResult === `${playerName} wins`){
		playerScore++;;
	}else if(roundResult === 'pc wins'){
		computerScore++;
	}

	scorePlayer.innerHTML = +playerScore;
	scorePc.innerHTML = +computerScore;
	whoWinner.textContent = roundResult;

	if(playerScore >= 5 && computerScore < 5){
		whoWinner.textContent = 'Game Over. You Win!';
		whoWinner.style.cssText = 'font-size:2em;color:red;';
		playAgain.classList.remove('hidden');

	}else if(playerScore < 5 && computerScore >= 5){
		whoWinner.textContent = 'Game Over. You Lose!';
		whoWinner.style.cssText = 'font-size:2em;color:red;';
		playAgain.classList.remove('hidden');

	}

}



playAgain.addEventListener('click',function(){
		playerScore = 0;
		computerScore = 0;
		whoWinner.textContent = 'Start!';
		scorePc.innerHTML = 0;
		scorePlayer.innerHTML = 0;
		whoWinner.style.removeProperty('font-size');
		whoWinner.style.removeProperty('color');
		playAgain.classList.add('hidden');


})

