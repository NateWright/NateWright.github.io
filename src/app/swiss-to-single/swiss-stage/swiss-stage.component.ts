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
    this.round1.data = this.fillTeamsBasic(this.teamsUnsorted)
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

    this.round2High.data = this.fillTeamsBasic(teamsHigh);
    this.round2Low.data = this.fillTeamsBasic(teamsLow);
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

    this.round3High.data = this.fillTeamsBasic(teamsHigh)
    this.round3Mid.data = this.fillTeams(teamsMid, 4, 4)
    this.round3Low.data = this.fillTeamsBasic(teamsLow)
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

    this.round4High.data = this.fillTeams(teamsHigh, 2, 4)
    this.round4Low.data = this.fillTeams(teamsLow, 4, 2)
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

    this.round5.data = this.fillTeams(teams, 3, 3)
  }
  round5Val(b: boolean) {
    if (b) {
      for (let t of this.teamsUnsorted) {
        t.update()
      }
      this.refreshData();
      let teams: number[] = []
      for (let t of this.teamsSorted.data.slice(0, 8)) {
        teams.push(t.teamIndex)
      }
      this.teamsTop8.next(teams)
    }
  }
  fillTeamsBasic(teams: SwissTeam[]): Matchup[] {
    let output: Matchup[] = []
    for (var i = 0; i < teams.length / 2; i++) {
      let team1Index = teams[i].teamIndex;
      let team2Index = teams[teams.length - 1 - i].teamIndex;
      let match = new Matchup(team1Index, team2Index)
      output.push(match);
      this.teamsUnsorted[team1Index].swissMatchup.push(match);
      this.teamsUnsorted[team2Index].swissMatchup.push(match);
    }
    return output;
  }

  fillTeams(teams: SwissTeam[], high: number, low: number): Matchup[] {
    let output: Matchup[] = []

    if (high === 4 && low === 4) {

      let m = swiss_4_4.find(
        (matchups) => {
          for (let arr of matchups.matchups) {
            if (this.teamsUnsorted[teams[arr[0] - 1].teamIndex].teamBlacklist.find((element) => { return element == teams[arr[1] - 1].teamIndex }) !== undefined) {
              return undefined;
            }
          }
          return matchups
        }
      )
      if (m) {
        for (let arr of m.matchups) {
          let team1Index = teams[arr[0] - 1].teamIndex
          let team2Index = teams[arr[1] - 1].teamIndex
          let newMatch = new Matchup(team1Index, team2Index)

          output.push(newMatch)
          this.teamsUnsorted[team1Index].swissMatchup.push(newMatch);
          this.teamsUnsorted[team2Index].swissMatchup.push(newMatch);
        }
      }
      return output;

    } else if (high === 4 && low === 2) {
      return this.searchFunction(swiss_4_2, teams);

    } else if (high === 3 && low === 3) {
      return this.searchFunction(swiss_3_3, teams);

    } else if (high === 2 && low === 4) {
      return this.searchFunction(swiss_2_4, teams);;

    }

    return output;
  }

  searchFunction(swiss: { matchups: [[number, number], [number, number], [number, number]] }[], teams: SwissTeam[]) {
    let output: Matchup[] = []
    let m = swiss.find(
      (matchups) => {
        for (let arr of matchups.matchups) {
          if (this.teamsUnsorted[teams[arr[0] - 1].teamIndex].teamBlacklist.find(
            (element) => { return element == teams[arr[1] - 1].teamIndex }) !== undefined) {
            return undefined;
          }
        }
        return matchups
      }
    )
    if (m) {
      for (let arr of m.matchups) {
        let team1Index = teams[arr[0] - 1].teamIndex
        let team2Index = teams[arr[1] - 1].teamIndex
        let newMatch = new Matchup(team1Index, team2Index)

        output.push(newMatch)
        this.teamsUnsorted[team1Index].swissMatchup.push(newMatch);
        this.teamsUnsorted[team2Index].swissMatchup.push(newMatch);
      }
    }
    return output;
  }
}

