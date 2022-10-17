import { Matchup } from "./matchup.model";

export class SwissTeam {
    teamIndex: number;
    swissMatchup: Matchup[] = [];
    gameDiff: number = 0;
    teamBlacklist: number[] = []

    constructor(index: number, swissMatchups: Matchup[]) {
        this.teamIndex = index;
        this.swissMatchup = swissMatchups;
    }

    update() {
        this.gameDiff = 0;
        if (this.swissMatchup.length <= 0) return;
        for (let m of this.swissMatchup) {
            this.gameDiff += Matchup.checkWinDiff(this.teamIndex, m)
        }
        const matchup = this.swissMatchup[this.swissMatchup.length - 1]
        const [a, b] = Matchup.teamWon(matchup)
        if (this.teamIndex == a) {
            this.teamBlacklist.push(b)
        } else {
            this.teamBlacklist.push(a)
        }
    }

    static sortFunctionAllMatches(a: SwissTeam, b: SwissTeam): number {
        let team1Wins = 0;
        let team1Losses = 0;
        let team2Wins = 0;
        let team2Losses = 0;
        for (let swissMatchup of a.swissMatchup) {
            if (Matchup.checkWin(a.teamIndex, swissMatchup)) {
                team1Wins++;
            } else {
                team1Losses++;
            }
        }
        for (let swissMatchup of b.swissMatchup) {
            if (Matchup.checkWin(b.teamIndex, swissMatchup)) {
                team2Wins++;
            } else {
                team2Losses++;
            }
        }
        if (team1Wins > team2Wins || team1Losses < team2Losses) {
            return -1;
        }
        if (team1Wins < team2Wins || team1Losses > team2Losses) {
            return 1;
        }

        const team1Dif = a.gameDiff
        const team2Dif = b.gameDiff
        if (team1Dif > team2Dif) {
            return -1;
        }
        if (team2Dif > team1Dif) {
            return 1;
        }

        // return a.teamIndex - b.teamIndex;
        return a.teamIndex - b.teamIndex;
    }

    static sortFunctionSwissRound(a: SwissTeam, b: SwissTeam): number {
        const team1Win = Matchup.checkWin(a.teamIndex, a.swissMatchup[a.swissMatchup.length - 1])
        const team2Win = Matchup.checkWin(b.teamIndex, b.swissMatchup[b.swissMatchup.length - 1])
        if (!team1Win && team2Win) {
            return -1;
        }
        if (!team2Win && team1Win) {
            return 1;
        }
        // const team1Dif = Matchup.checkWinDiff(a.teamIndex, a.swissMatchup[a.swissMatchup.length - 1]);
        // const team2Dif = Matchup.checkWinDiff(b.teamIndex, b.swissMatchup[b.swissMatchup.length - 1]);
        const team1Dif = a.gameDiff
        const team2Dif = b.gameDiff

        if (team1Dif > team2Dif) {
            return -1;
        }
        if (team2Dif > team1Dif) {
            return 1;
        }

        return a.teamIndex - b.teamIndex;
    }
}