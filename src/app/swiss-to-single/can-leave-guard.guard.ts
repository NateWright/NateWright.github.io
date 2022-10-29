import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { SwissToSingleComponent } from './swiss-to-single.component';

@Injectable({
  providedIn: 'root'
})
export class CanLeaveGuardGuard implements CanDeactivate<SwissToSingleComponent> {
  canDeactivate(component: SwissToSingleComponent) {
    return component.canDeactivate();
  }

}
