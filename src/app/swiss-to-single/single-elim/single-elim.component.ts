import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { last, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-single-elim',
  templateUrl: './single-elim.component.html',
  styleUrls: ['./single-elim.component.scss']
})
export class SingleElimComponent implements OnInit, OnDestroy {
  @Input() teamsSubject!: Subject<number[]>;
  teams = Array<ReplaySubject<number>>(8);
  teamsChanged!: Subscription;

  match1Winner = new ReplaySubject<number>();
  match2Winner = new ReplaySubject<number>();
  match3Winner = new ReplaySubject<number>();
  match4Winner = new ReplaySubject<number>();

  round2Match1Winner = new ReplaySubject<number>();
  round2Match2Winner = new ReplaySubject<number>();

  winner = new ReplaySubject<number>();

  quartersArr: { team1: number, team2: number, winner: ReplaySubject<number> }[] = [
    { team1: 0, team2: 7, winner: this.match1Winner },
    { team1: 3, team2: 4, winner: this.match2Winner },
    { team1: 1, team2: 6, winner: this.match3Winner },
    { team1: 2, team2: 5, winner: this.match4Winner }
  ]

  semiArr: { team1: ReplaySubject<number>, team2: ReplaySubject<number>, winner: ReplaySubject<number> }[] = [
    { team1: this.match1Winner, team2: this.match2Winner, winner: this.round2Match1Winner },
    { team1: this.match3Winner, team2: this.match4Winner, winner: this.round2Match2Winner }
  ]

  constructor() {
    for (let i = 0; i < 8; i++) {
      this.teams[i] = new ReplaySubject<number>()
    }
  }
  ngOnDestroy(): void {
    this.teamsChanged.unsubscribe()
  }

  ngOnInit(): void {
    // for (let i = 0; i < 8; i++) {
    //   this.teams[i].next(i)
    // }
    this.teamsChanged = this.teamsSubject.subscribe((arr: number[]) => {
      for (let i = 0; i < arr.length && i < this.teams.length; i++) {
        this.teams[i].next(arr[i])
      }
    });
  }

  updateResults(input: ReplaySubject<number>, output: ReplaySubject<number>) {
    let sub = input.subscribe((val) => {
      output.next(val);
    })
    sub.unsubscribe();
  }

}
