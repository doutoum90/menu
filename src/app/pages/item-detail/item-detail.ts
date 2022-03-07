import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

import { Items } from '../../providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  item: any;

  constructor(
    public readonly navCtrl: NavController,
    navParams: NavParams,
    items: Items
  ) {
    this.item = navParams.get('item') || items.defaultItem;
  }
}
