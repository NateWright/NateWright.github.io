import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalCardComponent } from './regional-card.component';

describe('RegionalCardComponent', () => {
  let component: RegionalCardComponent;
  let fixture: ComponentFixture<RegionalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