let swiss_4_4: { matchups: [[number, number], [number, number], [number, number], [number, number]] }[]
  = [
    {
      matchups: [
        [1, 8], [2, 7], [3, 6], [4, 5]
      ]
    }, {
      matchups: [
        [1, 8], [2, 7], [3, 5], [4, 6]
      ]
    }, {
      matchups: [
        [1, 8], [2, 6], [3, 7], [4, 5]
      ]
    }, {
      matchups: [
        [1, 8], [2, 6], [3, 5], [4, 7]
      ]
    }, {
      matchups: [
        [1, 8], [2, 5], [3, 7], [4, 6]
      ]
    }, {
      matchups: [
        [1, 8], [2, 5], [3, 6], [4, 7]
      ]
    }, {
      matchups: [
        [1, 7], [2, 8], [3, 6], [4, 5]
      ]
    }, {
      matchups: [
        [1, 7], [2, 8], [3, 5], [4, 6]
      ]
    }, {
      matchups: [
        [1, 7], [2, 6], [3, 8], [4, 5]
      ]
    }, {
      matchups: [
        [1, 7], [2, 6], [3, 5], [4, 8]
      ]
    }, {
      matchups: [
        [1, 7], [2, 5], [3, 8], [4, 6]
      ]
    }, {
      matchups: [
        [1, 7], [2, 5], [3, 6], [4, 8]
      ]
    }, {
      matchups: [
        [1, 6], [2, 8], [3, 7], [4, 5]
      ]
    }, {
      matchups: [
        [1, 6], [2, 8], [3, 5], [4, 7]
      ]
    }, {
      matchups: [
        [1, 6], [2, 7], [3, 8], [4, 5]
      ]
    }, {
      matchups: [
        [1, 6], [2, 7], [3, 5], [4, 8]
      ]
    }, {
      matchups: [
        [1, 6], [2, 5], [3, 8], [4, 7]
      ]
    }, {
      matchups: [
        [1, 6], [2, 5], [3, 7], [4, 8]
      ]
    }, {
      matchups: [
        [1, 5], [2, 8], [3, 7], [4, 6]
      ]
    }, {
      matchups: [
        [1, 5], [2, 8], [3, 6], [4, 7]
      ]
    }, {
      matchups: [
        [1, 5], [2, 7], [3, 8], [4, 6]
      ]
    }, {
      matchups: [
        [1, 5], [2, 7], [3, 6], [4, 8]
      ]
    }, {
      matchups: [
        [1, 5], [2, 6], [3, 8], [4, 7]
      ]
    }, {
      matchups: [
        [1, 5], [2, 6], [3, 7], [4, 8]
      ]
    }, {
      matchups: [
        [1, 8], [2, 7], [3, 4], [5, 6]
      ]
    }, {
      matchups: [
        [1, 8], [2, 6], [3, 4], [5, 7]
      ]
    }, {
      matchups: [
        [1, 8], [2, 5], [3, 4], [6, 7]
      ]
    }, {
      matchups: [
        [1, 8], [2, 4], [3, 7], [5, 6]
      ]
    }, {
      matchups: [
        [1, 8], [2, 4], [3, 6], [5, 7]
      ]
    }, {
      matchups: [
        [1, 8], [2, 4], [3, 5], [6, 7]
      ]
    }, {
      matchups: [
        [1, 8], [2, 3], [4, 7], [5, 6]
      ]
    }, {
      matchups: [
        [1, 8], [2, 3], [4, 6], [5, 7]
      ]
    }, {
      matchups: [
        [1, 8], [2, 3], [4, 5], [6, 7]
      ]
    }, {
      matchups: [
        [1, 7], [2, 8], [3, 4], [5, 6]
      ]
    }, {
      matchups: [
        [1, 7], [2, 6], [3, 4], [5, 8]
      ]
    }, {
      matchups: [
        [1, 7], [2, 5], [3, 4], [6, 8]
      ]
    }, {
      matchups: [
        [1, 7], [2, 4], [3, 8], [5, 6]
      ]
    }, {
      matchups: [
        [1, 7], [2, 4], [3, 6], [5, 8]
      ]
    }, {
      matchups: [
        [1, 7], [2, 4], [3, 5], [6, 8]
      ]
    }, {
      matchups: [
        [1, 7], [2, 3], [4, 8], [5, 6]
      ]
    }, {
      matchups: [
        [1, 7], [2, 3], [4, 6], [5, 8]
      ]
    }, {
      matchups: [
        [1, 6], [2, 8], [3, 4], [5, 7]
      ]
    }, {
      matchups: [
        [1, 6], [2, 7], [3, 4], [5, 8]
      ]
    }, {
      matchups: [
        [1, 6], [2, 5], [3, 4], [7, 8]
      ]
    }, {
      matchups: [
        [1, 6], [2, 4], [3, 8], [5, 7]
      ]
    }, {
      matchups: [
        [1, 6], [2, 4], [3, 7], [5, 8]
      ]
    }, {
      matchups: [
        [1, 6], [2, 4], [3, 5], [7, 8]
      ]
    }, {
      matchups: [
        [1, 6], [2, 3], [4, 8], [5, 7]
      ]
    }, {
      matchups: [
        [1, 6], [2, 3], [4, 7], [5, 8]
      ]
    }, {
      matchups: [
        [1, 5], [2, 8], [3, 4], [6, 7]
      ]
    }, {
      matchups: [
        [1, 5], [2, 7], [3, 4], [6, 8]
      ]
    }, {
      matchups: [
        [1, 5], [2, 6], [3, 4], [7, 8]
      ]
    }, {
      matchups: [
        [1, 5], [2, 4], [3, 8], [6, 7]
      ]
    }, {
      matchups: [
        [1, 5], [2, 4], [3, 7], [6, 8]
      ]
    }, {
      matchups: [
        [1, 5], [2, 4], [3, 6], [7, 8]
      ]
    }, {
      matchups: [
        [1, 5], [2, 3], [4, 8], [6, 7]
      ]
    }, {
      matchups: [
        [1, 5], [2, 3], [4, 7], [6, 8]
      ]
    }, {
      matchups: [
        [1, 4], [2, 8], [3, 7], [5, 6]
      ]
    }, {
      matchups: [
        [1, 4], [2, 8], [3, 6], [5, 7]
      ]
    }, {
      matchups: [
        [1, 4], [2, 8], [3, 5], [6, 7]
      ]
    }, {
      matchups: [
        [1, 4], [2, 7], [3, 8], [5, 6]
      ]
    }, {
      matchups: [
        [1, 4], [2, 7], [3, 6], [5, 8]
      ]
    }, {
      matchups: [
        [1, 4], [2, 7], [3, 5], [6, 8]
      ]
    }, {
      matchups: [
        [1, 4], [2, 6], [3, 8], [5, 7]
      ]
    }, {
      matchups: [
        [1, 4], [2, 6], [3, 7], [5, 8]
      ]
    }, {
      matchups: [
        [1, 4], [2, 5], [3, 8], [6, 7]
      ]
    }, {
      matchups: [
        [1, 4], [2, 5], [3, 7], [6, 8]
      ]
    }, {
      matchups: [
        [1, 4], [2, 5], [3, 6], [7, 8]
      ]
    }, {
      matchups: [
        [1, 4], [2, 3], [5, 8], [6, 7]
      ]
    }, {
      matchups: [
        [1, 4], [2, 3], [5, 7], [6, 8]
      ]
    }, {
      matchups: [
        [1, 4], [2, 3], [5, 6], [7, 8]
      ]
    }, {
      matchups: [
        [1, 3], [2, 8], [4, 7], [5, 6]
      ]
    }, {
      matchups: [
        [1, 3], [2, 8], [4, 6], [5, 7]
      ]
    }, {
      matchups: [
        [1, 3], [2, 8], [4, 5], [6, 7]
      ]
    }, {
      matchups: [
        [1, 3], [2, 7], [4, 8], [5, 6]
      ]
    }, {
      matchups: [
        [1, 3], [2, 7], [4, 6], [5, 8]
      ]
    }, {
      matchups: [
        [1, 3], [2, 7], [4, 5], [6, 8]
      ]
    }, {
      matchups: [
        [1, 3], [2, 6], [4, 8], [5, 7]
      ]
    }, {
      matchups: [
        [1, 3], [2, 6], [4, 7], [5, 8]
      ]
    }, {
      matchups: [
        [1, 3], [2, 6], [4, 5], [7, 8]
      ]
    }, {
      matchups: [
        [1, 3], [2, 5], [4, 8], [6, 7]
      ]
    }, {
      matchups: [
        [1, 3], [2, 5], [4, 7], [6, 8]
      ]
    }, {
      matchups: [
        [1, 3], [2, 5], [4, 6], [7, 8]
      ]
    }, {
      matchups: [
        [1, 3], [2, 4], [5, 8], [6, 7]
      ]
    }, {
      matchups: [
        [1, 3], [2, 4], [5, 7], [6, 8]
      ]
    }, {
      matchups: [
        [1, 3], [2, 4], [5, 6], [7, 8]
      ]
    }, {
      matchups: [
        [1, 2], [3, 8], [4, 7], [5, 6]
      ]
    }, {
      matchups: [
        [1, 2], [3, 8], [4, 6], [5, 7]
      ]
    }, {
      matchups: [
        [1, 2], [3, 8], [4, 5], [6, 7]
      ]
    }, {
      matchups: [
        [1, 2], [3, 7], [4, 8], [5, 6]
      ]
    }, {
      matchups: [
        [1, 2], [3, 7], [4, 6], [5, 8]
      ]
    }, {
      matchups: [
        [1, 2], [3, 7], [4, 5], [6, 8]
      ]
    }, {
      matchups: [
        [1, 2], [3, 6], [4, 8], [5, 7]
      ]
    }, {
      matchups: [
        [1, 2], [3, 6], [4, 7], [5, 8]
      ]
    }, {
      matchups: [
        [1, 2], [3, 5], [4, 8], [6, 7]
      ]
    }, {
      matchups: [
        [1, 2], [3, 5], [4, 7], [6, 8]
      ]
    }, {
      matchups: [
        [1, 2], [3, 5], [4, 6], [7, 8]
      ]
    }, {
      matchups: [
        [1, 2], [3, 4], [5, 8], [6, 7]
      ]
    }, {
      matchups: [
        [1, 2], [3, 4], [5, 7], [6, 8]
      ]
    }
  ]

