
function createDOM () {

    const body = document.querySelector('body');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');
    body.append(mainContainer);

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('header-div');
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
    player1Div.textContent = "Player 1";

    const player2Div = document.createElement('div');
    player2Div.classList.add('player2-div');
    playerDiv.append(player2Div)
    player2Div.textContent = "Player 2";
}

export {
    createDOM
}

