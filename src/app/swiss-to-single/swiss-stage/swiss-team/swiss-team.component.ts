import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Team } from 'src/app/shared/team.model';
import { TeamDbService } from 'src/app/team-db.service';

@Component({
  selector: 'app-swiss-team',
  templateUrl: './swiss-team.component.html',
  styleUrls: ['./swiss-team.component.scss']
})
export class SwissTeamComponent implements OnInit {

  @Input() id!: Subject<number> | number;
  team!: Team;

  idSub!: Subscription;

  constructor(private teamDb: TeamDbService) {
  }
  ngOnDestroy(): void {
    if (this.idSub) {
      this.idSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    if (typeof (this.id) === "number") {
      this.team = this.teamDb.getTeam(this.id);
    } else {
      this.idSub = this.id.subscribe((val: number) => {
        this.team = this.teamDb.getTeam(val);
      })
    }
  }

}
