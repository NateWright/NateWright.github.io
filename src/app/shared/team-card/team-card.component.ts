import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Team } from 'src/app/shared/team.model';
import { TeamDbService } from 'src/app/team-db.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

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
