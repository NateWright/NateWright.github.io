import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription } from 'rxjs';
import { Matchup } from 'src/app/shared/matchup.model';

interface GroupsTeam {
  team: number;
  wins: number;
  gameDif: number
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit, OnDestroy {
  @Input() teamsSubject!: Subject<number[]>;

  @Output() top4 = new EventEmitter<number[]>();

  sub!: Subscription;
  teams: number[] = []
  group = new MatTableDataSource<Matchup>();

  displayedColumns: string[] = ['team1', 'score1', 'score2', 'team2']

  constructor() { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.teamsSubject.subscribe((teams: number[]) => {
      this.teams = teams
      let matchups: Matchup[] = []
      matchups.push(new Matchup(teams[0], teams[3]), new Matchup(teams[1], teams[2]))
      matchups.push(new Matchup(teams[0], teams[2]), new Matchup(teams[1], teams[3]))
      matchups.push(new Matchup(teams[0], teams[1]), new Matchup(teams[2], teams[3]))

      this.group.data = matchups
    })
  }

  checkValid() {
    let matches = this.group.data
    for (let match of matches) {
      if (!match.isValid()) {
        return;
      }
    }

    let teams = Array<GroupsTeam>(4)
    for (let i = 0; i < teams.length; i++) {
      teams[i] = { team: this.teams[i], wins: 0, gameDif: 0 }
    }

    for (let t of teams) {
      for (let match of matches) {
        let dif = Matchup.checkWinDiff(t.team, match)
        t.gameDif += dif;
        if (dif > 0) {
          t.wins++;
        }
      }
    }

    teams.sort(GroupsComponent.sortFunction)

    let outputTeams: number[] = []
    for (let t of teams) {
      outputTeams.push(t.team)
    }

    this.top4.next(outputTeams)

  }

  static sortFunction(team1: GroupsTeam, team2: GroupsTeam): number {
    const TEAMONE = -1;
    const TEAMTWO = 1;
    if (team1.wins > team2.wins) {
      return TEAMONE;
    }
    if (team2.wins > team1.wins) {
      return TEAMTWO;
    }

    if (team1.gameDif > team2.gameDif) {
      return TEAMONE;
    }
    if (team2.gameDif > team1.gameDif) {
      return TEAMTWO;
    }

    return team1.team - team2.team;
  }

}
