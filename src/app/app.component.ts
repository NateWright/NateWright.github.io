import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RLCS Bracket Prediction';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    if (this.router.url === '/input') {
      return true;
    }
    return confirm('Would you like to discard changes?')
  }
}
