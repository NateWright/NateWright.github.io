import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMatchupComponent } from './single-matchup.component';

describe('SingleMatchupComponent', () => {
  let component: SingleMatchupComponent;
  let fixture: ComponentFixture<SingleMatchupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMatchupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
