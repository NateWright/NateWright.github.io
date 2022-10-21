import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupsToSingleComponent } from './groups-to-single.component';

const routes: Routes = [
    {
        path: '',
        component: GroupsToSingleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupsToSingleRoutingModule { }