import { DatetimeHelper } from './../../helper/DatetimeHelper';
import { AuthServiceProvider } from './../auth-service/auth-service';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class FirebaseArchiveProvider {

  url = this.authService.getPathUser() + '/archive/';

  constructor(public authService: AuthServiceProvider) {
  }

  create(obj) {
    let newObj = firebase.database().ref(this.url).push();
    newObj.set(this.setDatetime(obj));
    return newObj;
  }

  readAll() {
    return new Promise((resolve, reject) => {
      firebase.database().ref(this.url).orderByChild('updated_at').on('value', resp => {
        var items = [];
        resp.forEach(childSnapshot => {
          items.push(childSnapshot);
        });
        resolve(items);
      });
    });
  }

  readById(id) {
    return new Promise((resolve, reject) => {
      let newInfo = firebase.database().ref(this.url + id);
      newInfo.on('value', resp => {
        resolve(resp);
      });
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      resolve(firebase.database().ref(this.url + id).remove());
    });
  }

  setDatetime(obj) {
    obj['created_at'] = DatetimeHelper.getTimeStamp();
    obj['updated_at'] = DatetimeHelper.getTimeStamp();
    return obj;
  }

}
