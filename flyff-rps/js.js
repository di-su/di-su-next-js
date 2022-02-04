

let computerScore = 0;
let playerScore = 0;


function playMusic() {
	var audio = document.getElementById("audio");
	audio.play();
}

function pauseMusic() {
	var audio = document.getElementById("audio");
	audio.pause();
}

let rps = [
	"Rock",
	"Paper",
	"Scissors"
];

let selection = document.getElementById("selection")
let count = 2 

function forward() {
	if (count < 2) {
		count++
	} else {
		count = 0
	}
	// console.log(count)
	selection.innerHTML = rps[count]
	playerImageChange()
	cloneAndPlayClick()
}

function backward() {
	if (count > 0) {
		count--
	} else {
		count = 2
	}
	// console.log(count)
	selection.innerHTML = rps[count]
	playerImageChange()
	cloneAndPlayClick()
}

var chime = new Audio('chime.wav');

var click = new Audio('click.wav');

var win = new Audio('win.mp3');

function cloneAndPlayChime() {
    var clone = chime.cloneNode(true);
    clone.play();
}

function cloneAndPlayClick() {
    var clone = click.cloneNode(true);
    clone.play();
}

function cloneAndPlayWin() {
    var clone = win.cloneNode(true);
    // clone.volume = 0.2;
    clone.play();
}

function computerRock() {
	setTimeout(setRock,	0)
	setTimeout(setPaper,	40)
	setTimeout(setScissors,	80)
	setTimeout(setRock,	120)
	setTimeout(setPaper,	160)
	setTimeout(setScissors,	200)
	setTimeout(setRock,	240)
	setTimeout(setPaper,	280)
	setTimeout(setScissors,	320)
	setTimeout(setRock,	360)
	setTimeout(setPaper,	400)
	setTimeout(setScissors,	440)
	setTimeout(setRock,	480)
	setTimeout(setPaper,	530)
	setTimeout(setScissors,	590)
	setTimeout(setRock,	660)
	setTimeout(setRock,	740)
	setTimeout(setPaper,	850)
	setTimeout(setScissors,	950)
	setTimeout(setRock,	1000)
	setTimeout(setRock,	1200)
	setTimeout(setPaper, 1400)
	setTimeout(setScissors,	1600)
	setTimeout(setRock,	2000)
	setTimeout(setPaper, 2400)
	setTimeout(setScissors,	2800)
	setTimeout(setRock,	3200)
}

function computerPaper() {
	setTimeout(setRock,	0)
	setTimeout(setPaper,	40)
	setTimeout(setScissors,	80)
	setTimeout(setRock,	120)
	setTimeout(setPaper,	160)
	setTimeout(setScissors,	200)
	setTimeout(setRock,	240)
	setTimeout(setPaper,	280)
	setTimeout(setScissors,	320)
	setTimeout(setRock,	360)
	setTimeout(setPaper,	400)
	setTimeout(setScissors,	440)
	setTimeout(setRock,	480)
	setTimeout(setPaper,	530)
	setTimeout(setScissors,	590)
	setTimeout(setRock,	660)
	setTimeout(setRock,	740)
	setTimeout(setPaper,	850)
	setTimeout(setScissors,	950)
	setTimeout(setRock,	1000)
	setTimeout(setPaper,	1200)
	setTimeout(setScissors, 1400)
	setTimeout(setRock,	1600)
	setTimeout(setPaper,	2000)
	setTimeout(setScissors, 2400)
	setTimeout(setRock,	2800)
	setTimeout(setPaper,	3200)
	// setTimeout(setScissors, 3600)
}

function computerScissors() {
	setTimeout(setRock,	0)
	setTimeout(setPaper,	40)
	setTimeout(setScissors,	80)
	setTimeout(setRock,	120)
	setTimeout(setPaper,	160)
	setTimeout(setScissors,	200)
	setTimeout(setRock,	240)
	setTimeout(setPaper,	280)
	setTimeout(setScissors,	320)
	setTimeout(setRock,	360)
	setTimeout(setPaper,	400)
	setTimeout(setScissors,	440)
	setTimeout(setRock,	480)
	setTimeout(setPaper,	530)
	setTimeout(setScissors,	590)
	setTimeout(setRock,	660)
	setTimeout(setRock,	740)
	setTimeout(setPaper,	850)
	setTimeout(setScissors,	950)
	setTimeout(setRock,	1000)
	setTimeout(setRock,	1200)
	setTimeout(setPaper, 1400)
	setTimeout(setScissors,	1600)
	setTimeout(setRock,	2000)
	setTimeout(setPaper, 2400)
	setTimeout(setScissors,	2800)
}


