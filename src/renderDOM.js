
function createDOM () {

    const body = document.querySelector('body');

    const startMenu = document.createElement('div');
    startMenu.classList.add('start-menu');
    body.append(startMenu);
    

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

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('header-div');
        headerDiv.textContent = 'Player 1 goes first'
        mainContainer.append(headerDiv);

        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player-div');
        mainContainer.append(playerDiv);

        const footerDiv = document.createElement('div');
        footerDiv.classList.add('footer-div');
        mainContainer.append(footerDiv);



    





    const player1Div = document.createElement('div');
    player1Div.classList.add('player1-div');
    playerDiv.append(player1Div);
    // player1Div.textContent = "Player 1";

        const player1Grid = document.createElement('div');
        player1Grid.classList.add('player1-grid');
        player1Div.append(player1Grid);

        const player1Label = document.createElement('div');
        player1Label.classList.add('player1-label');
        player1Label.textContent = "Player 1"
        player1Div.append(player1Label)

    const player2Div = document.createElement('div');
    player2Div.classList.add('player2-div');
    playerDiv.append(player2Div)
    // player2Div.textContent = "Player 2";

        const player2Grid = document.createElement('div');
        player2Grid.classList.add('player2-grid');
        player2Div.append(player2Grid);

        const player2Label = document.createElement('div');
        player2Label.classList.add('player2-label');
        player2Label.textContent = "Player 2"
        player2Div.append(player2Label)


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

