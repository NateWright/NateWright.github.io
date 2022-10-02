import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TeamDbService } from '../team-db.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {
  csvForm: FormGroup;
  constructor(private teamServer: TeamDbService) {
    let textField = "assets/G2.webp, G2 Esports\nassets/Faze.png, Faze Clan\nassets/Furia.webp, Furia\nassets/V1.png, Version 1";
    this.csvForm = new FormGroup({
      csvText: new FormControl(textField)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let formText = this.csvForm.get('csvText');
    if (formText) {
      this.teamServer.addTeams(formText.value);
    }
  }

}
