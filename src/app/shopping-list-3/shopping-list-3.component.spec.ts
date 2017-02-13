/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShoppingList3Component } from './shopping-list-3.component';

describe('ShoppingList3Component', () => {
  let component: ShoppingList3Component;
  let fixture: ComponentFixture<ShoppingList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
