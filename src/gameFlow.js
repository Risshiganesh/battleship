import { createPlayer } from "./playerFactory";
import { createShip } from "./shipFactory";

const player1 = createPlayer();
const player2 = createPlayer(); 

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


player2.board.placeShip({x:9,y:9}, "north", player2Carrier);
player2.board.placeShip({x:0,y:0}, "east", player2Battleship);
player2.board.placeShip({x:5,y:5}, "east", player2Destroyer);
player2.board.placeShip({x:2,y:2}, "east", player2Submarine);
player2.board.placeShip({x:9,y:0}, "south", player2PatrolBoat);

