import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsToSingleComponent } from './groups-to-single.component';

describe('GroupsToSingleComponent', () => {
  let component: GroupsToSingleComponent;
  let fixture: ComponentFixture<GroupsToSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsToSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsToSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
