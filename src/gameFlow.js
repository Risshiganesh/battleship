import { createPlayer } from "./playerFactory";
import { createShip } from "./shipFactory";
import { populatePlayerBoard } from "./DOMAction";
import { updateHeader } from "./renderDOM";

// These playerBoards are side effects (external state) / (dependencies).
let player1Board; 
let player2Board;

// Player2Type is also an external state but does not get reset when restart is clicked
let player2Type = "computer"

// turnState is also an external state (Move it up).

const turnState = (function () {
    let playerTurn = "player1";

    

    function updateTurn() {

        // Prevents computer from playing
        if (isGameOver()) {

            const passDevice = document.querySelector('.pass-device');
            passDevice.classList.add('show-pass-device');

            const gameOver = document.querySelector('.game-over');
            gameOver.classList.add('enable-game-over');
            // Make playerDiv not clickable

            player1Board.deleteGrids();
            player1Board.displayGrids();
            player1Board.showShips();
            player1Board.showHitMap();

            player2Board.deleteGrids();
            player2Board.displayGrids();
            player2Board.showShips();
            player2Board.showHitMap();


            return;
        }


        if (playerTurn === "player1") {
            playerTurn = "player2"

            player1Board.deleteGrids();
            player1Board.displayGrids();
            player1Board.showHitMap();

            player2Board.deleteGrids();
            player2Board.displayGrids();
            player2Board.showShips();
            player2Board.showHitMap();


            if (player2Board.player.type === 'computer') {
                computerAttacks(player1Board.player)
            }


            return
        }

        if (playerTurn === "player2") {
            playerTurn = "player1"

            player2Board.deleteGrids();
            player2Board.displayGrids();
            player2Board.showHitMap();

            player1Board.deleteGrids();
            player1Board.displayGrids();
            player1Board.showShips();
            player1Board.showHitMap();

            if (player1Board.player.type === 'computer') {
                computerAttacks(player2Board.player)
            }

            return
        }
    }

    function getTurn() {
        return playerTurn;
    }

    function isGameOver () {
        const passDeviceMsg = document.querySelector('.pass-device-message');

        const passDeviceButton = document.querySelector('.pass-device-button');
        
        const player1Loses = player1Board.player.board.allSunk();
   

        const player2Loses = player2Board.player.board.allSunk();
    

        if (player1Loses) {
            ``
            passDeviceMsg.textContent = "Player 2 wins!";
            passDeviceButton.textContent = 'See board';
            updateHeader("Player 2 wins!");
            return true;
        }

        if (player2Loses) {
            
            passDeviceMsg.textContent = "Player 1 wins!";
            passDeviceButton.textContent = 'See board';
            updateHeader("Player 1 wins!");
            return true;
        }

    }

    function resetTurn (){
        playerTurn = "player1"
    }

    return{
        updateTurn,
        getTurn,
        isGameOver,
        resetTurn
    }
})()

function setPlayer2Type (type){
    player2Type = type
}
function gameFlow () {

    // move this out as a separate function and name it resetBoards. Call it from inside reset button.
    if (player1Board) {
        player1Board.deleteGrids()
        player1Board = null;
    }

    if (player2Board) {
        player2Board.deleteGrids()
        player2Board = null;
    }



    const player1 = createPlayer("real");
    const player2 = createPlayer(player2Type);


    // place player1 ships
    // Types of ship
    // - Carrier, size 5
    // - Battleship, size 4
    // - Destroyer, size 3
    // - Submarine, size 3
    // - Patrol Boat, size 2

    const player1Carrier = createShip(5);
    const player1Battleship = createShip(4);
    const player1Destroyer = createShip(3);
    const player1Submarine = createShip(3);
    const player1PatrolBoat = createShip(2)


    const player2Carrier = createShip(5);
    const player2Battleship = createShip(4);
    const player2Destroyer = createShip(3);
    const player2Submarine = createShip(3);
    const player2PatrolBoat = createShip(2);




    const allPlayer1Ships = [player1Carrier, player1Battleship, player1Destroyer, player1Submarine, player1PatrolBoat];

    const allPlayer2Ships = [player2Carrier, player2Battleship, player2Destroyer, player2Submarine, player2PatrolBoat]


    function placeAllShips (player, shipsArray){

        
        shipsArray.forEach(ship => {
            const result = player.board.placeShip(createRandomCoords(), chooseDirection(), ship)

            if (result === "Placement_failed") {




                return placeAllShips(player, [ship])
            }

            if (result === "Placement_success") {
                return;
            }
        });

        
    }


    function createRandomCoords () {
            
        const x = Math.floor(Math.random()*10);
        const y = Math.floor(Math.random()*10);

        return{
            x,
            y
        }
    }


    function chooseDirection () {

        const directionArray = ["north", "south", "east", "west"];

        // from 0 to 3
        const chooseRandomDirection = Math.floor(Math.random()*4);

        if (chooseRandomDirection > 3 || chooseRandomDirection < 0) {
            throw("Choose Random Direction is not working correctly")
        }

        return directionArray[chooseRandomDirection]

    }

    placeAllShips(player1, allPlayer1Ships);
    placeAllShips(player2, allPlayer2Ships);



    player1Board = populatePlayerBoard(player1, "player1");
    player2Board = populatePlayerBoard(player2, "player2");

   

   


    // The ones below stay as it is.

    player1Board.displayGrids()

    player1Board.showShips()

    


    player2Board.displayGrids()

    player2Board.showHitMap()

 



}




function computerAttacks (player) {

  

    const x = Math.floor(Math.random() * 10);

    const y = Math.floor(Math.random() * 10);

    const result = player.board.receiveAttack(x,y)

  
    if (result === "Already Hit" || result == "Already Miss") {
         return computerAttacks(player)
    }

   


    const letterArrayX = ["A","B","C","D","E","F","G","H","I","J"];

        const numberArrayY = [10,9,8,7,6,5,4,3,2,1];

    updateHeader(`Computer chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toLowerCase()}`);
    turnState.updateTurn();

   
  
    return 
}


export {
    gameFlow,
    turnState,
    setPlayer2Type
}