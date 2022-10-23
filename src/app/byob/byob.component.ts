import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../shared/team.model';

interface TeamJSON {
  team: string,
  url: string
}

@Component({
  selector: 'app-byob',
  templateUrl: './byob.component.html',
  styleUrls: ['./byob.component.scss']
})
export class ByobComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['select', 'team'];
  availableTeams = new MatTableDataSource<Team>();
  selection = new SelectionModel<Team>(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get(environment.dbURL + 'brackets/byobTeams.csv', { responseType: 'text' })
      .subscribe((data) => {
        this.initiateTeamsDb(data.split('\n'))
      }
      );
  }

  ngAfterViewInit() {
    this.availableTeams.paginator = this.paginator;
  }

  drop(event: CdkDragDrop<Team[]>) {
    console.log(this.selection.selected)
    moveItemInArray(this.selection.selected, event.previousIndex, event.currentIndex);
  }

  async initiateTeamsDb(teams: string[]) {
    let availableTeams: Team[] = []
    let promises = []
    for (let t of teams) {
      promises.push(lastValueFrom(this.http.get<TeamJSON>(environment.dbURL + 'teams/' + t + '.json')))
    }
    const result = await Promise.all(promises)
    for (let t of result) {
      availableTeams.push(new Team(t.team, -1, t.url))
    }
    this.availableTeams.data = availableTeams

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.availableTeams.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.availableTeams.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.availableTeams.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Team): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.teamName + 1}`;
  }
  generateLink() {
    let params = ''
    let selected = this.selection.selected;
    for (let i = 0; i < selected.length; i++) {
      let name = selected[i].teamName
      name = name.replace(/\s+/g, '-');
      console.log(name)
      params += name
      if (i !== selected.length - 1) {
        params += ' '
      }
    }
    console.log(params)
    this.router.navigate(['/swiss-to-single-elimination'], { queryParams: { 'teams': params } })
  }
}
