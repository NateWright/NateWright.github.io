import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwissToSingleComponent } from './swiss-to-single.component';

const routes: Routes = [
    {
        path: '',
        component: SwissToSingleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SwissToSingleRoutingModule { }