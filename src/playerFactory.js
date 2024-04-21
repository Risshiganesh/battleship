import { createGameboard } from "./gameboardFactory"

function createPlayer (type, enemyHitmap, attackEnemy) {
    const board = createGameboard();

    if (!(type === "real" || type === "computer")) {
        return "Invalid_input";
    }
    // Player logic and computer logic is not complete.

    if (type === "real") {
    
        // create player
        // create board
        // - Already done above

        // Do all this logic inside here or on a different module?

        // place ships (what types of ship and how many?)
        // - create 5 types of ships and place them

        // GAMEFLOW BEGINS
        // execute opponent's receiveAttack function
        // if opponent allSunk() is false, then opponent executes your receiveAttack function
        // if opponent allSunk() is true, then you win.
        // The above applies to opponent as well.
        // if you accidently choose grids that were already hit or missed, you will be prompted to try again
        
        // UI
        // Opponent will only see your grid as hit map and vice versa.
        // At every turn, the entire DOM will render ownGrid and enemy hitmap and vice versa.

    
    }

    if (type === "computer") {
        
        // same as above except Math.floor(Math.random() * 10) is used with receiveAttack for coordinates
        // create a function that runs Math.floor, and test it.
    }

    return {
        type,
        board
    }

    // create math.floor function separately below here.
    
}

export {
    createPlayer
}