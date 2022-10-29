import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { TeamCardComponent } from './team-card/team-card.component';
import { ConfirmLeaveComponent } from './confirm-leave/confirm-leave.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatChipsModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule
    ],
    exports: [
        TeamComponent,
        TeamCardComponent,
        ConfirmLeaveComponent,
    ],
    declarations: [
        TeamComponent,
        TeamCardComponent,
        ConfirmLeaveComponent,
    ]
})
export class SharedModule { }