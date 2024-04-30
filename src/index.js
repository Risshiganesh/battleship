import './assets/style.css';

import { createPlayer } from "./playerFactory";
// import { module } from './module';


// This is just a CRUD. It should be easy. But make sure to follow the instructions.

// module()


import { createDOM } from "./renderDOM";

import { gameStart } from './DOMAction';

import { gameFlow } from './gameFlow';

// import { populateBoard } from './renderBoard';

createDOM();
gameStart();
// gameFlow();


// remove this later
// const testPlayer = createPlayer("real");
// populateBoard(testPlayer)