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
    let textField = "https://cdn.shopify.com/s/files/1/0548/8554/8183/files/G2-Esports-2020-Logo_1_c3f40a4e-147d-4602-a309-f64b855ab054.png?v=1632399198, G2 Esports\nhttps://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Faze_Clan.svg/2560px-Faze_Clan.svg.png, Faze Clan\nhttps://sportsnaut.com/wp-content/uploads/2022/01/S67e22b70-1f6c-4e9e-8586-f3a12a4b8723.jpg, Furia\nhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wZmzGEOXZA9ZBI8hDYGyVvCB-OJSD1hA5XSiy3mw&s, Version 1";
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
