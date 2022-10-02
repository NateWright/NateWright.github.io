import { Component, OnInit, ViewChild } from '@angular/core';
import { SwissMatchup, SwissTeam, SwissToSingleService } from '../swiss-to-single.service';
import { TeamDbService } from 'src/app/team-db.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormArray, FormBuilder } from '@angular/forms';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';

@Component({
  selector: 'app-swiss-stage',
  templateUrl: './swiss-stage.component.html',
  styleUrls: ['./swiss-stage.component.scss']
})
export class SwissStageComponent implements OnInit {
  @ViewChild(MatTable) teamTable!: MatTable<any>;
  // displayedColumns: string[] = ['seed', 'teamName', 'Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5']
  displayedColumns: string[] = ['seed', 'teamName', 'Round 1']
  displayedColumnsRound1: string[] = ['team1', 'score1', 'score2', 'team2']
  teams = new MatTableDataSource<SwissTeam>([]);
  round1MatchUps = new MatTableDataSource<SwissMatchup>([]);
  round2High = new MatTableDataSource<SwissMatchup>([]);
  round2Low = new MatTableDataSource<SwissMatchup>([]);

  round1 = this.fb.group({
    matchups: this.fb.array([])
  });



  constructor(public swissToSingleSrv: SwissToSingleService, public teamsDb: TeamDbService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.teams.data = this.swissToSingleSrv.getSwissTeams().sort((a: SwissTeam, b: SwissTeam) => {
      return this.sortFunction(a, b);
    });
    this.round1MatchUps.data = this.swissToSingleSrv.getRound1Matchups();
    this.round2High.data = this.swissToSingleSrv.round2High.slice();
    this.round2Low.data = this.swissToSingleSrv.round2Low.slice();
  }

  get round1matchups() {
    return this.round1.get('matchups') as FormArray;
  }

  refreshData() {
    this.teams.data = []
    this.teams.data = this.swissToSingleSrv.getSwissTeams().sort((a: SwissTeam, b: SwissTeam) => {
      return this.sortFunction(a, b);
    });
    this.round1MatchUps.data = this.swissToSingleSrv.getRound1Matchups();
  }

  initiateRound2() {
    this.swissToSingleSrv.generateRound2();
    this.round2High.data = this.swissToSingleSrv.round2High.slice();
    this.round2Low.data = this.swissToSingleSrv.round2Low.slice();
  }

  sortFunction(a: SwissTeam, b: SwissTeam): number {

    for (let i = 0; i < a.swissMatchup.length; i++) {
      let team1W = this.checkWinLoss(a.teamIndex, a.swissMatchup[i]);
      let team2W = this.checkWinLoss(b.teamIndex, b.swissMatchup[i]);

      if (team1W && team2W) {
      } else if (team1W) {
        return -1;
      }
      else if (team2W) {
        return 1;
      }
    }
    return this.teamsDb.getTeam(a.teamIndex).seed - this.teamsDb.getTeam(b.teamIndex).seed;
  }

  checkWinLoss(index: number, match: SwissMatchup): boolean {
    return index === match.team1 ? match.team1Wins > match.team2Wins : match.team1Wins < match.team2Wins;
  }
}


