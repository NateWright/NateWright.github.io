import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/team.model';

@Component({
  selector: 'app-swiss-team',
  templateUrl: './swiss-team.component.html',
  styleUrls: ['./swiss-team.component.scss']
})
export class SwissTeamComponent implements OnInit {
  @Input() team: Team = new Team();

  constructor() {
  }

  ngOnInit(): void {
  }

}
