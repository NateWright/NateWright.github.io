import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SwissTeam } from 'src/app/shared/swiss-team.model';
import { Matchup } from 'src/app/shared/matchup.model';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-swiss-stage',
  templateUrl: './swiss-stage.component.html',
  styleUrls: ['./swiss-stage.component.scss']
})
export class SwissStageComponent implements OnInit, OnDestroy {
  // displayedColumns: string[] = ['seed', 'teamName', 'Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5']
  @Input() loadBracket!: Subject<void>;
  @Output() teamsTop8 = new EventEmitter<number[]>();
  @Input() teamsSorted!: MatTableDataSource<SwissTeam>;
  sub!: Subscription;
  teamsUnsorted: SwissTeam[] = []

  round1 = new MatTableDataSource<Matchup>([]);

  round2High = new MatTableDataSource<Matchup>([]);
  round2Low = new MatTableDataSource<Matchup>([]);
  round2HighValid = false;
  round2LowValid = false;

  round3High = new MatTableDataSource<Matchup>([]);
  round3Mid = new MatTableDataSource<Matchup>([]);
  round3Low = new MatTableDataSource<Matchup>([]);
  round3HighValid = false;
  round3MidValid = false;
  round3LowValid = false;

  round4High = new MatTableDataSource<Matchup>([]);
  round4Low = new MatTableDataSource<Matchup>([]);
  round4HighValid = false;
  round4LowValid = false;

  round5 = new MatTableDataSource<Matchup>([]);

  constructor() { }

  ngOnInit(): void {
    this.sub = this.loadBracket.subscribe(() => {
      let teams = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      for (let t of teams) {
        this.teamsUnsorted.push(new SwissTeam(t, []));
      }
      this.teamsSorted.data = this.teamsUnsorted.slice().sort(SwissTeam.sortFunctionAllMatches);
      this.initiateBracket();

    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
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
      const [a, b] = Matchup.teamWon(m)
      teamsHigh.push(this.teamsUnsorted[a]);
      teamsLow.push(this.teamsUnsorted[b]);
    }

    teamsHigh.sort(SwissTeam.sortFunctionSwissRound)
    teamsLow.sort(SwissTeam.sortFunctionSwissRound)

    this.round2High.data = this.fillTeams(teamsHigh);
    this.round2Low.data = this.fillTeams(teamsLow);
    this.refreshData()
  }

  initiateRound2(valid: boolean) {
    if (!valid) {
      return;
    }
    this.generateRound2()
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
      const [a, b] = Matchup.teamWon(m)
      teamsHigh.push(this.teamsUnsorted[a]);
      teamsMid.push(this.teamsUnsorted[b]);
    }
    for (let m of this.round2Low.data) {
      const [a, b] = Matchup.teamWon(m)
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
      const [a, b] = Matchup.teamWon(m)
      teamsHigh.push(this.teamsUnsorted[b]);
    }
    for (let m of this.round3Mid.data) {
      const [a, b] = Matchup.teamWon(m)
      teamsHigh.push(this.teamsUnsorted[a]);
      teamsLow.push(this.teamsUnsorted[b]);
    }
    for (let m of this.round3Low.data) {
      const [a, b] = Matchup.teamWon(m)
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
    }
  }
  generateRound5() {
    for (let t of this.teamsUnsorted) {
      t.swissMatchup = t.swissMatchup.slice(0, 4)
      t.update()
    }

    let teams: SwissTeam[] = []

    for (let m of this.round4High.data) {
      const [a, b] = Matchup.teamWon(m)
      teams.push(this.teamsUnsorted[b]);
    }
    for (let m of this.round4Low.data) {
      const [a, b] = Matchup.teamWon(m)
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
      this.teamsTop8.next(teams)
    }
  }

  fillTeams(teamsArr: SwissTeam[]): Matchup[] {
    let swissArr: Matchup[] = [];
    let func = (teamsArr: SwissTeam[]): Matchup[] | undefined => {
      if (teamsArr.length < 1) {
        return [];
      }

      let team1Index = teamsArr[0].teamIndex;

      for (var i = 0; i < teamsArr.length - 1; i++) {
        let team2Index = teamsArr[teamsArr.length - 1 - i].teamIndex;

        if (this.teamsUnsorted[team2Index].teamBlacklist.find((element) => { return element == team1Index }) !== undefined) { continue; }

        let arr = func(teamsArr.slice(1, teamsArr.length - 1 - i).concat(teamsArr.slice(teamsArr.length - i)))

        if (arr === undefined) { continue; }

        let temp = [new Matchup(team1Index, team2Index)]
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
        let match = new Matchup(team1Index, team2Index)
        swissArr[i] = match;
        this.teamsUnsorted[team1Index].swissMatchup.push(match);
        this.teamsUnsorted[team2Index].swissMatchup.push(match);
      }
    } else {
      swissArr = matchups
      for (let match of swissArr) {
        let team1Index = match.team1;
        let team2Index = match.team2;

        this.teamsUnsorted[team1Index].swissMatchup.push(match);
        this.teamsUnsorted[team2Index].swissMatchup.push(match);
      }
    }
    return swissArr;

  }
}
