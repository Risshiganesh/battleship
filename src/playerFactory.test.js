import { createPlayer } from "./playerFactory";
import { createGameboard } from "./gameboardFactory";


describe("createPlayer returns two types of players", function () {
    test("createPlayer returns real player", function () {
        expect(createPlayer("real").type).toBe("real")
    })

    test("createPlayer returns computer player", function () {
        expect(createPlayer("computer").type).toBe("computer")
    })

    test("createPlayer does not accept any other type input", function(){
        expect(createPlayer("unknown")).toBe("Invalid_input")
    })


    test("playerObject has its own gameboard", function () {
        const gameboard = createGameboard()
        expect(createPlayer("real").board.ownGrid).toEqual(gameboard.ownGrid)
    })


    // How to test real players and computer players?
})