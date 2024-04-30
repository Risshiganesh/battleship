import { gameFlow, turnState, setPlayer2Type } from "./gameFlow";

import { updateHeader } from "./renderDOM";

// How do you render the board?

// select the player border grids first.

// then import and loop through ownGrid and hitmap

// this function has to be reusable for both player 1 and player 2.

// it will check whose turn and type of player the player is playing with.

// if playing againts ai it will only ever render the ai player's hitmap. never renders ai player's onwGrid.

// if playing against another player after a player attacks, a fixed black div will cover up the entire screen and show a text of whether the player hit or miss, also shows whose turn is next with a button labelled "start turn". with the next player's grids and hitmaps alreadt rendered behind the black div.

// ships are displayed in dark grey colour

// hits are displayed in red

// misses are displayed in white




// first you must get ownGrid of player one and display the grids correctly.

// Then you must get player two's hitmap and display the grids correctly.

// after that you must create another funtion to display ships correctly. -add classes to the correct grids.

// Then you create another function to render hitmap correctly.

// Hitmap will be displayed on player one grid and player two grid.

// Add event listeners to the grids. (DONE)


// add coordinates as an object "const coords = {x:0,y:0}" inside addeventlistener callback function? use columnIndex annd rowIndex? (DONE)



function gameStart () {
    const startMenu = document.querySelector('.start-menu');
    const playerTypeTitle = document.querySelector('.player-type-title');
    const startButton = document.querySelector('.start-button');
    const computerOption = document.querySelector('.computer-option');
    const realPlayerOption = document.querySelector('.real-player-option');
    
    
    startButton.addEventListener('click', function(e){

        e.preventDefault();

        startMenu.classList.remove('show-start-menu');

        gameFlow();

    });

    computerOption.addEventListener("click", function (e) {
        e.preventDefault();

        playerTypeTitle.textContent = "Play against: Computer"

        setPlayer2Type("computer");
    })

    realPlayerOption.addEventListener("click", function (e) {
        e.preventDefault();

        playerTypeTitle.textContent = "Play against: Your Friend"

        setPlayer2Type("real");
    })


}


// refactor if necessary
function populatePlayer1Board (player1){
    const player1Grid = document.querySelector('.player1-grid');


    
    function displayGrids() {
        createGrids(player1, player1Grid, "player1");
    }

    function deleteGrids() {
        while (player1Grid.firstChild) {
            player1Grid.firstChild.remove()
        }
    }


    function showShips() {
        displayShips(null,player1, player1Grid);
    }
    



    function showHitMap() {
        displayHitMap(player1, player1Grid);
    }

   

   


    return {
        displayGrids,
        deleteGrids,
        showShips,
        showHitMap,
        player1
    }

}

// Merge it into one function - above
function populatePlayer2Board (player2) {

    const player2Grid = document.querySelector('.player2-grid');

    function displayGrids () {
        createGrids(player2, player2Grid, "player2");
    }

    function deleteGrids() {
        while (player2Grid.firstChild) {
            player2Grid.firstChild.remove()
        }
    }

    function showShips () {
        displayShips(null,player2, player2Grid);
    }
    

    function showHitMap () {
        displayHitMap(player2, player2Grid);
    }

    return {
        displayGrids,
        deleteGrids,
        showShips,
        showHitMap,
        player2
    }
    
    
}



function createGrids (player, playerDOMGrid, isPlayer) {
    // put the grid making loop below inside here

    for (let columnIndex = 0; columnIndex < player.board.ownGrid.length; columnIndex++) {
        const column = player.board.ownGrid[columnIndex];


        const gridColumn = document.createElement('div');
        gridColumn.classList.add("grid-column");
        // gridColumn.textContent = columnIndex
        playerDOMGrid.append(gridColumn)
        


        for (let rowIndex = 9; rowIndex >= 0; rowIndex--) {
            // const element = column[rowIndex];
            // console.log("TEST")
            const gridRow = document.createElement('div');
            gridRow.classList.add("grid-row");
            // gridRow.textContent = rowIndex;
            gridColumn.append(gridRow);

           clickBoard(player, gridRow, columnIndex, rowIndex, isPlayer)
        }

       
        
    }
}










