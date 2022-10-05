import { EventEmitter, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwissMatchup } from '../shared/swiss-matchup.model';
import { SwissTeam } from '../shared/swiss-team.model';
import { TeamDbService } from '../team-db.service';

@Injectable({
  providedIn: 'root'
})
export class SwissToSingleService implements OnInit, OnDestroy {
  private teams: SwissTeam[] = [];
  private teamsChanged: Subscription;

  round1Initiated = new EventEmitter<SwissMatchup[]>()

  round1: SwissMatchup[] = [];
  round2High: SwissMatchup[] = new Array<SwissMatchup>(4);
  round2Low: SwissMatchup[] = new Array<SwissMatchup>(4);
  round3High: SwissMatchup[] = new Array<SwissMatchup>(2);
  round3Mid: SwissMatchup[] = new Array<SwissMatchup>(4);
  round3Low: SwissMatchup[] = new Array<SwissMatchup>(2);
  round4High: SwissMatchup[] = new Array<SwissMatchup>(3);
  round4Low: SwissMatchup[] = new Array<SwissMatchup>(3);
  round5: SwissMatchup[] = new Array<SwissMatchup>(3);


  constructor(private teamsDb: TeamDbService) {
    this.teamsChanged = this.teamsDb.teamsChanged.subscribe(() => {
      this.initiateBracket();
    });
  }
  ngOnDestroy(): void {
    this.teamsChanged.unsubscribe();
  }
  ngOnInit(): void {
    this.initiateBracket();
  }

  getTeams() {
    return this.teams.slice()
  }

  initiateBracket() {
    let teams = this.teamsDb.getTeams();
    teams.forEach((value, index) => {
      this.teams[index] = new SwissTeam(index, []);
    })

    this.round1 = this.fillTeams(this.teams)
    console.log(this.round1)
    this.round1Initiated.emit(this.round1)
  }


  generateRound2() {
    for (let t of this.teams) {
      t.swissMatchup = t.swissMatchup.slice(0, 1)
      t.update()
    }

    let teamsHigh: SwissTeam[] = []
    let teamsLow: SwissTeam[] = []
    for (let m of this.round1) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsHigh.push(this.teams[a]);
      teamsLow.push(this.teams[b]);
    }

    teamsHigh.sort(SwissTeam.sortFunctionSwissRound)
    teamsLow.sort(SwissTeam.sortFunctionSwissRound)

    this.round2High = this.fillTeams(teamsHigh);
    this.round2Low = this.fillTeams(teamsLow);
  }
  generateRound3() {
    for (let t of this.teams) {
      t.swissMatchup = t.swissMatchup.slice(0, 2)
      t.update()
    }
    let teamsHigh: SwissTeam[] = []
    let teamsMid: SwissTeam[] = []
    let teamsLow: SwissTeam[] = []
    for (let m of this.round2High) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsHigh.push(this.teams[a]);
      teamsMid.push(this.teams[b]);
    }
    for (let m of this.round2Low) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsMid.push(this.teams[a]);
      teamsLow.push(this.teams[b]);
    }

    teamsHigh.sort(SwissTeam.sortFunctionSwissRound)
    teamsMid.sort(SwissTeam.sortFunctionSwissRound)
    teamsLow.sort(SwissTeam.sortFunctionSwissRound)

    this.round3High = this.fillTeams(teamsHigh)
    this.round3Mid = this.fillTeams(teamsMid)
    this.round3Low = this.fillTeams(teamsLow)
  }

  generateRound4() {
    for (let t of this.teams) {
      t.swissMatchup = t.swissMatchup.slice(0, 3)
      t.update()
    }
    let teamsHigh: SwissTeam[] = []
    let teamsLow: SwissTeam[] = []

    for (let m of this.round3High) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsHigh.push(this.teams[b]);
    }
    for (let m of this.round3Mid) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsHigh.push(this.teams[a]);
      teamsLow.push(this.teams[b]);
    }
    for (let m of this.round3Low) {
      const [a, b] = SwissMatchup.teamWon(m)
      teamsLow.push(this.teams[a]);
    }

    teamsHigh.sort(SwissTeam.sortFunctionSwissRound)
    teamsLow.sort(SwissTeam.sortFunctionSwissRound)

    this.round4High = this.fillTeams(teamsHigh)
    this.round4Low = this.fillTeams(teamsLow)
  }
  generateRound5() {
    for (let t of this.teams) {
      t.swissMatchup = t.swissMatchup.slice(0, 4)
      t.update()
    }

    let teams: SwissTeam[] = []

    for (let m of this.round4High) {
      const [a, b] = SwissMatchup.teamWon(m)
      teams.push(this.teams[b]);
    }
    for (let m of this.round4Low) {
      const [a, b] = SwissMatchup.teamWon(m)
      teams.push(this.teams[a]);
    }
    teams.sort(SwissTeam.sortFunctionSwissRound)

    this.round5 = this.fillTeams(teams)
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

        if (this.teams[team2Index].teamBlacklist.find((element) => { return element == team1Index }) !== undefined) { continue; }

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
        this.teams[team1Index].swissMatchup.push(match);
        this.teams[team2Index].swissMatchup.push(match);
      }
    } else {
      swissArr = matchups
      for (var i = 0; i < teamsArr.length / 2; i++) {
        let team1Index = teamsArr[i].teamIndex;
        let matchIndex = swissArr.findIndex((value) => { return team1Index === value.team1 || team1Index === value.team2 ? true : false })
        let team2Index = team1Index === swissArr[matchIndex].team1 ? swissArr[matchIndex].team2 : swissArr[matchIndex].team1;

        this.teams[team1Index].swissMatchup.push(swissArr[matchIndex]);
        this.teams[team2Index].swissMatchup.push(swissArr[matchIndex]);
      }
    }
    return swissArr;

  }
}
