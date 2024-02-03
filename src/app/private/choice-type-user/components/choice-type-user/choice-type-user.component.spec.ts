import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceTypeUserComponent } from './choice-type-user.component';

describe('ChoiceTypeUserComponent', () => {
  let component: ChoiceTypeUserComponent;
  let fixture: ComponentFixture<ChoiceTypeUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceTypeUserComponent]
    });
    fixture = TestBed.createComponent(ChoiceTypeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
