import { Component, OnInit } from '@angular/core';
import { SwissToSingleService } from './swiss-to-single.service';

@Component({
  selector: 'app-swiss-to-single',
  templateUrl: './swiss-to-single.component.html',
  styleUrls: ['./swiss-to-single.component.scss']
})
export class SwissToSingleComponent implements OnInit {

  constructor(public swissToSingle: SwissToSingleService) { }

  ngOnInit(): void {
  }

}
