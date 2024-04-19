import {createGameboard, getCoordinates, checkPlacementValidity} from './gameboardFactory';
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
    
            
    
            const result = gameboard.placeShip(coordinates,direction,shipObject)
    
            expect(result).toBe("Placement_failed");
    
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

    

    test("Test placeShip() if direction is south and ship length: 4", function () {

        const gameboard = createGameboard()
        
        const coordinates = {
            x: 0,
            y: 0
        }

        const direction = "south";

        const shipObject = createShip(4);

        gameboard.placeShip(coordinates,direction,shipObject)

        expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(shipObject)
        expect(gameboard.ownGrid[coordinates.x][1]).toEqual(shipObject)
        expect(gameboard.ownGrid[coordinates.x][2]).toEqual(shipObject)
        expect(gameboard.ownGrid[coordinates.x][3]).toEqual(shipObject)
        expect(gameboard.ownGrid[coordinates.x][4]).toEqual(undefined)


       

    });


    test("Test placeShip() if direction is east and ship length: 2", function () {

        const gameboard = createGameboard()
        
        const coordinates = {
            x: 0,
            y: 0
        }

        const direction = "east";

        const shipObject = createShip(2);

        gameboard.placeShip(coordinates,direction,shipObject)

        expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(shipObject)
        expect(gameboard.ownGrid[1][coordinates.y]).toEqual(shipObject)
        expect(gameboard.ownGrid[2][coordinates.y]).toEqual(undefined)
        expect(gameboard.ownGrid[3][coordinates.y]).toEqual(undefined)
        expect(gameboard.ownGrid[4][coordinates.y]).toEqual(undefined)


       

    });


    test("Test placeShip() if direction is west and ship length: 1", function () {

        const gameboard = createGameboard()
        
        const coordinates = {
            x: 0,
            y: 0
        }

        const direction = "west";

        const shipObject = createShip(1);

        gameboard.placeShip(coordinates,direction,shipObject)

        expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(shipObject)



       

    })


    test("Test placeShip() if direction is west and ship length: 6", function () {

        const gameboard = createGameboard()
        
        const coordinates = {
            x: 0,
            y: 0
        }

        const direction = "west";

        const shipObject = createShip(6);

        gameboard.placeShip(coordinates,direction,shipObject);

        expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(undefined);      

    })

    test("Test placeShip() if direction is west and ship length: 11", function () {

        const gameboard = createGameboard()
        
        const coordinates = {
            x: 9,
            y: 0
        }

        const direction = "west";

        const shipObject = createShip(11);

        gameboard.placeShip(coordinates,direction,shipObject)

        expect(gameboard.ownGrid[coordinates.x][coordinates.y]).toEqual(undefined)
        expect(gameboard.ownGrid[coordinates.x-1][coordinates.y]).toEqual(undefined)
        expect(gameboard.ownGrid[coordinates.x-2][coordinates.y]).toEqual(undefined)
        expect(gameboard.ownGrid[coordinates.x-3][coordinates.y]).toEqual(undefined)



       

    })

    
})



describe("Placement fails if ship coords overlaps a pre-existing one", function () {

    const gameboard = createGameboard()

    const direction = "north"
    
    test("If both placement is x:5, y:5", function () {
        const coordinates = {
            x: 5,
            y: 5
        }

        const shipObject1 = createShip(3);
        const shipObject2 = createShip(2)

        
        expect(gameboard.placeShip(coordinates,direction,shipObject1)).toBe("Placement_success");
        expect(gameboard.placeShip(coordinates,direction,shipObject2)).toBe("Placement_failed");
    })

    test("Placement validity function works correctly", function () {
        const coordinates = {
            x: 9,
            y: 9
        }

        const shipObject1 = createShip(3);
        // const shipObject2 = createShip(2);

        const coordsData1 = getCoordinates(coordinates,direction,shipObject1);
        // const coordsData2 = getCoordinates(coordinates,direction,shipObject2);

        expect(coordsData1.validity).toBe(true);
        // expect(coordsData2.validity).toBe(true);

        expect(checkPlacementValidity(coordsData1.validity, coordsData1.potentialCoordinates,gameboard.ownGrid)).toBe(true);
        expect(gameboard.placeShip(coordinates,direction,shipObject1)).toBe("Placement_success");

        
        expect(checkPlacementValidity(coordsData1.validity, coordsData1.potentialCoordinates,gameboard.ownGrid)).toBe(false)
       
        // expect(gameboard.placeShip(coordinates,direction,shipObject2)).toBe("Placement_failed");
    })

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

        test("Ship length is 2 and coords: x:0, y:0",function () {
            const coordinates = {
                x: 0,
                y: 0
            }

            const shorterCoords = [[0,0],[1,0]]

            const smallerShip = createShip(2)

            expect(getCoordinates(coordinates,direction,smallerShip).validity).toBe(true)
            expect(getCoordinates(coordinates,direction,smallerShip).potentialCoordinates).toEqual(shorterCoords)
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



describe("Test receiveAttack method", function () {

    const gameboard = createGameboard();
    const coordinates = {
        x: 5,
        y: 5
    }

    const ship1 = createShip(4);

    gameboard.placeShip(coordinates,"north",ship1)
    
    // Put this in its own describe block later

    test("Test if coordinates is x:0, y:0 to be a miss", function () {
            
        expect(gameboard.receiveAttack(0,0)).toBe("Miss")

    })

    
    test("Test if coordinates is x:0, y:0 returns Already Miss", function () {
            
        expect(gameboard.receiveAttack(0,0)).toBe("Already Miss")

    })


    test("Test if coordinates is x:5, y:5 to be a hit", function () {
        const result = gameboard.receiveAttack(5,5)
        expect(result).toBe("Hit");
        expect(ship1.getHits()).toBe(1)
        gameboard.receiveAttack(5,4)
        expect(ship1.getHits()).toBe(2)
        

    })

    test("If ship is sunk", function () {
        gameboard.receiveAttack(5,3)
        gameboard.receiveAttack(5,2);
        expect(ship1.isSunk()).toBe(true)
    })

    test("Coordinates is x:5, y:4 should  not a hit because already hit", function () {
            
        expect(gameboard.receiveAttack(5,4)).toBe("Already Hit")
        expect(gameboard.ownGrid[5][4].getHits()).toBe(4)

    })

    test("Test if coordinates is x:5, y:6 to be a Miss", function () {
            
        expect(gameboard.receiveAttack(5,6)).toBe("Miss")

    })

})

describe("Check if all ships sunk", function () {

    const gameboard = createGameboard();

    const coordinates = {
        coords1: [5,5],
        coords2: [3,3]
    }
    // gameboard.placeShip()
    expect()
})
