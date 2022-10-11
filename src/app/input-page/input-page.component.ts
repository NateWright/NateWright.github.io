import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TeamDbService } from '../team-db.service';
import { HttpClient } from '@angular/common/http'

export interface Event {
  regionalName: string,
  csvURL: string,
  format: string
}

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {
  // csvForm: FormGroup;
  naEvents: Event[] = [{
    regionalName: "Fall Open",
    csvURL: "https://raw.githubusercontent.com/NateWright/NateWright.github.io/master/src/assets/na/fall/regional1.csv",
    format: "/swiss-to-single-elimination"
  }]
  euEvents: Event[] = [{
    regionalName: "Fall Open",
    csvURL: "https://raw.githubusercontent.com/NateWright/NateWright.github.io/master/src/assets/eu/fall/regional1.csv",
    format: "/swiss-to-single-elimination"
  }]
  constructor(private teamServer: TeamDbService, private http: HttpClient) {
    // let textField = "assets/G2.webp, G2 Esports\nassets/Faze.png, Faze Clan\nassets/Furia.webp, Furia\nassets/V1.png, Version 1";
    // this.csvForm = new FormGroup({
    //   csvText: new FormControl(textField)
    // });
  }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   let formText = this.csvForm.get('csvText');
  //   if (formText) {
  //     this.teamServer.addTeams(formText.value);
  //   }
  // }

  initiateTeams(file: string) {
    this.http.get(file, { responseType: 'text' })
      .subscribe((data) => {
        this.teamServer.addTeams(data);
      }
      );
  }

}
