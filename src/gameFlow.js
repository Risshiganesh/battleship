import { createPlayer } from "./playerFactory";
import { createShip } from "./shipFactory";
import { populatePlayer1Board, populatePlayer2Board } from "./renderBoard";

// These playerBoards are side effects (external state) / (dependencies).
let player1Board; 
let player2Board;


function gameFlow () {

    const player1 = createPlayer("real");
    const player2 = createPlayer("computer"); 

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
    const player2PatrolBoat = createShip(2)

    player1.board.placeShip({x:9,y:9}, "north", player1Carrier);
    player1.board.placeShip({x:0,y:0}, "east", player1Battleship);
    player1.board.placeShip({x:5,y:5}, "east", player1Destroyer);
    player1.board.placeShip({x:2,y:2}, "east", player1Submarine);
    player1.board.placeShip({x:9,y:0}, "south", player1PatrolBoat);

    for (let index = 0; index < 10; index++) {
        // const element = array[index];
        
        player1.board.receiveAttack(9,index)
        player1.board.receiveAttack(index,index)
    }


    player2.board.placeShip({x:8,y:8}, "west", player2Carrier);
    player2.board.placeShip({x:0,y:0}, "east", player2Battleship);
    player2.board.placeShip({x:5,y:5}, "east", player2Destroyer);
    player2.board.placeShip({x:2,y:2}, "east", player2Submarine);
    player2.board.placeShip({x:9,y:5}, "south", player2PatrolBoat);


    for (let index = 0; index < 10; index++) {
        // const element = array[index];
        
        // player2.board.receiveAttack(9,index)
        player2.board.receiveAttack(index,index)
    }


    player1Board = populatePlayer1Board(player1, player1.type);
    player2Board = populatePlayer2Board(player2, player2.type);

   

    // console.log(player1.board.allSunk())

    // while (!(player1.board.allSunk()) || !(player2.board.allSunk())) {
    //     player1Board.showShips()
    // }

    player1Board.displayGrids()

    player1Board.showShips()

    


    player2Board.displayGrids()

    player2Board.showHitMap()

    // console.log("game over")

    // const turnState = currentTurn()



}

// merge turnstate into gameflow or gameflow into turnstate? Because cannot show ships (player1Board must be accessed).

// in turnState create a function to check if gameover and who won using allSunk() from each boards. Is checked everytime a grid is clicked.



// player1Board.displayGrids()

    // player1Board.showShips()

    


    // player2Board.displayGrids()

    // player2Board.showHitMap()

const turnState = (function () {
    let playerTurn = "player1";

    

    function updateTurn() {
        if (playerTurn === "player1") {
            playerTurn = "player2"

            player1Board.deleteGrids();
            player1Board.displayGrids();
            player1Board.showHitMap();

            player2Board.deleteGrids();
            player2Board.displayGrids();
            player2Board.showShips();
            player2Board.showHitMap();

            // build AI here?
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

    return{
        updateTurn,
        getTurn
    }
})()


let test = 0

function computerAttacks (player){

    console.log("Computer attacks");

    const x = Math.floor(Math.random() * 10);

    const y = Math.floor(Math.random() * 10);

    const result = player.board.receiveAttack(x,y)

    console.log("Coords: "+x,y)
    console.log(result)
    if (result === "Already Hit" || result == "Already Miss") {
         return computerAttacks(player)
    }

   

    console.log("Computer has successfully attacked.");

    turnState.updateTurn();

   
    test++
    console.log('Computer attacks:' + test)
    return 
}


export {
    gameFlow,
    turnState
}