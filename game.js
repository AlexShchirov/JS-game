export class Game {
    #state ;
    #googlePosition;
    #numberUtil
    #settings
//dependency injection
    constructor(numberUtil){
        this.#state = GAME_STATUSES.PENDING;
        this.#googlePosition = {x : 1, y : 1}
        this.#numberUtil = numberUtil 
        this.#settings = {
            gridSize:{
                x:3,
                y:3
            },
            jumpInterval:2000
        }
    }

    #jumpGoogle() {
        const newGooglePosition = { 
            x: this.#numberUtil.getRandomNumber(0, this.#settings.gridSize.x), 
            y: this.#numberUtil.getRandomNumber(0, this.#settings.gridSize.y) 
        };
        if(newGooglePosition.x === this.#googlePosition.x && newGooglePosition.y === this.#googlePosition.y){
            this.#jumpGoogle()
        }else{
            this.#googlePosition = newGooglePosition
        }
    }

    // getter
    async getStatus() {
        return this.#state;
    }

    async getSettings(){
        return this.#settings
    }


    async start() {
        setInterval(() => {
            this.#jumpGoogle.bind(this);
        }, this.#settings.jumpInterval);
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