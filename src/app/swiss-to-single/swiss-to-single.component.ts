import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { TeamDbService } from '../team-db.service';

@Component({
  selector: 'app-swiss-to-single',
  templateUrl: './swiss-to-single.component.html',
  styleUrls: ['./swiss-to-single.component.scss']
})
export class SwissToSingleComponent implements OnInit {
  private params: string[] = [];
  private teamsTop16: number[] = [];
  private teamsChanged: Subscription;
  teamsTop8 = new Subject<number[]>();
  initiateBracket = new EventEmitter<void>()

  constructor(private teamsDb: TeamDbService, private route: ActivatedRoute) {
    this.teamsChanged = this.teamsDb.teamsChanged.subscribe(() => {
      this.teamsTop16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      this.initiateBracket.next()
    });
  }
  ngOnDestroy(): void {
    this.teamsChanged.unsubscribe();
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      let param: string = params['teams']
      if (param === undefined) {
        return;
      }
      this.params = param.split(' ')
      this.teamsDb.initiateTeamsDb(this.params)
    })
  }

  getTeams() {
    return this.teamsTop16.slice()
  }

  setTop8(teams: number[]) {
    this.teamsTop8.next(teams)
  }

}
