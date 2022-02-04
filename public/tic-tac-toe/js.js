// Factory function https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern

// MODULE
// const Gameboard = (() => {
//   const board = [];
//   return {
//     board
//   };
// })();

// FACTORY
const Player = (name) => {
  const getName = () => name;
  const sayName = () => {
    console.log(`Hello ${getName()}`);
  }
  const position = [];

  return {
    getName, 
    sayName,
    position,
  }
}

let player1 = Player('Player 1')
let player2 = Player('Player 2')
playerWon = false; 
tie = false;

// MODULE
const displayController = (() => {

  statusMessage = document.querySelector('#status-message')

  const updateName = () => {

    const playerName1 = document.querySelector('#player-1-name').value
    const playerName2 = document.querySelector('#player-2-name').value

    if (playerName1 === "") {
      player1 = Player('Player 1')  
    } else {
      player1 = Player(`${playerName1}`)
    }

    if (playerName2 === "") {
      player2 = Player('Player 2')  
    } else {
      player2 = Player(`${playerName2}`)
    }
    restartGame();
  }

  let currentPlayer = 'player1'

  const restartGame = () => {
    populateBoard();
    player1.position = [];
    player2.position = [];
    document.querySelector('#restart-game').classList.add("hide");
    document.querySelector('#restart-game').classList.remove("show");
    addClickEvent();
    playerWon = false;
    tie = false;
    currentPlayer = 'player1';
  }

  const makeTable = () => {
    const displayBoard = document.querySelector('#game-board')
    displayBoard.innerHTML = '<tbody id="game-board-tr"></tbody>'
    displayBoardTr = document.querySelector('#game-board-tr')

    i = 0
    do {
      if (i % 3 === 0) {
        displayBoardTr.innerHTML += `<tr id="row-${[i]}"><td class='game-position' id='td-${[i]}'></td></tr>`
        gameRow = document.querySelector(`#row-${[i]}`)
      } else {
        gameRow.innerHTML += `<td class='game-position' id='td-${[i]}'></td>`
      }
      i++
    } while (i < 9)
    statusMessage.textContent = `${player1.getName()}'s Turn (X)`
  }

  const addClickEvent = () => {
    const gamePosition = document.querySelectorAll('.game-position');
    gamePosition.forEach(x => x.addEventListener('click', displayController.playPosition))
  }

  const removeClickEvent = () => {
    const gamePosition = document.querySelectorAll('.game-position');
    gamePosition.forEach(x => x.removeEventListener('click', displayController.playPosition))
  }

  const winningStyle = (combinations) => {    
    const number1 = combinations[i].number1
    const number2 = combinations[i].number2
    const number3 = combinations[i].number3
    document.querySelector(`${number1}`).classList.add("winning-position");
    document.querySelector(`${number2}`).classList.add("winning-position");
    document.querySelector(`${number3}`).classList.add("winning-position");
  }

  const checkstatus = (currentPlayer) => {
    if (currentPlayer === 'player1') {
      currentPlayer = player1
    } else {
      currentPlayer = player2
    }

    const winningCombinations = {}

    // Across
    winningCombinations[0] = {
      number1: '#td-0', number2: '#td-1', number3: '#td-2'
    }
    winningCombinations[1] = {
      number1: '#td-3', number2: '#td-4', number3: '#td-5'
    }
    winningCombinations[2] = {
      number1: '#td-6', number2: '#td-7', number3: '#td-8'
    }
    // Down
    winningCombinations[3] = {
      number1: '#td-0', number2: '#td-3', number3: '#td-6'
    }
    winningCombinations[4] = {
      number1: '#td-1', number2: '#td-4', number3: '#td-7'
    }
    winningCombinations[5] = {
      number1: '#td-2', number2: '#td-5', number3: '#td-8'
    }
    // Diagonal
    winningCombinations[6] = {
      number1: '#td-0', number2: '#td-4', number3: '#td-8'
    }
    winningCombinations[7] = {
      number1: '#td-2', number2: '#td-4', number3: '#td-6'
    }

    i = 0
    do { 
      if (currentPlayer.position.includes(winningCombinations[i].number1) && currentPlayer.position.includes(winningCombinations[i].number2) && currentPlayer.position.includes(winningCombinations[i].number3)) {
        statusMessage.textContent = `${currentPlayer.getName()} wins!`
        document.querySelector('#restart-game').classList.remove("hide");
        document.querySelector('#restart-game').classList.add("show");
        statusMessage.classList.remove("hide");
        statusMessage.classList.add("show");
        removeClickEvent();
        winningStyle(winningCombinations);
        playerWon = true;
      }
      i++
    } while (i < 8)

  }

  const switchPlayers = () => {
    if (currentPlayer === 'player1' && playerWon === false && tie === false) {
      currentPlayer = 'player2'
      statusMessage.textContent = `${player2.getName()}'s Turn (O)`
    } else if (currentPlayer === 'player2' && playerWon === false && tie === false) {
      currentPlayer = 'player1'
      statusMessage.textContent = `${player1.getName()}'s Turn (X)`
    }
    console.log(`current player: ${currentPlayer}`)
  }

  const makeMoves = (e) => {
    const targetId = document.querySelector(`#${e.target.id}`) 
    if (targetId.textContent === "") {
      if (currentPlayer === 'player1') {
        targetId.textContent = "X"
        player1.position.push(`#${e.target.id}`)
        console.log(`player1.position: ${player1.position}`)
      } else {
        targetId.textContent = "O"
        player2.position.push(`#${e.target.id}`)
        console.log(`player2.position: ${player2.position}`)
      }
      checkstatus(currentPlayer);
      checkTie();
      switchPlayers();
    }
  }

  const populateBoard = () => {
    makeTable();
    addClickEvent();
  }

  const playPosition = (e) => {
    makeMoves(e);
  }

  const checkTie = () => {
    if((player1.position.length + player2.position.length === 9) && playerWon === false) {
      statusMessage.textContent = `It's a tie!`;
      statusMessage.classList.remove("hide");
      statusMessage.classList.add("show");
      document.querySelector('#restart-game').classList.remove("hide");
      document.querySelector('#restart-game').classList.add("show");
      tie = true; 
    } 
  }

  return {
    populateBoard,
    playPosition,
    restartGame,
    updateName
  }
})();

displayController.populateBoard();
