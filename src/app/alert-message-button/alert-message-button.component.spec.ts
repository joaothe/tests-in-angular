import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AlertMessageButtonComponent } from './alert-message-button.component';

describe('AlertMessageButtonComponent', () => {
  let button_component: AlertMessageButtonComponent;
  let fixture: ComponentFixture<AlertMessageButtonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertMessageButtonComponent ],

    })
    .compileComponents();
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertMessageButtonComponent);
    button_component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();

  })

  it('should create', () => {
    expect(button_component).toBeTruthy();
  });

  it('should have a message containing `warn`', () => {
    expect(button_component.content).toContain('warn');
  })

})


