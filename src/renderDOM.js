
function createDOM () {

    const body = document.querySelector('body');

    const startMenu = document.createElement('div');
    startMenu.classList.add('start-menu');
    startMenu.classList.add('show-start-menu');
    body.append(startMenu);

    
        const playerTitleDiv = document.createElement('div');
        playerTitleDiv.classList.add('player-title-div');
        startMenu.append(playerTitleDiv);

            const gameTitle = document.createElement('div');
            gameTitle.textContent = "BATTLESHIP"
            gameTitle.classList.add('game-title');
            playerTitleDiv.append(gameTitle);


            const playerTypeTitle = document.createElement('div');
            playerTypeTitle.classList.add('player-type-title');
            playerTypeTitle.textContent = 'Play against: Computer'
            playerTitleDiv.append(playerTypeTitle);

        const playerTypeDiv = document.createElement('div');
        playerTypeDiv.classList.add('player-type-div');
        startMenu.append(playerTypeDiv);


            const computerOption = document.createElement('button');
            computerOption.classList.add('computer-option');
            computerOption.textContent = "Computer";
            playerTypeDiv.append(computerOption);

            const realPlayerOption = document.createElement('button');
            realPlayerOption.classList.add('real-player-option');
            realPlayerOption.textContent = "Your friend";
            playerTypeDiv.append(realPlayerOption);

            

        const startButtonDiv = document.createElement('div');
        startButtonDiv.classList.add('start-button-div');
        startMenu.append(startButtonDiv);

            const startButton = document.createElement("button");
            startButton.textContent = "START!";
            startButton.classList.add('start-button');
            startButtonDiv.append(startButton);


    const passDeviceDiv = document.createElement('div');
    passDeviceDiv.classList.add('pass-device');
    body.append(passDeviceDiv);


        const passDeviceMsg = document.createElement('div');
        passDeviceMsg.classList.add('pass-device-message');
        passDeviceDiv.append(passDeviceMsg);


        const passDeviceButton = document.createElement('button');
        passDeviceButton.classList.add('pass-device-button');
        passDeviceButton.textContent = "Start turn";
        passDeviceDiv.append(passDeviceButton);

        passDeviceButton.addEventListener('click', function(e){
            e.preventDefault();
            passDeviceDiv.classList.remove('show-pass-device');

            // console.log("Test")
        })


    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    body.append(mainContainer);

        const topDiv = document.createElement('div');
        topDiv.classList.add('top-div');
        mainContainer.append(topDiv)

            const headerDiv = document.createElement('div');
            headerDiv.classList.add('header-div');
            headerDiv.textContent = 'Player 1 goes first'
            topDiv.append(headerDiv);

            const restartButton = document.createElement('button');
            restartButton.classList.add('restart-button');
            restartButton.textContent = "RESTART";
            topDiv.append(restartButton);

        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-div');
        mainContainer.append(playerDiv);

            const gameOver = document.createElement('div');
            gameOver.classList.add('game-over');
            playerDiv.append(gameOver);

        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer-div');
        mainContainer.append(footerDiv);

            const footerLink = document.createElement('a');
            footerLink.classList.add('footer-link');
            footerLink.setAttribute("href", "https://github.com/Risshiganesh/battleship");
            footerLink.textContent = "Made by Risshiganesh Villalan";
            footerDiv.append(footerLink);



    


    const xAxisOne = document.createElement('div');
    xAxisOne.classList.add('x-axis');

    const xAxisTwo = document.createElement('div');
    xAxisTwo.classList.add('x-axis');

    const xAxisArray = ["A","B","C","D","E","F","G","H","I","J"];

    xAxisArray.forEach(xLabel => {
        const newLabelOne = document.createElement('div');
        const newLabelTwo = document.createElement('div');
        newLabelOne.textContent = xLabel;
        newLabelTwo.textContent = xLabel;
        xAxisOne.append(newLabelOne);
        xAxisTwo.append(newLabelTwo);
    });




    const yAxisOne = document.createElement('div');
    yAxisOne.classList.add('y-axis');

    const yAxisTwo = document.createElement('div');
    yAxisTwo.classList.add('y-axis');

    const yAxisArray = ["1","2","3","4","5","6","7","8","9","10"];

    yAxisArray.forEach(yLabel => {
        const newLabelOne = document.createElement('div');
        const newLabelTwo = document.createElement('div');
        newLabelOne.textContent = yLabel;
        newLabelTwo.textContent = yLabel;
        yAxisOne.append(newLabelOne);
        yAxisTwo.append(newLabelTwo);
    });
    


    const player1Div = document.createElement('div');
    player1Div.classList.add('player1-div');
    playerDiv.append(player1Div);
    // player1Div.textContent = "Player 1";

        const gridContainerOne = document.createElement('div');
        gridContainerOne.classList.add('grid-container-one');
        player1Div.append(gridContainerOne);

                gridContainerOne.append(xAxisOne);
                gridContainerOne.append(yAxisOne);

                const player1Grid = document.createElement('div');
                player1Grid.classList.add('player1-grid');
                gridContainerOne.append(player1Grid);

        const player1Label = document.createElement('div');
        player1Label.classList.add('player1-label');
        player1Label.classList.add('show-turn');
        player1Label.textContent = "Player 1";
        player1Div.append(player1Label);

    const player2Div = document.createElement('div');
    player2Div.classList.add('player2-div');
    playerDiv.append(player2Div)
    // player2Div.textContent = "Player 2";

        const gridContainerTwo = document.createElement('div');
        gridContainerTwo.classList.add('grid-container-two');
        player2Div.append(gridContainerTwo);

            gridContainerTwo.append(xAxisTwo);
            gridContainerTwo.append(yAxisTwo);

            const player2Grid = document.createElement('div');
            player2Grid.classList.add('player2-grid');
            gridContainerTwo.append(player2Grid);

        const player2Label = document.createElement('div');
        player2Label.classList.add('player2-label');
        player2Label.textContent = "Player 2"
        player2Div.append(player2Label);


    // Create board div, make sure there is minimum size for height and width
}


function updateHeader (statusMessage) {
    const statusDisplay = document.querySelector('.header-div');

    statusDisplay.textContent = statusMessage
}

export {
    createDOM,
    updateHeader
}

