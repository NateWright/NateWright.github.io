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
  teamsSorted = new MatTableDataSource<SwissTeam>([]);

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
    let teams = this.swissToSingleSrv.getTeams()
    teams.forEach((value, index) => {
      this.teamsUnsorted.push(new SwissTeam(index, []));
    })
    this.teamsSorted.data = this.teamsUnsorted.slice().sort(SwissTeam.sortFunctionAllMatches);
    this.initiateBracket();
  }

  resetTable() {
    this.teamsUnsorted = [];
    this.teamsSorted = new MatTableDataSource<SwissTeam>([]);
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
    let teams = this.teamsSorted.data.slice().sort(SwissTeam.sortFunctionAllMatches);
    this.teamsSorted.data = []
    this.teamsSorted.data = teams
  }

  initiateBracket() {
    this.round1.data = this.fillTeams(this.teamsUnsorted)
  }

  generateRound2() {
    for (let t of this.teamsUnsorted) {
      t.swissMatchup = t.swissMatchup.slice(0, 1)
      t.update()
    }

    let teamsHigh: SwissTeam[] = []
    let teamsLow: SwissTeam[] = []
    for (let m of this.round1.data) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsHigh.push(this.teamsUnsorted[a]);
      teamsLow.push(this.teamsUnsorted[b]);
    }

    teamsHigh.sort(SwissTeam.sortFunctionSwissRound)
    teamsLow.sort(SwissTeam.sortFunctionSwissRound)

    this.round2High.data = this.fillTeams(teamsHigh);
    this.round2Low.data = this.fillTeams(teamsLow);
  }

  initiateRound2(valid: boolean) {
    if (!valid) {
      return;
    }
    this.generateRound2()
    if (this.displayedColumns.length < 4) {
      this.displayedColumns.push('Round 2')
    }
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
      this.generateRound3()
      if (this.displayedColumns.length < 5) {
        this.displayedColumns.push('Round 3')
      }
      this.refreshData()
    }
  }

  generateRound3() {
    for (let t of this.teamsUnsorted) {
      t.swissMatchup = t.swissMatchup.slice(0, 2)
      t.update()
    }
    let teamsHigh: SwissTeam[] = []
    let teamsMid: SwissTeam[] = []
    let teamsLow: SwissTeam[] = []
    for (let m of this.round2High.data) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsHigh.push(this.teamsUnsorted[a]);
      teamsMid.push(this.teamsUnsorted[b]);
    }
    for (let m of this.round2Low.data) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsMid.push(this.teamsUnsorted[a]);
      teamsLow.push(this.teamsUnsorted[b]);
    }

    teamsHigh.sort(SwissTeam.sortFunctionSwissRound)
    teamsMid.sort(SwissTeam.sortFunctionSwissRound)
    teamsLow.sort(SwissTeam.sortFunctionSwissRound)

    this.round3High.data = this.fillTeams(teamsHigh)
    this.round3Mid.data = this.fillTeams(teamsMid)
    this.round3Low.data = this.fillTeams(teamsLow)
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
      this.generateRound4()
      if (this.displayedColumns.length < 6) {
        this.displayedColumns.push('Round 4')
      }
      this.refreshData()
    }
  }

  generateRound4() {
    for (let t of this.teamsUnsorted) {
      t.swissMatchup = t.swissMatchup.slice(0, 3)
      t.update()
    }
    let teamsHigh: SwissTeam[] = []
    let teamsLow: SwissTeam[] = []

    for (let m of this.round3High.data) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsHigh.push(this.teamsUnsorted[b]);
    }
    for (let m of this.round3Mid.data) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsHigh.push(this.teamsUnsorted[a]);
      teamsLow.push(this.teamsUnsorted[b]);
    }
    for (let m of this.round3Low.data) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsLow.push(this.teamsUnsorted[a]);
    }

    teamsHigh.sort(SwissTeam.sortFunctionSwissRound)
    teamsLow.sort(SwissTeam.sortFunctionSwissRound)

    this.round4High.data = this.fillTeams(teamsHigh)
    this.round4Low.data = this.fillTeams(teamsLow)
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
      this.generateRound5()
      this.refreshData()
      if (this.displayedColumns.length < 7) {
        this.displayedColumns.push('Round 5')
      }
    }
  }
  generateRound5() {
    for (let t of this.teamsUnsorted) {
      t.swissMatchup = t.swissMatchup.slice(0, 4)
      t.update()
    }

    let teams: SwissTeam[] = []

    for (let m of this.round4High.data) {
      const [a, b] = SwissMatchup.teamWon(m)
      teams.push(this.teamsUnsorted[b]);
    }
    for (let m of this.round4Low.data) {
      const [a, b] = SwissMatchup.teamWon(m)
      teams.push(this.teamsUnsorted[a]);
    }
    teams.sort(SwissTeam.sortFunctionSwissRound)

    this.round5.data = this.fillTeams(teams)
  }
  round5Val(b: boolean) {
    if (b) {
      this.refreshData();
      let teams: number[] = []
      for (let t of this.teamsSorted.data.slice(0, 8)) {
        teams.push(t.teamIndex)
      }
      this.swissToSingleSrv.setTop8(teams)
    }
  }

  testButton() {
  }

  fillTeams(teamsArr: SwissTeam[]): SwissMatchup[] {
    let swissArr: SwissMatchup[] = [];
    let func = (teamsArr: SwissTeam[]): SwissMatchup[] | undefined => {
      if (teamsArr.length < 1) {
        return [];
      }

      let team1Index = teamsArr[0].teamIndex;

      for (var i = 0; i < teamsArr.length - 1; i++) {
        let team2Index = teamsArr[teamsArr.length - 1 - i].teamIndex;

        if (this.teamsUnsorted[team2Index].teamBlacklist.find((element) => { return element == team1Index }) !== undefined) { continue; }

        let arr = func(teamsArr.slice(1, teamsArr.length - 1 - i).concat(teamsArr.slice(teamsArr.length - i)))

        if (arr === undefined) { continue; }

        let temp = [new SwissMatchup(team1Index, team2Index)]
        temp.push(...arr);
        return temp;
      }
      return undefined;
    }

    let matchups = func(teamsArr);

    if (matchups === undefined) {
      console.log("matchups undefined")
      for (var i = 0; i < teamsArr.length / 2; i++) {
        let team1Index = teamsArr[i].teamIndex;
        let team2Index = teamsArr[teamsArr.length - 1 - i].teamIndex;
        let match = new SwissMatchup(team1Index, team2Index)
        swissArr[i] = match;
        this.teamsUnsorted[team1Index].swissMatchup.push(match);
        this.teamsUnsorted[team2Index].swissMatchup.push(match);
      }
    } else {
      swissArr = matchups
      for (let match of swissArr) {
        let team1Index = match.team1;
        let team2Index = match.team2;
        match.team1Wins = 3

        this.teamsUnsorted[team1Index].swissMatchup.push(match);
        this.teamsUnsorted[team2Index].swissMatchup.push(match);
      }
    }
    return swissArr;

  }
}
