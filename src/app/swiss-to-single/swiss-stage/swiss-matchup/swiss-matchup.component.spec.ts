import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwissMatchupComponent } from './swiss-matchup.component';

describe('SwissMatchupComponent', () => {
  let component: SwissMatchupComponent;
  let fixture: ComponentFixture<SwissMatchupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwissMatchupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwissMatchupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
