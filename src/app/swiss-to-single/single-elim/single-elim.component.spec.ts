import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleElimComponent } from './single-elim.component';

describe('SingleElimComponent', () => {
  let component: SingleElimComponent;
  let fixture: ComponentFixture<SingleElimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleElimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleElimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
