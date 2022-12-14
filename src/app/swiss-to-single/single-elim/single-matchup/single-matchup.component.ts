import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-single-matchup',
  templateUrl: './single-matchup.component.html',
  styleUrls: ['./single-matchup.component.scss']
})
export class SingleMatchupComponent implements OnInit {
  @Input() team: ReplaySubject<number> | number = -1;
  @Input() left: number = 0;
  @Output() teamWon = new EventEmitter<void>();
  teamScore = 0;
  constructor() { }

  ngOnInit(): void {
  }

  checkWin() {
    if (this.teamScore === 4) {
      this.teamWon.next();
    }
  }

}
