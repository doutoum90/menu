import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';

import { Api } from '../api/api';

@Injectable()
export class User {
  _user: any;

  constructor(public api: Api) {}

  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).pipe(share());

    seq.subscribe(
      (res: any) => {
        // If the API returned a successful response, mark the user as logged in
        if (res.status == 'success') {
          this._loggedIn(res);
        } else {
        }
      },
      (err) => {
        console.error('ERROR', err);
      }
    );

    return seq;
  }

  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).pipe(share());

    seq.subscribe(
      (res: any) => {
        // If the API returned a successful response, mark the user as logged in
        if (res.status == 'success') {
          this._loggedIn(res);
        }
      },
      (err) => {
        console.error('ERROR', err);
      }
    );

    return seq;
  }

  logout() {
    this._user = null;
  }

  _loggedIn(resp) {
    this._user = resp.user;
  }
}
