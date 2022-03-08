import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { User } from '../../providers';
import { MainPage } from '../../pages';
import { FormControl, FormGroup } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  signupformGroup: FormGroup;
  private signupErrorString: string;

  constructor(
    public readonly navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public readonly translateService: TranslateService
  ) {
    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    });
  }

  ngOnInit() {
    this.signupformGroup = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      username: new FormControl(),
      passwordConfirm: new FormControl(),
    });
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.signupformGroup.value).subscribe(
      (resp) => {

      },
      (err) => {
      }
    );
  }
}
