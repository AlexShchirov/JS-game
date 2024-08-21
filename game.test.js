import { Game, GAME_STATUSES } from './game.js';
import { NumberMagicUtil } from './number-magic-utill.js';


describe("Game", () =>{
    it("game should return correct Game Status 'STARTED' after start game", async () => {
        const game = new Game()

        let  status = await game.getStatus()
        expect(status).toBe(GAME_STATUSES.PENDING)

        await game.start()

        status = await game.getStatus()
        expect(status).toBe(GAME_STATUSES.IN_PROGRESS)

        
    })

    it("game should return correct Google position that changed every 2 second", async () => {
        const numberUtil = new NumberMagicUtil()
        const game = new Game(numberUtil)

        await game.start()

        let googlePosition = await game.getGooglePosition()
        expect(googlePosition).toBeDefined()

        await delay(3000)

        let googlePosition2 = await game.getGooglePosition()
        expect(googlePosition2).not.toEqual(googlePosition)
    })
})

export const delay = (ms) => new Promise((res) => setTimeout(res, ms)) 