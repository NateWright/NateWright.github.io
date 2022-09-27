import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team.model';
import { SwissTeam } from '../swiss-team.model';

@Component({
  selector: 'app-swiss-team',
  templateUrl: './swiss-team.component.html',
  styleUrls: ['./swiss-team.component.scss']
})
export class SwissTeamComponent implements OnInit {
  @Input() team: SwissTeam;

  constructor() {
    this.team = new SwissTeam();
  }

  ngOnInit(): void {
  }

}
