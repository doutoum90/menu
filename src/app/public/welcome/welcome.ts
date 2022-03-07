import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  styleUrls: ['./welcome.scss'],
})
export class WelcomePage {
  folder = 'public';
  constructor(public router: Router) {}

  login() {
    // this.navCtrl.push('LoginPage');
    this.router.navigateByUrl('/login');
  }

  signup() {
    this.router.navigateByUrl('/signup');
  }
}
