function createGameboard(){
    const ownGrid = [];

    function createOwnGrid () {

        

        const gridSize = 10;

        for (let index = 0; index < gridSize; index++) {
            const rows = []
            rows.length = 10;

            ownGrid[index] = rows
        }

        // ownGrid.push(rows)

        // should each grid have an object with coords? x and y?
    }



    function placeShip (coordinates, direction, shipObject) {


        const potentialCoords = getCoordinates(coordinates, direction, shipObject)

        let placementMsg = "Placement_success"

        
        if (!potentialCoords.validity) {
            placementMsg = "Placement_failed"
            return placementMsg
        }

        // This is problematic
        potentialCoords.potentialCoordinates.forEach(coords => {

            ownGrid[coords[0]][coords[1]] = shipObject;


        });
  

       return placementMsg
        
    }
    
    createOwnGrid()

    return {
        ownGrid,
        placeShip
    }



}


function getCoordinates (coordinates, direction, shipObject) {

    let validity = true;

    const potentialCoordinates = []

    
    if (coordinates.x < 0 || coordinates.y < 0 || coordinates.x > 9 || coordinates.y > 9 ) {
            
        validity = false

        return validity

    }

    for (let index = 0; index < shipObject.getLength(); index++) {

        
        let xcoords;
        let ycoords;

        if (direction === "north") {
            xcoords = coordinates.x
            ycoords = coordinates.y - index;

            
        }
        if (direction === "south") {

            xcoords = coordinates.x
            ycoords = coordinates.y + index;

        }
        if (direction === "east") {

            xcoords = coordinates.x + index;
            ycoords = coordinates.y; 

            
        }
        if (direction === "west") {
            xcoords = coordinates.x - index;
            ycoords = coordinates.y; 

        }

        if (xcoords < 0 || ycoords < 0 || xcoords > 9 || ycoords > 9 ) {
            
            validity = false

        }

        potentialCoordinates.push([xcoords,ycoords])
        
    }


    return {
    
        validity,
        potentialCoordinates
    }
}


export{
    createGameboard,
    getCoordinates
}