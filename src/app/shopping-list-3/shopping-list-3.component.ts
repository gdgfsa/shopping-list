import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from '../shopping-item';
import {ShoppingListDataService} from '../shopping-list-data.service';
import {CursoComponent} from '../curso/curso.component'

@Component({
  selector: 'shopping-list-3',
  templateUrl: './shopping-list-3.component.html',
  styleUrls: ['./shopping-list-3.component.css'],
  providers: [ShoppingListDataService]
})
export class ShoppingList3Component implements OnInit {
  newItem: ShoppingItem = new ShoppingItem();
  curso: string="Angular 4";

  constructor(private listService: ShoppingListDataService) { }

  ngOnInit() {
  }
  toggleTodoComplete(item) {
    this.listService.toggleItemBought(item);
  }
  addItem() {
    this.listService.addItem(this.newItem);
    this.newItem = new ShoppingItem();
  }
  toggleItemBought(item) {
    this.listService.toggleItemBought(item);
  }
  removeItem(item) {
    this.listService.deleteItemById(item.id);
  }

  get items() {
    return this.listService.getAllItems();
  }

  onMudou(event:any){
    console.log(event);
  }
}
