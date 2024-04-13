function createGameboard(){
    const ownGrid = [];

    function createOwnGrid () {

        const columns = []

        columns.length = 10;

        const gridSize = 10;

        for (let index = 0; index < gridSize - 1; index++) {
            ownGrid[index] = columns
        }

        ownGrid.push(columns)

        // should each grid have an object with coords? x and y?
    }
    
    createOwnGrid()

    return {
        ownGrid
    }

}

export{
    createGameboard
}