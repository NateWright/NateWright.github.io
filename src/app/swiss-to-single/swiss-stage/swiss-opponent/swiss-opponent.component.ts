import { Component, Input, OnInit } from '@angular/core';
import { Opponent } from 'src/app/shared/opponent.model';
import { Team } from 'src/app/shared/team.model';
import { TeamDbService } from 'src/app/team-db.service';

@Component({
  selector: 'app-swiss-opponent',
  templateUrl: './swiss-opponent.component.html',
  styleUrls: ['./swiss-opponent.component.scss']
})
export class SwissOpponentComponent implements OnInit {
  @Input() opponent: Opponent = new Opponent(0);
  opponentTeam: Team | undefined;
  constructor(private teamDbService: TeamDbService) {
  }

  ngOnInit(): void {
    this.opponentTeam = this.teamDbService.getTeam(this.opponent.opponentSeed);
  }

}