function displayShips(toDisplay, player, playerDOMGrid) {
        // if player 2 turn don't display ships

        // remove later
        toDisplay = true

        if (toDisplay) {
            // loop through all ownGrid grids array and if not empty, assign a grey class to that grid. 

            const playerColumns = playerDOMGrid.childNodes
            
            for (let colIndex = 0; colIndex < player.board.ownGrid.length; colIndex++) {
                const rows = player.board.ownGrid[colIndex];

                // Board renders upside down if I don't use "nodeRowIterator".
                let nodesRowIterator = 0

                const rowNodes = playerColumns[colIndex].childNodes;

                // console.log(rowNodes)

                // const reversedRowNode = rowNodes.reverse();

                for (let rowIndex = 9; rowIndex >= 0; rowIndex--) {
                    const row = rows[rowIndex];
                    if (row) {
                        // console.log(true)

                        rowNodes[nodesRowIterator].classList.add('ship-located')


                    }
                    
                    nodesRowIterator++
                }
                
            }
            
        }
}




function displayHitMap(player,playerDOMGrid) {

    // player.board.hitMap

    // display hitmap after display ship runs, This should override the classes of displayShips

    let toDisplay = true

    if (toDisplay) {
        // loop through all ownGrid grids array and if not empty, assign a grey class to that grid. 

        const playerColumns = playerDOMGrid.childNodes


        // console.log(player.board.hitMap)
        
        for (let colIndex = 0; colIndex < player.board.hitMap.length; colIndex++) {
            const rows = player.board.hitMap[colIndex];

            // Board renders upside down if I don't use "nodeRowIterator".
            let nodesRowIterator = 0

            const rowNodes = playerColumns[colIndex].childNodes;


            for (let rowIndex = 9; rowIndex >= 0; rowIndex--) {
                const row = rows[rowIndex];
                if (row === "Hit") {
                    // console.log(true)

                    rowNodes[nodesRowIterator].classList.add('ship-is-hit')


                }


                if (row === "Miss") {
                    // console.log(true)

                    rowNodes[nodesRowIterator].classList.add('attack-missed')


                }
                
                nodesRowIterator++
            }
            
        }
        
    }
}








function clickBoard (player, grid, columnIndex, rowIndex, isPlayer) {
    grid.addEventListener('click', function () {

        const passDeviceDiv = document.querySelector('.pass-device');

        const passDeviceMsg = document.querySelector('.pass-device-message');

        const currentPlayerTurn = turnState.getTurn();

        const gameIsOver = turnState.isGameOver();

        if (gameIsOver) {


        }



        
        if (isPlayer === currentPlayerTurn) {


            updateHeader("Not your own board!");
            return
        }


        const x = columnIndex
        const y = rowIndex;
        console.log(x,y);

        console.log(player.board.hitMap[x][y])

        if (player.board.hitMap[x][y] === "Miss" || player.board.hitMap[x][y] === "Hit") {
            // console.log("Grid already chosen")

            updateHeader("Grid already chosen");
            return;
        }


        // Remove later is pass device message works correctly.
        // if (player.type === "real") {
        //     passDeviceDiv.classList.add('show-pass-device');

        //     if (currentPlayerTurn === "player1") {
        //         passDeviceMsg.textContent = "Pass the device to Player 2";
        //     }
           
        //     if (currentPlayerTurn === "player2") {
        //         passDeviceMsg.textContent = "Pass the device to Player 1";
        //     }

            
        // }

        

        const result = player.board.receiveAttack(x,y);

        const letterArrayX = ["A","B","C","D","E","F","G","H","I","J"];

        const numberArrayY = [10,9,8,7,6,5,4,3,2,1]
        if (currentPlayerTurn === "player1") {

            // Create new div for pass the device msg?
            passDeviceMsg.textContent = `It's a ${result.toUpperCase()}! \r\n Pass the device to Player 2`;

            
            updateHeader(`Player 1 chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toUpperCase()}`);

        }

        if (currentPlayerTurn === "player2") {

            passDeviceMsg.textContent = `It's a ${result.toUpperCase()}! \r\n Pass the device to Player 1`;


            updateHeader(`Player 2 chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toUpperCase()}`);

        }

        if (player.type === "real") {
            passDeviceDiv.classList.add('show-pass-device');
        }

        
        

        turnState.updateTurn();

        if (player.board.ownGrid[x][y]) {
  
            grid.classList.add('ship-is-hit')
            console.log(player.board.ownGrid[x][y].getHits())
     
            return
        }

        grid.classList.add('attack-missed');

        
    })
}

export{
    populatePlayer1Board,
    populatePlayer2Board,
    gameStart
}