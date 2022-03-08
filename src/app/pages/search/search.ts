import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  currentItems: any = [];

  constructor(
    public readonly navCtrl: NavController,
    public readonly items: Items,
    public readonly router: Router
  ) {}

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val,
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.router.navigate(['pages/item-detail', item.name]);
  }
}
