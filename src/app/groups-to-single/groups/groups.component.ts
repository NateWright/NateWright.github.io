import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Matchup } from 'src/app/shared/matchup.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  @Input() round!: MatTableDataSource<Matchup>;
  @Output() isValid = new EventEmitter<boolean>();
  @Output() tableUpdate = new EventEmitter<void>();

  displayedColumns: string[] = ['team1', 'score1', 'score2', 'team2']

  constructor() { }

  ngOnInit(): void {
  }

  checkValid() {
    this.tableUpdate.next()
    for (let match of this.round.data) {
      if (!match.isValid()) {
        this.isValid.emit(false);
        return;
      }
    }
    this.isValid.emit(true);
  }

}
