/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShoppingList1Component } from './shopping-list-1.component';

describe('ShoppingList1Component', () => {
  let component: ShoppingList1Component;
  let fixture: ComponentFixture<ShoppingList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
