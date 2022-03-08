import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { User } from '../../providers';
import { MainPage } from '../../pages';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  signinformGroup: FormGroup;
  private loginErrorString: string;

  constructor(
    public readonly navCtrl: NavController,
    public readonly user: User,
    public readonly toastCtrl: ToastController,
    public readonly translateService: TranslateService,
    private readonly router: Router
  ) {
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });
  }

  ngOnInit() {
    this.signinformGroup = new FormGroup({
      email: new FormControl('john@doe.fr'),
      password: new FormControl('testtest'),
    });
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.signinformGroup.value).subscribe(
      (resp) => {
        this.router.navigateByUrl('/pages/list-master');
      },
      (err) => {
        this.router.navigateByUrl('/pages/list-master');
      }
    );
  }
}
