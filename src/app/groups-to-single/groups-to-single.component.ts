import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { TeamDbService } from '../team-db.service';

@Component({
  selector: 'app-groups-to-single',
  templateUrl: './groups-to-single.component.html',
  styleUrls: ['./groups-to-single.component.scss']
})
export class GroupsToSingleComponent implements OnInit {
  teamsChanged!: Subscription;
  groupA = new Subject<number[]>();
  groupB = new Subject<number[]>();
  groupC = new Subject<number[]>();
  groupD = new Subject<number[]>();



  constructor(private teamsDb: TeamDbService) { }

  ngOnInit(): void {
    this.teamsChanged = this.teamsDb.teamsChanged.subscribe(() => {
      this.groupA.next([0, 7, 8, 15])
      this.groupB.next([1, 6, 9, 14])
      this.groupC.next([2, 5, 10, 13])
      this.groupD.next([3, 4, 11, 12])
    });
  }

  top4Teams() {

  }

}
