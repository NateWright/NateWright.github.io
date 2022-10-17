import { Component, Input, OnInit } from '@angular/core';
import { Matchup } from 'src/app/shared/matchup.model';
import { Team } from 'src/app/shared/team.model';
import { TeamDbService } from 'src/app/team-db.service';

@Component({
  selector: 'app-swiss-opponent',
  templateUrl: './swiss-opponent.component.html',
  styleUrls: ['./swiss-opponent.component.scss']
})
export class SwissOpponentComponent implements OnInit {
  @Input() teamIndex!: number;
  @Input() matchup!: Matchup;
  opponent: number = 0;
  wins: number = 0;
  losses: number = 0;
  opponentTeam: Team = new Team();
  constructor(private teamDb: TeamDbService) {
  }

  ngOnInit(): void {
    this.opponent = this.teamIndex === this.matchup.team1 ? this.matchup.team2 : this.matchup.team1;
    this.wins = this.teamIndex === this.matchup.team1 ? this.matchup.team1Wins : this.matchup.team2Wins
    this.losses = this.teamIndex === this.matchup.team1 ? this.matchup.team2Wins : this.matchup.team1Wins
    this.opponentTeam = this.teamDb.getTeam(this.opponent);
  }

}
