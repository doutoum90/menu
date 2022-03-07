import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { ItemCreatePage } from '../item-create/item-create';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
})
export class ListMasterPage {
  currentItems: Item[];

  constructor(
    public readonly navCtrl: NavController,
    public items: Items,
    public modalCtrl: ModalController
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
    let addModal = this.modalCtrl.create({ component: ItemCreatePage });
    addModal.then((item) => {
      console.log('item', item);
      if (item) {
        this.items.add(item);
      }
    });

    // onDidDismiss((item) => {})
    /*  addModal.onDidDismiss((item) => {
      if (item) {
        this.items.add(item);
      }
    });
    addModal.present(); */
  }
  favorite() {
    console.log('favorite');
  }
  share() {
    console.log('share');
  }
  unread() {
    console.log('unread');
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
    /*  this.navCtrl.push("ItemDetailPage", {
      item: item,
    }); */
  }
}
