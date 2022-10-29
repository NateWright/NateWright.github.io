import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanLeaveGuardGuard } from './can-leave-guard.guard';
import { SwissToSingleComponent } from './swiss-to-single.component';

const routes: Routes = [
    {
        path: '',
        component: SwissToSingleComponent,
        canDeactivate: [CanLeaveGuardGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SwissToSingleRoutingModule { }