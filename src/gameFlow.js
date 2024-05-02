import { createPlayer } from "./playerFactory";
import { createShip } from "./shipFactory";
import { populatePlayer1Board, populatePlayer2Board } from "./DOMAction";
import { updateHeader } from "./renderDOM";

// These playerBoards are side effects (external state) / (dependencies).
let player1Board; 
let player2Board;

// Player2Type is also an external state but does not get reset when restart is clicked
let player2Type = "computer"

// turnState is also an external state (Move it up).

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
    // const player2 = createPlayer("real");  

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



    // const carrier = createShip(5);
    // const battleship = createShip(4);
    // const destroyer = createShip(3);
    // const submarine = createShip(3);
    // const patrolBoat = createShip(2)

    const allPlayer1Ships = [player1Carrier, player1Battleship, player1Destroyer, player1Submarine, player1PatrolBoat];

    const allPlayer2Ships = [player2Carrier, player2Battleship, player2Destroyer, player2Submarine, player2PatrolBoat]
    // 
    // 
    // 
    // 
    // 
    // Remove all of the below and create a function that randomly places ships. It is much more reusable (because you can still use it later with a randomize button when you add drag and drop feature) and easier to implement, just use Math.random and if "Placement_failed", run the placeShip function with the same ship again. (Done)

    // Also use Math.random function to choose positions 0 to 3 because 4 options. Put the options in an array. (Done)

    // Change the coordinates display to the default Battleship style. Letter and Number e.g: A1,B9,E7,etc. (Done)


    // Create a start menu that allows the player to choose whether to play against Computer or a real player. (Done)

    // Create pass device screen for 2 player option. Verify if this is done. Seems to work, check what happens to pass menu if gameover. (Done)

    // Include a game restart button that clears all state and recreates the entire board with new random ship placements. (Create a function in turnstate that resets player turn to player one and call it when the restart button is clicked). (Done)

    // create tests for hitMap one for hit and one for miss. (Haven't created this yet - ensures you can refactor safely later on). (Done)

    // Check all DOM modules as to whether or not you need to write tests for any of the functions. (Anything that runs because of DOM event should not be tested, only pure logic should be tested)


    // Label the grids with letters and numbers? Use grids.


    
    // console.log(player1.board.placeShip({x:9,y:9}, "north", player1Carrier));
    // player1.board.placeShip({x:0,y:0}, "east", player1Battleship);
    // player1.board.placeShip({x:5,y:5}, "east", player1Destroyer);
    // player1.board.placeShip({x:2,y:2}, "east", player1Submarine);
    // player1.board.placeShip({x:9,y:0}, "south", player1PatrolBoat);



    // console.log(player2.board.placeShip({x:9,y:9}, "north", player2Carrier));
    // player2.board.placeShip({x:0,y:0}, "east", player2Battleship);
    // player2.board.placeShip({x:5,y:5}, "east", player2Destroyer);
    // player2.board.placeShip({x:2,y:2}, "east", player2Submarine);
    // player2.board.placeShip({x:9,y:0}, "south", player2PatrolBoat);

    function placeAllShips (player, shipsArray){

        
        shipsArray.forEach(ship => {
            const result = player.board.placeShip(createRandomCoords(), chooseDirection(), ship)

            if (result === "Placement_failed") {




                return placeAllShips(player, [ship])
            }

            if (result === "Placement_success") {

                console.log("All ships successfully placed");
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




    // for (let index = 0; index < 10; index++) {

        
    //     player1.board.receiveAttack(9,index)
    //     player1.board.receiveAttack(index,index)
    // }


    // player2.board.placeShip({x:9,y:9}, "west", player2Carrier);
    // player2.board.placeShip({x:0,y:0}, "east", player2Battleship);
    // player2.board.placeShip({x:5,y:5}, "east", player2Destroyer);
    // player2.board.placeShip({x:2,y:2}, "east", player2Submarine);
    // player2.board.placeShip({x:9,y:5}, "south", player2PatrolBoat);


    // for (let index = 0; index < 10; index++) {

    //     player2.board.receiveAttack(index,index)
    // }


    // I probably can remove player.type and it might still work correctly.
    player1Board = populatePlayer1Board(player1);
    player2Board = populatePlayer2Board(player2);

   


    // The ones below stay as it is.

    player1Board.displayGrids()

    player1Board.showShips()

    


    player2Board.displayGrids()

    player2Board.showHitMap()

 



}






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


            if (player2Board.player2.type === 'computer') {
                computerAttacks(player1Board.player1)
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

            if (player1Board.player1.type === 'computer') {
                computerAttacks(player2Board.player2)
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
        
        const player1Loses = player1Board.player1.board.allSunk();
        console.log(player1Loses);

        const player2Loses = player2Board.player2.board.allSunk();
        console.log(player2Loses);

        if (player1Loses) {
            
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


let test = 0

function computerAttacks (player) {

    console.log("Computer attacks");

    const x = Math.floor(Math.random() * 10);

    const y = Math.floor(Math.random() * 10);

    const result = player.board.receiveAttack(x,y)

    // console.log("Coords: "+x,y)
    // console.log(result)
    if (result === "Already Hit" || result == "Already Miss") {
         return computerAttacks(player)
    }

   

    // console.log("Computer has successfully attacked.");

    const letterArrayX = ["A","B","C","D","E","F","G","H","I","J"];

        const numberArrayY = [10,9,8,7,6,5,4,3,2,1];

    updateHeader(`Computer chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toLowerCase()}`);
    turnState.updateTurn();

   
    test++
    console.log('Computer attacks:' + test)
    return 
}


export {
    gameFlow,
    turnState,
    setPlayer2Type
}