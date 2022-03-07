import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './page-routing.module';
import { CardsPage } from './cards/cards';
import { ContentPage } from './content/content';
import { ItemCreatePage } from './item-create/item-create';
import { ItemDetailPage } from './item-detail/item-detail';
import { MenuPage } from './menu/menu';
import { ProfilePage } from './profile/profile';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { ListMasterPage } from './list-master/list-master';
import { LayoutPage } from './layout/layout.page';

const components = [
  CardsPage,
  ContentPage,
  ItemCreatePage,
  ItemDetailPage,
  ListMasterPage,
  MenuPage,
  ProfilePage,
  SearchPage,
  SettingsPage,
  TabsPage,
  LayoutPage,
];

@NgModule({
  imports: [
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PagesPageRoutingModule,
  ],
  declarations: components,
  exports: components,
})
export class PagesPageModule {}
