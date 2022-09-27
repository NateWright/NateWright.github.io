import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwissOpponentComponent } from './swiss-opponent.component';

describe('SwissOpponentComponent', () => {
  let component: SwissOpponentComponent;
  let fixture: ComponentFixture<SwissOpponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwissOpponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwissOpponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
