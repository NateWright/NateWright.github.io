import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsToSingleComponent } from './groups-to-single/groups-to-single.component';
import { InputPageComponent } from './input-page/input-page.component';
import { SwissToSingleComponent } from './swiss-to-single/swiss-to-single.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/input',
    pathMatch: 'full'
  }, {
    path: 'input',
    title: 'RLCS Predictions',
    component: InputPageComponent
  }, {
    path: 'swiss-to-single-elimination',
    component: SwissToSingleComponent
  }, {
    path: 'groups-to-single-elimination',
    component: GroupsToSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