function setRock() {
	document.getElementById("computer-choice-image").src = "./images/rock.jpg";
	document.getElementById("computer-selection").innerHTML = "Rock"		
	cloneAndPlayChime();
}

function setPaper() {
	document.getElementById("computer-choice-image").src = "./images/paper.jpg";
	document.getElementById("computer-selection").innerHTML = "Paper"		
	cloneAndPlayChime();
}

function setScissors() {
	document.getElementById("computer-choice-image").src = "./images/scissors.jpg";
	document.getElementById("computer-selection").innerHTML = "Scissors"		
	cloneAndPlayChime();
}

function computerPlay()	{
	return rps[Math.floor(Math.random()*rps.length)];
}

function playerWon() {
	playerScore++
	document.getElementById("win-counter").innerHTML = playerScore
	checkPrize();
}

function computerWon() {
	playerScore = 0
	document.getElementById("win-counter").innerHTML = playerScore
	setTimeout(displayLoss, 500)
}

function dismissLoseWindow() {
	document.getElementById("lose-window").style.display = 'none';	
	cloneAndPlayClick()
}

function displayLoss() {
	document.getElementById("lose-window").style.display = 'block';
}

function continueGame() {
	document.getElementById("win-window").style.display = 'none';	
	cloneAndPlayClick()
}

function endGame() {
	savePrize();
	document.getElementById("win-window").style.display = 'none';	
	playerScore = 0
	document.getElementById("win-counter").innerHTML = playerScore
	cloneAndPlayClick()
	// savePrize();
}

function savePrize() {
	let node = document.createElement("li");

	if (playerScore == 1) {
		prizeName = prizesObject.prize1.item_name;
		prizeQuantity = prizesObject.prize1.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 

	if (playerScore == 2) {
		prizeName = prizesObject.prize2.item_name;
		prizeQuantity = prizesObject.prize2.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 

	if (playerScore == 3) {
		prizeName = prizesObject.prize3.item_name;
		prizeQuantity = prizesObject.prize3.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 

	if (playerScore == 4) {
		prizeName = prizesObject.prize4.item_name;
		prizeQuantity = prizesObject.prize4.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 

	if (playerScore == 5) {
		prizeName = prizesObject.prize5.item_name;
		prizeQuantity = prizesObject.prize5.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 
	if (playerScore == 6) {
		prizeName = prizesObject.prize6.item_name;
		prizeQuantity = prizesObject.prize6.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 

	if (playerScore == 7) {
		prizeName = prizesObject.prize7.item_name;
		prizeQuantity = prizesObject.prize7.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 

	if (playerScore == 8) {
		prizeName = prizesObject.prize8.item_name;
		prizeQuantity = prizesObject.prize8.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 
	if (playerScore == 9) {
		prizeName = prizesObject.prize9.item_name;
		prizeQuantity = prizesObject.prize9.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 

	if (playerScore == 10) {
		prizeName = prizesObject.prize10.item_name;
		prizeQuantity = prizesObject.prize10.quantity;
		currentPrize = prizeQuantity + "x " + prizeName  
	} 

	let textnode = document.createTextNode(currentPrize);
	node.appendChild(textnode);
	document.getElementById("prizes-won").appendChild(node);
}

// let prizeArray = [
// 	"prize1",
// 	"prize2",
// 	"prize3",
// 	"prize4",
// 	"prize5"
// ];

let prizesObject = {
	'prize1' : {
		'image' : './images/prizes/Mysterious_Pill.png',
		'item_name' : 'Mysterious Pill',
		'item_description' : 'Recovers HP by 12,000',
		'quantity' : '10' 
	},
	'prize2' : {
		'image' : './images/prizes/Scroll_of_Sprint.png',
		'item_name' : 'Scroll of Sprint',
		'item_description' : 'Substantially increases your run speed. Lasts 3 Minutes.',
		'quantity' : '3' 
	},
	'prize3' : {
		'image' : './images/prizes/Moonstone.gif',
		'item_name' : 'Event Moonstone',
		'item_description' : 'Substantially increases your run speed. Lasts 3 Minutes.',
		'quantity' : '7'
	},
	'prize4' : {
		'image' : './images/prizes/Moonstone.gif',
		'item_name' : 'Event Moonstone',
		'item_description' : 'Substantially increases your run speed. Lasts 3 Minutes.',
		'quantity' : '13'
	},
	'prize5' : {
		'image' : './images/prizes/ScrollofPartyEXP7-days.png',
		'item_name' : 'Scroll of Party EXP (7-days)',
		'item_description' : 'Substantially increases your run speed. Lasts 3 Minutes.',
		'quantity' : '1'
	},
	'prize6' : {
		'image' : './images/prizes/BlessingoftheGoddess.png',
		'item_name' : 'Blessing of the Goddess',
		'item_description' : 'Substantially increases your run speed. Lasts 3 Minutes.',
		'quantity' : '2'
	},
	'prize7' : {
		'image' : './images/prizes/ScrollofReversion.png',
		'item_name' : 'Scroll of Reversion',
		'item_description' : 'Substantially increases your run speed. Lasts 3 Minutes.',
		'quantity' : '6'
	},
	'prize8' : {
		'image' : './images/prizes/Ragdoll.png',
		'item_name' : 'Patches',
		'item_description' : 'Substantially increases your run speed. Lasts 3 Minutes.',
		'quantity' : '8'
	},
	'prize9' : {
		'image' : './images/prizes/Feather_Wings_Black.png',
		'item_name' : 'Elegant Black Wings',
		'item_description' : 'Substantially increases your run speed. Lasts 3 Minutes.',
		'quantity' : '1'
	},
	'prize10' : {
		'image' : './images/prizes/Dragon_Cloak_of_the_Initiate.png',
		'item_name' : 'Dragon Cloak of the Initiate',
		'item_description' : 'Substantially increases your run speed. Lasts 3 Minutes.',
		'quantity' : '1'
	},
}

function displayWin() {
	document.getElementById("win-window").style.display = 'block';
}

function checkPrize() {

	if (playerScore == 1) {
		document.getElementById("current-prize").src = prizesObject.prize1.image;
		document.getElementById("prize-quantity-1").innerHTML = prizesObject.prize1.quantity;
		document.getElementById("next-prize").src = prizesObject.prize2.image;
		document.getElementById("prize-quantity-2").innerHTML = prizesObject.prize2.quantity;
		setTimeout(displayWin, 500)
		cloneAndPlayWin();
	}
	if (playerScore == 2) {
		document.getElementById("current-prize").src = prizesObject.prize2.image;
		document.getElementById("prize-quantity-1").innerHTML = prizesObject.prize2.quantity;
		document.getElementById("next-prize").src = prizesObject.prize3.image;
		document.getElementById("prize-quantity-2").innerHTML = prizesObject.prize3.quantity;
		setTimeout(displayWin, 500)
		cloneAndPlayWin();
	}
	if (playerScore == 3) {
		document.getElementById("current-prize").src = prizesObject.prize3.image;
		document.getElementById("prize-quantity-1").innerHTML = prizesObject.prize3.quantity;
		document.getElementById("next-prize").src = prizesObject.prize4.image;
		document.getElementById("prize-quantity-2").innerHTML = prizesObject.prize4.quantity;
		setTimeout(displayWin, 500)
		cloneAndPlayWin();
	}
	if (playerScore == 4) {
		document.getElementById("current-prize").src = prizesObject.prize4.image;
		document.getElementById("prize-quantity-1").innerHTML = prizesObject.prize4.quantity;
		document.getElementById("next-prize").src = prizesObject.prize5.image;
		document.getElementById("prize-quantity-2").innerHTML = prizesObject.prize5.quantity;
		setTimeout(displayWin, 500)
		cloneAndPlayWin();
	}
	if (playerScore == 5) {
		document.getElementById("current-prize").src = prizesObject.prize5.image;
		document.getElementById("prize-quantity-1").innerHTML = prizesObject.prize5.quantity;
		document.getElementById("next-prize").src = prizesObject.prize6.image;
		document.getElementById("prize-quantity-2").innerHTML = prizesObject.prize6.quantity;
		setTimeout(displayWin, 500)
		cloneAndPlayWin();
	}
	if (playerScore == 6) {
		document.getElementById("current-prize").src = prizesObject.prize6.image;
		document.getElementById("prize-quantity-1").innerHTML = prizesObject.prize6.quantity;
		document.getElementById("next-prize").src = prizesObject.prize7.image;
		document.getElementById("prize-quantity-2").innerHTML = prizesObject.prize7.quantity;
		setTimeout(displayWin, 500)
		cloneAndPlayWin();
	}
	if (playerScore == 7) {
		document.getElementById("current-prize").src = prizesObject.prize7.image;
		document.getElementById("prize-quantity-1").innerHTML = prizesObject.prize7.quantity;
		document.getElementById("next-prize").src = prizesObject.prize8.image;
		document.getElementById("prize-quantity-2").innerHTML = prizesObject.prize8.quantity;
		setTimeout(displayWin, 500)
		cloneAndPlayWin();
	}
	if (playerScore == 8) {
		document.getElementById("current-prize").src = prizesObject.prize8.image;
		document.getElementById("prize-quantity-1").innerHTML = prizesObject.prize8.quantity;
		document.getElementById("next-prize").src = prizesObject.prize9.image;
		document.getElementById("prize-quantity-2").innerHTML = prizesObject.prize9.quantity;
		setTimeout(displayWin, 500)
		cloneAndPlayWin();
	}
	if (playerScore == 9) {
		document.getElementById("current-prize").src = prizesObject.prize9.image;
		document.getElementById("prize-quantity-1").innerHTML = prizesObject.prize9.quantity;
		document.getElementById("next-prize").src = prizesObject.prize10.image;
		document.getElementById("prize-quantity-2").innerHTML = prizesObject.prize10.quantity;
		setTimeout(displayWin, 500)
		cloneAndPlayWin();
	}
}

function play() {

	cloneAndPlayClick()

	let playerSelection = rps[count]

	let computerSelection = computerPlay();

	computerImageChange(computerSelection)

	if ((playerSelection.toLowerCase() == "rock") & (computerSelection == "Paper"))	 {
		setTimeout(computerWon, 3600);
		computerPaper();
		console.log("You Lose! Paper beats Rock");
	}
	if ((playerSelection.toLowerCase() == "rock") & (computerSelection == "Scissors"))	 {
		setTimeout(playerWon, 3600)
		computerScissors();
		console.log("You Win! Rock beats Scissors");
	}
	if ((playerSelection.toLowerCase() == "paper") & (computerSelection == "Scissors"))	 {
		setTimeout(computerWon, 3600);
		computerScissors();
		console.log("You Lose! Scissors beats Paper");
	}
	if ((playerSelection.toLowerCase() == "paper") & (computerSelection == "Rock"))	 {
		setTimeout(playerWon, 3600)
		computerRock();
		console.log("You Win! Paper beats Rock");
	}
	if ((playerSelection.toLowerCase() == "scissors") & (computerSelection == "Rock"))	 {
		setTimeout(computerWon, 3600);
		computerRock();
		console.log("You Lose! Rock beats Scissors");
	}
	if ((playerSelection.toLowerCase() == "scissors") & (computerSelection == "Paper"))	 {
		setTimeout(playerWon, 3600)
		computerPaper();
		console.log("You Win! Scissors beats Paper");
	}
	if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
		if (playerSelection.toLowerCase() == "rock") {
			computerRock();
		} 
		if (playerSelection.toLowerCase() == "paper") {
			computerPaper();
		} 
		if (playerSelection.toLowerCase() == "scissors") {
			computerScissors();
		} 
		console.log("It's a tie!");
	}

}


function playerImageChange() {
	if (count == 0) {
		document.getElementById("user-choice-image").src = "./images/rock.jpg";
		// console.log("rock image");
	} else if (count == 1) {
		document.getElementById("user-choice-image").src = "./images/paper.jpg";
		// console.log("paper image");
	} else {
		document.getElementById("user-choice-image").src = "./images/scissors.jpg";
		// console.log("scissor image");
	}
}

function computerImageChange(computerSelection) {
	if (computerSelection == "Scissors") {
		document.getElementById("computer-choice-image").src = "./images/scissors.jpg";
	}
	if (computerSelection == "Rock") {
		document.getElementById("computer-choice-image").src = "./images/rock.jpg";
	}
	if (computerSelection == "Paper") {
		document.getElementById("computer-choice-image").src = "./images/paper.jpg";
	}

}