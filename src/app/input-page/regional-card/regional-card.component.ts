import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-regional-card',
  templateUrl: './regional-card.component.html',
  styleUrls: ['./regional-card.component.scss']
})
export class RegionalCardComponent implements OnInit {
  @Input() url!: string;
  @Input() format!: string;
  @Input() regionalName!: string;
  @Output() click = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
