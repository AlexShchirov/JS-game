export class Game {
    #state ;
    #googlePosition;
    #numberUtil

    constructor(numberUtil){
        this.#state = GAME_STATUSES.PENDING;
        this.#googlePosition = {x : 1, y : 1}
        this.#numberUtil = numberUtil
    }

    #jumpGoogle() {
        this.#googlePosition = { 
            x: this.#numberUtil.getRandomNumber(0, 5), 
            y: this.#numberUtil.getRandomNumber(0, 5) 
        };
    }

    // getter
    async getStatus() {
        return this.#state;
    }

    async start() {
        setInterval(() => {
            this.#jumpGoogle.bind(this)();
        }, 2000);
        this.#state = GAME_STATUSES.IN_PROGRESS;
    }

    async getGooglePosition() {
        return this.#googlePosition;
    }
}

export const GAME_STATUSES = {
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS',
    FINISHED: 'FINISHED'
};