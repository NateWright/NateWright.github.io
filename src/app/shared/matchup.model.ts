export class Matchup {
    public team1: number;
    public team2: number;
    public team1Wins: number;
    public team2Wins: number;
    constructor(team1 = -1, team2 = -1, team1Wins = 0, team2Wins = 0) {
        this.team1 = team1;
        this.team2 = team2;
        this.team1Wins = team1Wins;
        this.team2Wins = team2Wins;
    }

    isValid(): boolean {
        return (this.team1Wins > this.team2Wins || this.team1Wins < this.team2Wins) && (this.team1Wins === 3 || this.team2Wins === 3)
    }

    static checkWin(index: number, match: Matchup): boolean {
        return Matchup.checkWinDiff(index, match) > 0;
    }

    static checkWinDiff(index: number, match: Matchup) {
        return index === match.team1 ? match.team1Wins - match.team2Wins : match.team2Wins - match.team1Wins;
    }
    static teamWon(match: Matchup) {
        if (match.team1Wins > match.team2Wins) {
            return [match.team1, match.team2]
        }
        return [match.team2, match.team1]
    }
}