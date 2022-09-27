import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwissToSingleComponent } from './swiss-to-single.component';

describe('SwissToSingleComponent', () => {
  let component: SwissToSingleComponent;
  let fixture: ComponentFixture<SwissToSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwissToSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwissToSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
