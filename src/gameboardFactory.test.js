import {createGameboard, getCoordinates} from './gameboardFactory';
import { createShip } from './shipFactory';

describe('Test gameboard factory',function () {
    const gameboard = createGameboard()
    

    test('Gameboard is an array', function () {
        expect(Array.isArray(gameboard.ownGrid)).toBe(true)
    });

    test('Gameboard column size: 10',function () {
        
        expect(gameboard.ownGrid.length).toBe(10);
        
    });

    test("Gameboard row size: 10", function () {
        
        let tenRows = true
        const columns = gameboard.ownGrid;


        for (let index = 0; index < columns.length; index++) {
            const column = columns[index];

            if (column.length !== 10) {
                tenRows = false;
                break;
            }

        }

        expect(tenRows).toBe(true);

    })

    

    


    

})

// Test this method with ships facing at different directions and different ship size.

describe("Test gameboard's placeShip method", function () {

    

    describe("Test placeShip() if direction is north", function() {

        test("North with coordinates = x: 0, y: 0", function () {

            const gameboard = createGameboard()
            
            const coordinates = {
                x: 0,
                y: 0
            }
    
            const direction = "north";
    
            const shipObject = createShip(3)
    
            
    
            gameboard.placeShip(coordinates,direction,shipObject)
    
    
    
            expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(undefined)
    
            // This test is failing, create the grid number filter (Do not assign object to grid if not valid coordinates).
        });

        test("North with coordinates = x: 9, y: 9", function () {

            const gameboard = createGameboard()
            
            const coordinates = {
                x: 9,
                y: 9
            }
    
            const direction = "north";
    
            const shipObject = createShip(3)
    
            
    
            gameboard.placeShip(coordinates,direction,shipObject)
    
    
    
            expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(shipObject)
    
        });

    })

    

    test("Test placeShip() if direction is south", function () {

        const gameboard = createGameboard()
        
        const coordinates = {
            x: 0,
            y: 0
        }

        const direction = "south";

        const shipObject = createShip(3);

        gameboard.placeShip(coordinates,direction,shipObject)

        expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(shipObject)
        expect(gameboard.ownGrid[coordinates.x][1]).toEqual(shipObject)
        expect(gameboard.ownGrid[coordinates.x][2]).toEqual(shipObject)
        expect(gameboard.ownGrid[coordinates.x][3]).toEqual(undefined)


       

    });


    test("Test placeShip() if direction is east", function () {

        const gameboard = createGameboard()
        
        const coordinates = {
            x: 0,
            y: 0
        }

        const direction = "east";

        const shipObject = createShip(3);

        gameboard.placeShip(coordinates,direction,shipObject)

        expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(shipObject)
        expect(gameboard.ownGrid[1][coordinates.y]).toEqual(shipObject)
        expect(gameboard.ownGrid[2][coordinates.y]).toEqual(shipObject)
        expect(gameboard.ownGrid[3][coordinates.y]).toEqual(shipObject)


       

    });


    test("Test placeShip() if direction is west", function () {

        const gameboard = createGameboard()
        
        const coordinates = {
            x: 0,
            y: 0
        }

        const direction = "west";

        const shipObject = createShip(3);

        gameboard.placeShip(coordinates,direction,shipObject)

        expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(undefined)



       

    })
})


// Put this in its own describe block later

test.skip("Test receiveAttack method", function () {
        
    expect().toBe()

})


