import { Injectable } from '@angular/core';
import {ShoppingItem} from './shopping-item'
//lógica de negócio. Por enquanto salva na memória
@Injectable()
export class ShoppingListDataService {
  //simular o auto-incremento
  lastId: number=0;
  //salvando na memória
  items: ShoppingItem[]=[];
  constructor() { }
  // Simulate POST /items
  addItem(item: ShoppingItem): ShoppingListDataService {
    if (!item.id) {
      item.id = ++this.lastId;
    }
    this.items.push(item);
    console.log(item);
    return this;
  }

  // Simulate DELETE /items/:id
  deleteItemById(id: number): ShoppingListDataService {
    this.items = this.items
      .filter(item => item.id !== id);
    return this;
  }

  // Simulate PUT /items/:id
  updateItemById(id: number, values: Object = {}): ShoppingItem {
    let item = this.getItemById(id);
    if (!item) {
      return null;
    }
    Object.assign(item, values);
    return item;
  }

  // Simulate GET /items
  getAllItems(): ShoppingItem[] {
    return this.items;
  }

  // Simulate GET /items/:id
  getItemById(id: number): ShoppingItem {
    return this.items
      .filter(item => item.id === id)
      .pop();
  }

  // Item comprado
  toggleItemBought(todo: ShoppingItem){
    let updatedItem = this.updateItemById(todo.id, {
      bought: !todo.bought
    });
    return updatedItem;
  }
}
