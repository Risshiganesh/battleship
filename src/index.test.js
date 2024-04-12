import { testFunction } from "."; 


describe('Index test', ()=>{

    test('Should return "works"', ()=>{
        expect(testFunction()).toBe("works");
    })

})