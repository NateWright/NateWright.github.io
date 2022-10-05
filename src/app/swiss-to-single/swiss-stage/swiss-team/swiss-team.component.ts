import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team.model';
import { TeamDbService } from 'src/app/team-db.service';

@Component({
  selector: 'app-swiss-team',
  templateUrl: './swiss-team.component.html',
  styleUrls: ['./swiss-team.component.scss']
})
export class SwissTeamComponent implements OnInit {
  @Input() id!: number;
  team = new Team();

  constructor(private teamDb: TeamDbService) {
  }

  ngOnInit(): void {
    this.team = this.teamDb.getTeam(this.id);
  }

}
