import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import * as firebase from 'Firebase';

@Component({
  selector: 'create-user',
  templateUrl: 'create-user.html'
})
export class CreateUserComponent {

  user = {};

  constructor(public alertCtrl: AlertController) {
  }

  eventSubmit() {
    if (this.validation()) {

    }
  }

  validation() {
    if (this.isEmpty(this.user['email'])) {
      this.erroAlert('Favor preencher o e-mail!');
      return false;
    }
    if (this.user['password'] != this.user['confirm']) {
      this.erroAlert('A senha e a confirmação precisam ser iguais');
      return false;
    }    
    if (this.isEmpty(this.user['password'])) {
      this.erroAlert('Favor preencher o campo de senha!');
      return false;
    }
    return true;
  }

  isEmpty(value){
    return value == '' || value == undefined;
  }

  erroAlert(message) {
    const alert = this.alertCtrl.create({
      title: 'Opps!',
      subTitle: 'A senha e a confirmação precisam ser iguais',
      buttons: ['OK']
    });
    alert.present();
  }

}
