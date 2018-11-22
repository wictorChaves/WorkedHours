import { DatetimeHelper } from './../../helper/DatetimeHelper';
import { AuthServiceProvider } from './../auth-service/auth-service';
import { Injectable } from '@angular/core';
import * as firebase from 'Firebase';

@Injectable()
export class FirebaseJobProvider {

  url = this.authService.getPathUser() + '/job/';

  constructor(public authService: AuthServiceProvider) {
  }

  create(obj) {
    let newObj = firebase.database().ref(this.url).push();
    newObj.set(this.setDatetime(obj));
    return newObj;
  }

  readAll() {
    return new Promise((resolve, reject) => {
      firebase.database().ref(this.url).on('value', resp => {
        var items = [];
        resp.forEach(childSnapshot => {
          items.push(childSnapshot);
        });
        resolve(items);
      });
    });
  }

  setDatetime(obj) {
    obj['created_at'] = DatetimeHelper.getTimeStamp();
    obj['updated_at'] = DatetimeHelper.getTimeStamp();
    return obj;
  }

}