describe("Test getCoordinates function", function () {

    describe("Test if direction is north", function () {

        const direction = "north";
    
        const shipObject = createShip(3);

        const expectedValidity = {
            x0y0:false,
            x9y9:true,
            x0y9:true,
            x9y0:false,
            x5y5:true

        }
        const expectedCoords = {
            coords1: [[0,0],[0,-1],[0,-2]],
            coords2: [[9,9],[9,8],[9,7]],
            coords3: [[0,9],[0,8],[0,7]],
            coords4: [[9,0],[9,-1],[9,-2]],
            coords5: [[5,5],[5,4],[5,3]]
        }

        test("Coordinates = x:0, y:0", function () {

            const coordinates = {
                x: 0,
                y: 0
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x0y0);
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords1)
        })
    
        test("Coordinates = x:9, y:9", function () {
    
            const coordinates = {
                x: 9,
                y: 9
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x9y9)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords2)
        })
    
    
        test("Coordinates = x:0, y:9", function () {
    
            const coordinates = {
                x: 0,
                y: 9
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x0y9)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords3)
        })
    
        test("Coordinates = x:9, y:0", function () {
    
            const coordinates = {
                x: 9,
                y: 0
            }
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x9y0)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords4)
        })
    
    
        test("Coordinates = x:5, y:5", function () {
    
            const coordinates = {
                x: 5,
                y: 5
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x5y5)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords5)
        })
    
    
        
    })


    describe("Test if direction is south", function () {

        const direction = "south";
    
        const shipObject = createShip(3);

        const expectedValidity = {
            x0y0:true,
            x9y9:false,
            x0y9:false,
            x9y0:true,
            x5y5:true

        }

        const expectedCoords = {
            coords1: [[0,0],[0,1],[0,2]],
            coords2: [[9,9],[9,10],[9,11]],
            coords3: [[0,9],[0,10],[0,11]],
            coords4: [[9,0],[9,1],[9,2]],
            coords5: [[5,5],[5,6],[5,7]]
        }

        test("Coordinates = x:0, y:0", function () {

            const coordinates = {
                x: 0,
                y: 0
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x0y0);
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords1)
        })
    
        test("Coordinates = x:9, y:9", function () {
    
            const coordinates = {
                x: 9,
                y: 9
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x9y9)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords2)
        })
    
    
        test("Coordinates = x:0, y:9", function () {
    
            const coordinates = {
                x: 0,
                y: 9
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x0y9)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords3)
        })
    
        test("Coordinates = x:9, y:0", function () {
    
            const coordinates = {
                x: 9,
                y: 0
            }
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x9y0);
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords4)
        })
    
    
        test("Coordinates = x:5, y:5", function () {
    
            const coordinates = {
                x: 5,
                y: 5
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x5y5);
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords5)
        })
    
    
        
    })



    describe("Test if direction is east", function () {

        const direction = "east";
    
        const shipObject = createShip(3);

        const expectedValidity = {
            x0y0:true,
            x9y9:false,
            x0y9:true,
            x9y0:false,
            x5y5:true

        }

        const expectedCoords = {
            coords1: [[0,0],[1,0],[2,0]],
            coords2: [[9,9],[10,9],[11,9]],
            coords3: [[0,9],[1,9],[2,9]],
            coords4: [[9,0],[10,0],[11,0]],
            coords5: [[5,5],[6,5],[7,5]]
        }

        test("Coordinates = x:0, y:0", function () {

            const coordinates = {
                x: 0,
                y: 0
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x0y0);
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords1)
        })
    
        test("Coordinates = x:9, y:9", function () {
    
            const coordinates = {
                x: 9,
                y: 9
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x9y9)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords2)
        })
    
    
        test("Coordinates = x:0, y:9", function () {
    
            const coordinates = {
                x: 0,
                y: 9
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x0y9)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords3)
        })
    
        test("Coordinates = x:9, y:0", function () {
    
            const coordinates = {
                x: 9,
                y: 0
            }
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x9y0)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords4)
        })
    
    
        test("Coordinates = x:5, y:5", function () {
    
            const coordinates = {
                x: 5,
                y: 5
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x5y5)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords5)
        })
    
    
        
    })



    describe("Test if direction is west", function () {

        const direction = "west";
    
        const shipObject = createShip(3);

        const expectedValidity = {
            x0y0:false,
            x9y9:true,
            x0y9:false,
            x9y0:true,
            x5y5:true

        }

        const expectedCoords = {
            coords1: [[0,0],[-1,0],[-2,0]],
            coords2: [[9,9],[8,9],[7,9]],
            coords3: [[0,9],[-1,9],[-2,9]],
            coords4: [[9,0],[8,0],[7,0]],
            coords5: [[5,5],[4,5],[3,5]]
        }

        test("Coordinates = x:0, y:0", function () {

            const coordinates = {
                x: 0,
                y: 0
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x0y0);
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords1)
        })
    
        test("Coordinates = x:9, y:9", function () {
    
            const coordinates = {
                x: 9,
                y: 9
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x9y9);
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords2)
        })
    
    
        test("Coordinates = x:0, y:9", function () {
    
            const coordinates = {
                x: 0,
                y: 9
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x0y9)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords3)
        })
    
        test("Coordinates = x:9, y:0", function () {
    
            const coordinates = {
                x: 9,
                y: 0
            }
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x9y0)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords4)
        })
    
    
        test("Coordinates = x:5, y:5", function () {
    
            const coordinates = {
                x: 5,
                y: 5
            }
    
            
            expect(getCoordinates(coordinates,direction,shipObject).validity).toBe(expectedValidity.x5y5)
            expect(getCoordinates(coordinates,direction,shipObject).potentialCoordinates).toEqual(expectedCoords.coords5)
        })
    
    
        
    })
    
    


})