import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class AuthServiceProvider {

  private isLoggedIn = false;

  constructor() { }

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  authenticated(): boolean {
    return firebase.auth().currentUser ? true : false;
  }

}
