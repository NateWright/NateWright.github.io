import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBracketComponent } from './create-bracket.component';

describe('CreateBracketComponent', () => {
  let component: CreateBracketComponent;
  let fixture: ComponentFixture<CreateBracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBracketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
