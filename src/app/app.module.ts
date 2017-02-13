import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingList1Component } from './shopping-list-1/shopping-list-1.component';
import { ShoppingList2Component } from './shopping-list-2/shopping-list-2.component';
import { ShoppingList3Component } from './shopping-list-3/shopping-list-3.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingList1Component,
    ShoppingList2Component,
    ShoppingList3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
