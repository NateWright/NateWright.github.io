import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RLCS Bracket Prediction';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params: Params) => {
    //   let param: string = params['teams']
    //   console.log(param)
    //   if (param == undefined) {
    //     this.router.navigate([''])
    //   }
    // })
  }
}
