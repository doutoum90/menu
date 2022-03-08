import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Items } from '../../providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  item: any;

  constructor(
    public readonly navCtrl: NavController,
    private readonly activatedRoute: ActivatedRoute,
    private readonly items: Items
  ) {
    this.item = items.getItemByName(this.activatedRoute.snapshot.params.name);
  }
}
