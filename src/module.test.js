import { module } from "./module";

describe('Module test', ()=>{
    test('Should return true',function () {
        expect(module()).toBe(true)
    },)
})