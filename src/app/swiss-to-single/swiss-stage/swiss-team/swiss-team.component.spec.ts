import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwissTeamComponent } from './swiss-team.component';

describe('SwissTeamComponent', () => {
  let component: SwissTeamComponent;
  let fixture: ComponentFixture<SwissTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwissTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwissTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
