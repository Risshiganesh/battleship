import{ createShip } from './shipFactory';


describe('Test ship factory',function () {
    

    test('Has length, totalHits and sunk properties',function () {
        const ship1 = createShip(3);
        expect(ship1.getLength()).toBe(3);
        expect(ship1.getHits()).toBe(0);
        expect(ship1.isSunk()).toBe(false)
        
    })
    
    test('hit() function works',function () {
        const ship2 = createShip(3);
        ship2.hit()
        expect(ship2.getHits()).toEqual(1)
    })

    test('isSunk() function works', function(){
        const ship3 = createShip(2);
        ship3.hit();
        ship3.hit();
        expect(ship3.isSunk()).toBe(true)
    })
})

