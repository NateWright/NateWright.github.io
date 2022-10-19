import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    imports: [
        CommonModule,
        MatChipsModule,
    ],
    exports: [
        TeamComponent
    ],
    declarations: [
        TeamComponent,
    ]
})
export class SharedModule { }