export class Opponent {
    public index: number;
    public wins: number;
    public losses: number;

    constructor(index: number, wins = 0, losses = 0) {
        this.index = index;
        this.wins = wins;
        this.losses = losses;
    }
}