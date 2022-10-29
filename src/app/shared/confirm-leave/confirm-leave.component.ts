import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-leave',
  templateUrl: './confirm-leave.component.html',
  styleUrls: ['./confirm-leave.component.scss']
})
export class ConfirmLeaveComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmLeaveComponent, { response?: "leave page" | "stay on page" }>) { }

  ngOnInit(): void {
  }

  cancel() {
    this.dialogRef.close({ response: "stay on page" });
  }
  leave() {
    this.dialogRef.close({ response: "leave page" });
  }

}
