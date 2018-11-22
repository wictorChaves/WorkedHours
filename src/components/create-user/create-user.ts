import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import * as firebase from 'Firebase';
import { ErrorsFirebaseMessages } from '../../helper/ErrorsFirebaseMessages';

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
      var self = this;
      firebase.auth().createUserWithEmailAndPassword(this.user['email'], this.user['password']).then(() => {
        self.successAlert('Usuário cadastrado com sucesso!');
      }).catch(function (error) {
        this.erroAlert(ErrorsFirebaseMessages.CodeToMessages(error.code, error.message));
      });
    }
  }

  validation() {
    if (this.isEmpty(this.user['email'])) {
      this.erroAlert('Favor preencher o e-mail!');
      return false;
    }
    if (this.user['password'] != this.user['confirmPassword']) {
      this.erroAlert('A senha e a confirmação precisam ser iguais');
      return false;
    }
    if (this.isEmpty(this.user['password'])) {
      this.erroAlert('Favor preencher o campo de senha!');
      return false;
    }
    return true;
  }

  isEmpty(value) {
    return value == '' || value == undefined;
  }

  erroAlert(message) {
    this.alert('Opps!', message);
  }

  successAlert(message) {
    this.alert('Tudo certo!', message);
  }

  alert(title, message, btn: Array<string> = ['ok']) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: btn
    });
    alert.present();
  }

}
