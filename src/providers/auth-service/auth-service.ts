import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class AuthServiceProvider {

  authenticated(): boolean {
    return firebase.auth().currentUser ? true : false;
  }

  getPathUser(): string {
    return 'users/' + firebase.auth().currentUser.uid + "/";
  }

}
