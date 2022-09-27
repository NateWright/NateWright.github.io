import { Team } from "./team.model";

export class Opponent {
    public opponentSeed: number;
    public wins: number;
    public losses: number;

    constructor(opponentSeed: number, wins = 0, losses = 0) {
        this.opponentSeed = opponentSeed;
        this.wins = wins;
        this.losses = losses;
    }
}