import { gameFlow, turnState, setPlayer2Type } from "./gameFlow";

import { updateHeader } from "./renderDOM";


function gameStart () {
    const startMenu = document.querySelector('.start-menu');
    const playerTypeTitle = document.querySelector('.player-type-title');
    const startButton = document.querySelector('.start-button');
    const computerOption = document.querySelector('.computer-option');
    const realPlayerOption = document.querySelector('.real-player-option');

    


    const restartButton = document.querySelector('.restart-button');

    const player1Label = document.querySelector('.player1-label');

    const player2Label = document.querySelector('.player2-label');
    
    
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


    restartButton.addEventListener('click', function (e) {
        e.preventDefault()

        turnState.resetTurn();

        const gameOver = document.querySelector('.game-over');
        gameOver.classList.remove('enable-game-over');
        updateHeader("Player 1 goes first");
        player1Label.classList.add('show-turn');

        player2Label.classList.remove('show-turn');
        gameFlow()
    })



}


// refactor if necessary
function populatePlayerBoard (player, playerNumber){

    let playerGrid;



    if (playerNumber === "player1") {
        playerGrid = document.querySelector('.player1-grid');
    }
    
    if (playerNumber === "player2") {
  
        playerGrid = document.querySelector('.player2-grid');
    }


    
    function displayGrids() {
        createGrids(player, playerGrid, playerNumber);
    }

    function deleteGrids() {
        while (playerGrid.firstChild) {
            playerGrid.firstChild.remove()
        }
    }


    function showShips() {
        displayShips(null,player, playerGrid);
    }
    



    function showHitMap() {
        displayHitMap(player, playerGrid);
    }

   

   


    return {
        displayGrids,
        deleteGrids,
        showShips,
        showHitMap,
        player
    }

}





function createGrids (player, playerDOMGrid, isPlayer) {
    // put the grid making loop below inside here

    for (let columnIndex = 0; columnIndex < player.board.ownGrid.length; columnIndex++) {
        const column = player.board.ownGrid[columnIndex];


        const gridColumn = document.createElement('div');
        gridColumn.classList.add("grid-column");

        playerDOMGrid.append(gridColumn)
        


        for (let rowIndex = 9; rowIndex >= 0; rowIndex--) {
  
            const gridRow = document.createElement('div');
            gridRow.classList.add("grid-row");

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

 
                for (let rowIndex = 9; rowIndex >= 0; rowIndex--) {
                    const row = rows[rowIndex];
                    if (row) {
                

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


        
        for (let colIndex = 0; colIndex < player.board.hitMap.length; colIndex++) {
            const rows = player.board.hitMap[colIndex];

            // Board renders upside down if I don't use "nodeRowIterator".
            let nodesRowIterator = 0

            const rowNodes = playerColumns[colIndex].childNodes;


            for (let rowIndex = 9; rowIndex >= 0; rowIndex--) {
                const row = rows[rowIndex];
                if (row === "Hit") {
                   

                    rowNodes[nodesRowIterator].classList.add('ship-is-hit')


                }


                if (row === "Miss") {
                   

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

        const player1Label = document.querySelector('.player1-label');

        const player2Label = document.querySelector('.player2-label');

        const currentPlayerTurn = turnState.getTurn();



        
        if (isPlayer === currentPlayerTurn) {


            updateHeader("Not your own board!");
            return
        }


        const x = columnIndex
        const y = rowIndex;
      

     

        if (player.board.hitMap[x][y] === "Miss" || player.board.hitMap[x][y] === "Hit") {
          

            updateHeader("Grid already chosen");
            return;
        }




        

        const result = player.board.receiveAttack(x,y);

        const letterArrayX = ["A","B","C","D","E","F","G","H","I","J"];

        const numberArrayY = [10,9,8,7,6,5,4,3,2,1]
        if (currentPlayerTurn === "player1") {

            // Create new div for pass the device msg?
            passDeviceMsg.textContent = `It's a ${result.toUpperCase()}! \r\n Pass the device to Player 2`;

            if (player.type === "real") {

                player1Label.classList.remove('show-turn');

                player2Label.classList.add('show-turn');
                
            }

            

            

            
            updateHeader(`Player 1 chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toUpperCase()}`);

        }

        if (currentPlayerTurn === "player2") {

            passDeviceMsg.textContent = `It's a ${result.toUpperCase()}! \r\n Pass the device to Player 1`;


            if (player.type === "real") {

                player1Label.classList.add('show-turn');

                player2Label.classList.remove('show-turn');
            }

            


            updateHeader(`Player 2 chose ${letterArrayX[x]}${numberArrayY[y]} and it's a ${result.toUpperCase()}`);

        }

        if (player.type === "real") {
            passDeviceDiv.classList.add('show-pass-device');
        }

        
        

        turnState.updateTurn();

        if (player.board.ownGrid[x][y]) {
  
            grid.classList.add('ship-is-hit')
         
     
            return
        }

        grid.classList.add('attack-missed');

        
    })
}

export{
    populatePlayerBoard,
    gameStart
}