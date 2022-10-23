import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { TeamCardComponent } from './team-card/team-card.component';

@NgModule({
    imports: [
        CommonModule,
        MatChipsModule,
        MatCardModule,
    ],
    exports: [
        TeamComponent,
        TeamCardComponent,
    ],
    declarations: [
        TeamComponent,
        TeamCardComponent,
    ]
})
export class SharedModule { }