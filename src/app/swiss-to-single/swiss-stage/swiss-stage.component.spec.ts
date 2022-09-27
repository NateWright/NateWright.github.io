import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwissStageComponent } from './swiss-stage.component';

describe('SwissStageComponent', () => {
  let component: SwissStageComponent;
  let fixture: ComponentFixture<SwissStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwissStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwissStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
