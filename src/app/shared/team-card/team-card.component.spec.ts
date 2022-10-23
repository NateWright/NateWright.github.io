import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCardComponent } from './team-card.component';

describe('SwissTeamComponent', () => {
  let component: TeamCardComponent;
  let fixture: ComponentFixture<TeamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TeamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
