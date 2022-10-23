import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ByobComponent } from './byob/byob.component';
import { InputPageComponent } from './input-page/input-page.component';

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
    loadChildren: () => import('./swiss-to-single/swiss-to-single.module').then(m => m.SwissToSingleModule)
  }, {
    path: 'groups-to-single-elimination',
    loadChildren: () => import('./groups-to-single/groups-to-single.module').then(m => m.GroupsToSingleModule)
  }, {
    path: 'byob',
    component: ByobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
    preloadingStrategy: PreloadAllModules
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
