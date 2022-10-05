import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SwissMatchup } from 'src/app/shared/swiss-matchup.model';

@Component({
  selector: 'app-swiss-matchup',
  templateUrl: './swiss-matchup.component.html',
  styleUrls: ['./swiss-matchup.component.scss']
})
export class SwissMatchupComponent implements OnInit {
  @Input() round!: MatTableDataSource<SwissMatchup>;
  @Output() isValid = new EventEmitter<boolean>();

  displayedColumns: string[] = ['team1', 'score1', 'score2', 'team2']

  constructor() { }

  ngOnInit(): void {
  }

  checkValid() {
    for (let match of this.round.data) {
      if (!match.isValid()) {
        this.isValid.emit(false);
        return;
      }
    }
    this.isValid.emit(true);
  }

}
