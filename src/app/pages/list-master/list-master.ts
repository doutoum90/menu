import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
})
export class ListMasterPage {
  currentItems: Item[];

  constructor(
    private readonly items: Items,
    private readonly router: Router
  ) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {}

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    this.router.navigate(['pages/item-create']);
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.router.navigate(['pages/item-detail', item.name]);
  }
}
