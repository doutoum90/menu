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
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  // Attempt to login in through our User service
  doLogin() {
    console.log('login');
    this.user.login(this.signinformGroup.value).subscribe(
      (resp) => {
        // this.navCtrl.push(MainPage);
        console.log('resp', resp);
        this.router.navigateByUrl('/pages/list-master');
      },
      (err) => {
        console.log('err', err);
        /*  this.navCtrl.push(MainPage);
        // Unable to log in
        let toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 3000,
          position: "top",
        });
        toast.present(); */
        this.router.navigateByUrl('/pages/list-master');
      }
    );
  }
}
