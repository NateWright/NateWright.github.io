import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { TeamDbService } from 'src/app/team-db.service';
import { Team } from '../team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {
  @Input() id!: Subject<number> | number;
  @Input() team!: Team;

  idSub!: Subscription;

  constructor(private teamDb: TeamDbService) {
  }
  ngOnDestroy(): void {
    if (this.idSub) {
      this.idSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    if (this.id !== undefined) {
      if (typeof (this.id) === "number") {
        this.team = this.teamDb.getTeam(this.id);
      } else {
        this.idSub = this.id.subscribe((val: number) => {
          this.team = this.teamDb.getTeam(val);
        })
      }
    }

  }

}
