import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TranslateModule } from '@ngx-translate/core';
import { LoginPage } from './login/login';
import { SignupPage } from './signup/signup';
import { TutorialPage } from './tutorial/tutorial';
import { WelcomePage } from './welcome/welcome';
import { PublicPageRoutingModule } from './public-routing.module';

@NgModule({
  imports: [
    TranslateModule.forChild(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PublicPageRoutingModule,
  ],
  declarations: [LoginPage, SignupPage, TutorialPage, WelcomePage],
  exports: [LoginPage, SignupPage, TutorialPage, WelcomePage],
})
export class PublicPageModule {}
