import { Component, EventEmitter, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { TeamDbService } from '../team-db.service';

@Component({
  selector: 'app-swiss-to-single',
  templateUrl: './swiss-to-single.component.html',
  styleUrls: ['./swiss-to-single.component.scss']
})
export class SwissToSingleComponent implements OnInit {
  private teamsTop16: number[] = [];
  private teamsChanged: Subscription;
  teamsTop8 = new Subject<number[]>();
  initiateBracket = new EventEmitter<void>()

  constructor(private teamsDb: TeamDbService) {
    this.teamsChanged = this.teamsDb.teamsChanged.subscribe(() => {
      this.teamsTop16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
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
