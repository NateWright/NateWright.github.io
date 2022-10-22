import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByobComponent } from './byob.component';

describe('ByobComponent', () => {
  let component: ByobComponent;
  let fixture: ComponentFixture<ByobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
