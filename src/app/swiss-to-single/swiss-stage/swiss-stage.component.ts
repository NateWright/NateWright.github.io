import { Component, OnInit } from '@angular/core';
import { SwissToSingleService } from '../swiss-to-single.service';
import { MatTableDataSource } from '@angular/material/table';
import { SwissTeam } from 'src/app/shared/swiss-team.model';
import { SwissMatchup } from 'src/app/shared/swiss-matchup.model';

@Component({
  selector: 'app-swiss-stage',
  templateUrl: './swiss-stage.component.html',
  styleUrls: ['./swiss-stage.component.scss']
})
export class SwissStageComponent implements OnInit {
  // displayedColumns: string[] = ['seed', 'teamName', 'Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5']
  displayedColumns: string[] = ['seed', 'teamName', 'Round 1']
  teamsUnsorted: SwissTeam[] = []
  teams = new MatTableDataSource<SwissTeam>([]);

  round1 = new MatTableDataSource<SwissMatchup>([]);

  round2High = new MatTableDataSource<SwissMatchup>([]);
  round2Low = new MatTableDataSource<SwissMatchup>([]);
  round2HighValid = false;
  round2LowValid = false;

  round3High = new MatTableDataSource<SwissMatchup>([]);
  round3Mid = new MatTableDataSource<SwissMatchup>([]);
  round3Low = new MatTableDataSource<SwissMatchup>([]);
  round3HighValid = false;
  round3MidValid = false;
  round3LowValid = false;

  round4High = new MatTableDataSource<SwissMatchup>([]);
  round4Low = new MatTableDataSource<SwissMatchup>([]);
  round4HighValid = false;
  round4LowValid = false;

  round5 = new MatTableDataSource<SwissMatchup>([]);

  constructor(public swissToSingleSrv: SwissToSingleService) {

  }

  ngOnInit(): void {
    this.teamsUnsorted = this.swissToSingleSrv.getTeams()
    this.teams.data = this.swissToSingleSrv.getTeams().sort(SwissTeam.sortFunctionAllMatches);

    this.round1.data = this.swissToSingleSrv.round1
  }

  resetTable() {
    this.teams = new MatTableDataSource<SwissTeam>([]);
    this.round1 = new MatTableDataSource<SwissMatchup>([]);

    this.round2High = new MatTableDataSource<SwissMatchup>([]);
    this.round2Low = new MatTableDataSource<SwissMatchup>([]);
    this.round2HighValid = false;
    this.round2LowValid = false;

    this.round3High = new MatTableDataSource<SwissMatchup>([]);
    this.round3Mid = new MatTableDataSource<SwissMatchup>([]);
    this.round3Low = new MatTableDataSource<SwissMatchup>([]);
    this.round3HighValid = false;
    this.round3MidValid = false;
    this.round3LowValid = false;

    this.round4High = new MatTableDataSource<SwissMatchup>([]);
    this.round4Low = new MatTableDataSource<SwissMatchup>([]);
    this.round4HighValid = false;
    this.round4LowValid = false;

    this.round5 = new MatTableDataSource<SwissMatchup>([]);
  }

  refreshData() {
    this.teams.data = []
    this.teams.data = this.swissToSingleSrv.getTeams().sort(SwissTeam.sortFunctionAllMatches);
    this.round2High.data = this.swissToSingleSrv.round2High;
    this.round2Low.data = this.swissToSingleSrv.round2Low;
  }

  initiateRound2(valid: boolean) {
    if (!valid) {
      return;
    }
    this.swissToSingleSrv.generateRound2();
    this.round2High.data = this.swissToSingleSrv.round2High;
    this.round2Low.data = this.swissToSingleSrv.round2Low;
    if (this.displayedColumns.length < 4) {
      this.displayedColumns.push('Round 2')
    }
    this.refreshData()
  }
  round2H(b: boolean) {
    this.round2HighValid = b;
    this.initiateRound3();
  }
  round2L(b: boolean) {
    this.round2LowValid = b;
    this.initiateRound3();
  }
  initiateRound3() {
    if (this.round2HighValid && this.round2LowValid) {
      this.swissToSingleSrv.generateRound3()
      this.round3High.data = this.swissToSingleSrv.round3High
      this.round3Mid.data = this.swissToSingleSrv.round3Mid
      this.round3Low.data = this.swissToSingleSrv.round3Low
      if (this.displayedColumns.length < 5) {
        this.displayedColumns.push('Round 3')
      }
      this.refreshData()
    }
  }

  round3H(b: boolean) {
    this.round3HighValid = b
    this.initiateRound4()
  }
  round3M(b: boolean) {
    this.round3MidValid = b
    this.initiateRound4()
  }
  round3L(b: boolean) {
    this.round3LowValid = b
    this.initiateRound4()
  }
  initiateRound4() {
    if (this.round3HighValid && this.round3MidValid && this.round3LowValid) {
      this.swissToSingleSrv.generateRound4()
      this.round4High.data = this.swissToSingleSrv.round4High
      this.round4Low.data = this.swissToSingleSrv.round4Low
      if (this.displayedColumns.length < 6) {
        this.displayedColumns.push('Round 4')
      }
      this.refreshData()
    }
  }
  round4H(b: boolean) {
    this.round4HighValid = b;
    this.initiateRound5();
  }
  round4L(b: boolean) {
    this.round4LowValid = b;
    this.initiateRound5();
  }
  initiateRound5() {
    if (this.round4HighValid && this.round4LowValid) {
      this.swissToSingleSrv.generateRound5()
      this.round5.data = this.swissToSingleSrv.round5
      this.refreshData()
      if (this.displayedColumns.length < 7) {
        this.displayedColumns.push('Round 5')
      }
    }
  }
  round5Val(b: boolean) {
    if (b) {
      this.refreshData();
    }
  }

  testButton() {
    console.log(this.swissToSingleSrv.getTeams()[3])
  }
}
