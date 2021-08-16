import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProject1Component } from './new-project1.component';

describe('NewProject1Component', () => {
  let component: NewProject1Component;
  let fixture: ComponentFixture<NewProject1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProject1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
