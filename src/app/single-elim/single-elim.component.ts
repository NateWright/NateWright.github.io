import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { first, ReplaySubject, Subject, Subscription } from 'rxjs';

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
    input.pipe(first()).subscribe((val) => {
      output.next(val);
    })
  }

}