let swiss_2_4: { matchups: [[number, number], [number, number], [number, number]] }[] = [
  {
    matchups: [
      [1, 6], [2, 5], [3, 4]
    ]
  }, {
    matchups: [
      [1, 6], [2, 4], [3, 5]
    ]
  }, {
    matchups: [
      [1, 6], [2, 3], [4, 5]
    ]
  }, {
    matchups: [
      [1, 5], [2, 6], [3, 4]
    ]
  }, {
    matchups: [
      [1, 5], [2, 4], [3, 6]
    ]
  }, {
    matchups: [
      [1, 5], [2, 3], [4, 6]
    ]
  }, {
    matchups: [
      [1, 4], [2, 6], [3, 5]
    ]
  }, {
    matchups: [
      [1, 4], [2, 5], [3, 6]
    ]
  }, {
    matchups: [
      [1, 4], [2, 3], [5, 6]
    ]
  }, {
    matchups: [
      [1, 3], [2, 6], [4, 5]
    ]
  }, {
    matchups: [
      [1, 3], [2, 5], [4, 6]
    ]
  }, {
    matchups: [
      [1, 3], [2, 4], [5, 6]
    ]
  }, {
    matchups: [
      [1, 2], [3, 6], [4, 5]
    ]
  }, {
    matchups: [
      [1, 2], [3, 5], [4, 6]
    ]
  }
]

