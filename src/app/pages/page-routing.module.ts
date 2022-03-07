import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsPage } from './cards/cards';
import { ContentPage } from './content/content';
import { ItemCreatePage } from './item-create/item-create';
import { ItemDetailPage } from './item-detail/item-detail';
import { LayoutPage } from './layout/layout.page';
import { ListMasterPage } from './list-master/list-master';
import { MenuPage } from './menu/menu';
import { ProfilePage } from './profile/profile';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        component: CardsPage,
      },
      {
        path: 'contenu',
        component: ContentPage,
      },
      {
        path: 'item-create',
        component: ItemCreatePage,
      },
      {
        path: 'item-detail',
        component: ItemDetailPage,
      },
      {
        path: 'list-master',
        component: ListMasterPage,
      },
      {
        path: 'menu',
        component: MenuPage,
      },
      {
        path: 'profil',
        component: ProfilePage,
      },
      {
        path: 'search',
        component: SearchPage,
      },
      {
        path: 'settings',
        component: SettingsPage,
      },
      {
        path: 'tabs',
        component: TabsPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
