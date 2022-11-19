import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Event } from '../input-page.component';

@Component({
  selector: 'app-region-group',
  templateUrl: './region-group.component.html',
  styleUrls: ['./region-group.component.scss']
})
export class RegionGroupComponent implements OnInit {
  @Input() events!: Event[];
  @Input() regionName = '';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  initiateTeams(format: string, file: string) {
    this.http.get(environment.dbURL + file, { responseType: 'text' })
      .subscribe((data) => {
        this.router.navigate([format], { queryParams: { teams: data } })
      }
      );
  }

}
