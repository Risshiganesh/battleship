import {createGameboard} from './gameboardFactory';

describe('Test gameboard factory',function () {
    const gameboard = createGameboard()
    

    test('Gameboard is an array', function () {
        expect(Array.isArray(gameboard.ownGrid)).toBe(true)
    });

    test('Gameboard row size: 10',function () {
        
        expect(gameboard.ownGrid.length).toBe(10);
        
    });

    test("Gameboard column size: 10", function () {
        
        let tenColumns = true
        const rows = gameboard.ownGrid;


        for (let index = 0; index < rows.length; index++) {
            const row = rows[index];
            // console.debug("row", row)
            if (row.length !== 10) {
                tenColumns = false;
                break;
            }

        }

        expect(tenColumns).toBe(true);

    })

    test("Call placeShip() function with ship factory function", function () {
        expect(gameboard.placeShip(x,y,`mock function???? createShip()`)).toBeCalledWith();
        // update tests and code to make sure it creates column first and the rows, now it's the other way round.
    })


})