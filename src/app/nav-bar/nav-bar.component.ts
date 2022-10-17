import { Component, OnInit } from '@angular/core';
import { TeamDbService } from '../team-db.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private teamsDb: TeamDbService) { }

  ngOnInit(): void {
  }

  resetTeams() {
    this.teamsDb.teams = [];
  }

}
