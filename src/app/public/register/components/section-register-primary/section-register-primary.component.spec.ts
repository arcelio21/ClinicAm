/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionRegisterPrimaryComponent } from './section-register-primary.component';

describe('SectionRegisterPrimaryComponent', () => {
  let component: SectionRegisterPrimaryComponent;
  let fixture: ComponentFixture<SectionRegisterPrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionRegisterPrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRegisterPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
