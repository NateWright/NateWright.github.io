import { Component, Input, OnInit } from '@angular/core';
import { Opponent } from 'src/app/shared/opponent.model';
import { Team } from 'src/app/shared/team.model';
import { TeamDbService } from 'src/app/team-db.service';
import { SwissTeam } from '../../swiss-to-single.service';

@Component({
  selector: 'app-swiss-opponent',
  templateUrl: './swiss-opponent.component.html',
  styleUrls: ['./swiss-opponent.component.scss']
})
export class SwissOpponentComponent implements OnInit {
  @Input() swissTeam: SwissTeam = { teamIndex: 0, swissMatchup: [] }
  @Input() matchup: number = 0;
  opponent: number = 0;
  wins: number = 0;
  losses: number = 0;
  opponentTeam: Team = new Team();
  constructor(private teamDb: TeamDbService) {
  }

  ngOnInit(): void {
    this.opponent = this.swissTeam.teamIndex === this.swissTeam.swissMatchup[this.matchup].team1 ? this.swissTeam.swissMatchup[this.matchup].team2 : this.swissTeam.swissMatchup[this.matchup].team1;
    this.wins = this.swissTeam.teamIndex === this.swissTeam.swissMatchup[this.matchup].team1 ? this.swissTeam.swissMatchup[this.matchup].team1Wins : this.swissTeam.swissMatchup[this.matchup].team2Wins
    this.losses = this.swissTeam.teamIndex === this.swissTeam.swissMatchup[this.matchup].team1 ? this.swissTeam.swissMatchup[this.matchup].team2Wins : this.swissTeam.swissMatchup[this.matchup].team1Wins
    this.opponentTeam = this.teamDb.getTeam(this.opponent);
  }

}
