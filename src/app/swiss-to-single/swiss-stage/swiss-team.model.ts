import { Opponent } from "src/app/shared/opponent.model";
import { Team } from "src/app/shared/team.model";

export class SwissTeam {
    team: Team;
    opponents: Opponent[];

    constructor(team = new Team()) {
        this.team = team;
        this.opponents = [];
    }
}