import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SwissTeam } from 'src/app/shared/swiss-team.model';
import { TeamDbService } from 'src/app/team-db.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  @Input() teams!: MatTableDataSource<SwissTeam>;
  @Input() displayedColumns: string[] = ['seed', 'teamName', 'Round 1']

  constructor(public teamDb: TeamDbService) { }

  ngOnInit(): void {
  }

}
