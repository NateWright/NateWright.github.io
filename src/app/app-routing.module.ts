import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPageComponent } from './input-page/input-page.component';
import { SwissToSingleComponent } from './swiss-to-single/swiss-to-single.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/input',
    pathMatch: 'full'
  }, {
    path: 'input',
    component: InputPageComponent
  }, {
    path: 'swiss-to-single-elimination',
    component: SwissToSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
