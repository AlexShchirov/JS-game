export class Game {
    #state = GAME_STATUSES.PENDING;
    #googlePosition = { x: 1, y: 1 };

    #jumpGoogle() {
        this.#googlePosition = { x: 2, y: 2 };
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