let swiss_4_2: { matchups: [[number, number], [number, number], [number, number]] }[] = [
  {
    matchups: [
      [1, 6], [2, 5], [3, 4]
    ]
  }, {
    matchups: [
      [1, 6], [3, 5], [2, 4]
    ]
  }, {
    matchups: [
      [1, 6], [4, 5], [2, 3]
    ]
  }, {
    matchups: [
      [2, 6], [1, 5], [3, 4]
    ]
  }, {
    matchups: [
      [2, 6], [3, 5], [1, 4]
    ]
  }, {
    matchups: [
      [2, 6], [4, 5], [1, 3]
    ]
  }, {
    matchups: [
      [3, 6], [1, 5], [2, 4]
    ]
  }, {
    matchups: [
      [3, 6], [2, 5], [1, 4]
    ]
  }, {
    matchups: [
      [3, 6], [4, 5], [1, 2]
    ]
  }, {
    matchups: [
      [4, 6], [1, 5], [2, 3]
    ]
  }, {
    matchups: [
      [4, 6], [2, 5], [1, 3]
    ]
  }, {
    matchups: [
      [4, 6], [3, 5], [1, 2]
    ]
  }, {
    matchups: [
      [5, 6], [1, 4], [2, 3]
    ]
  }, {
    matchups: [
      [5, 6], [2, 4], [1, 3]
    ]
  }
]

let swiss_3_3: { matchups: [[number, number], [number, number], [number, number]] }[] = [
  {
    matchups: [
      [1, 6], [2, 5], [3, 4]
    ]
  }, {
    matchups: [
      [1, 6], [2, 4], [3, 5]
    ]
  }, {
    matchups: [
      [1, 5], [2, 6], [3, 4]
    ]
  }, {
    matchups: [
      [1, 5], [2, 4], [3, 6]
    ]
  }, {
    matchups: [
      [1, 4], [2, 6], [3, 5]
    ]
  }, {
    matchups: [
      [1, 4], [2, 5], [3, 6]
    ]
  }, {
    matchups: [
      [1, 6], [2, 3], [4, 5]
    ]
  }, {
    matchups: [
      [1, 5], [2, 3], [4, 6]
    ]
  }, {
    matchups: [
      [1, 4], [2, 3], [5, 6]
    ]
  }, {
    matchups: [
      [1, 3], [2, 6], [4, 5]
    ]
  }, {
    matchups: [
      [1, 3], [2, 5], [4, 6]
    ]
  }, {
    matchups: [
      [1, 3], [2, 4], [5, 6]
    ]
  }, {
    matchups: [
      [1, 2], [3, 6], [4, 5]
    ]
  }, {
    matchups: [
      [1, 2], [3, 5], [4, 6]
    ]
  }
]