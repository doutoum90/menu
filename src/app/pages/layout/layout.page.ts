import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {
  Tab1Root,
  Tab2Root,
  Tab3Root,
  Tab4Root,
  Tab5Root,
} from 'src/app/constants';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;

  tab1Title = ' ';
  tab2Title = ' ';
  tab3Title = ' ';
  tab4Title = ' ';
  tab5Title = ' ';
  ngOnInit(): void {
    this.translateService.setDefaultLang('fr');
    this.translateService
      .get([
        'TAB1_TITLE',
        'TAB2_TITLE',
        'TAB3_TITLE',
        'TAB4_TITLE',
        'TAB5_TITLE',
      ])
      .subscribe((values) => {
        this.tab1Title = values['TAB1_TITLE'];
        this.tab2Title = values['TAB2_TITLE'];
        this.tab3Title = values['TAB3_TITLE'];
        this.tab3Title = values['TAB3_TITLE'];
        this.tab4Title = values['TAB4_TITLE'];
        this.tab5Title = values['TAB5_TITLE'];
      });
  }
  constructor(
    public readonly navCtrl: NavController,
    public readonly translateService: TranslateService,
    public readonly router: Router
  ) {
  }

  open(name: string) {
    if (name !== '') {
      this.router.navigate([`pages/${name}`]);
    } else {
      this.router.navigate(['pages']);
    }
  }
}
