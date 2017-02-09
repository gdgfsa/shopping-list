import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
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
