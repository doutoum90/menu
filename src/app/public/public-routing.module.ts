import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login/login';
import { SignupPage } from './signup/signup';
import { TutorialPage } from './tutorial/tutorial';
import { WelcomePage } from './welcome/welcome';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
  },
  {
    path: 'welcome',
    component: TutorialPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'signup',
    component: SignupPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule {}
