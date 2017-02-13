/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShoppingList2Component } from './shopping-list-2.component';

describe('ShoppingList2Component', () => {
  let component: ShoppingList2Component;
  let fixture: ComponentFixture<ShoppingList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
