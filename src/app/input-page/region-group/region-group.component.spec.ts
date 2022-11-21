import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionGroupComponent } from './region-group.component';

describe('RegionGroupComponent', () => {
  let component: RegionGroupComponent;
  let fixture: ComponentFixture<RegionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
