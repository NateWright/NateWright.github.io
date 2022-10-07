import { EventEmitter, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { TeamDbService } from '../team-db.service';

@Injectable({
  providedIn: 'root'
})
export class SwissToSingleService implements OnInit, OnDestroy {
  private teamsTop16: number[] = [];
  private teamsChanged: Subscription;
  teamsTop8 = new Subject<number[]>();
  initiateBracket = new EventEmitter<void>()

  constructor(private teamsDb: TeamDbService) {
    this.teamsChanged = this.teamsDb.teamsChanged.subscribe(() => {
      this.teamsTop16 = [...Array(15).keys()]
      this.initiateBracket.next()
    });
  }
  ngOnDestroy(): void {
    this.teamsChanged.unsubscribe();
  }
  ngOnInit(): void {
  }

  getTeams() {
    return this.teamsTop16.slice()
  }

  setTop8(teams: number[]) {
    this.teamsTop8.next(teams)
  }
}
