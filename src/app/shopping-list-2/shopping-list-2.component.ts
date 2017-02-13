import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-list-2',
  templateUrl: './shopping-list-2.component.html',
  styleUrls: ['./shopping-list-2.component.css']
})
export class ShoppingList2Component implements OnInit {
public shoppingListItems;
public selectedItem;
  constructor() {
    this.shoppingListItems=[
    {name:"Milk"},
    {name:"Eggs"},
    {name:"Sugar"}
    ];
    this.selectedItem={name:""}
   }

  ngOnInit() {
  }

}
