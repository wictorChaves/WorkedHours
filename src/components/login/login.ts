import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { JobListComponent } from './../job-list/job-list';
import { CreateUserComponent } from './../create-user/create-user';
import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import * as firebase from 'Firebase';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  user = {};

  constructor(private navCtrl: NavController, public alertCtrl: AlertController, public authService: AuthServiceProvider) {

  }

  ionViewCanEnter() {
    if (this.authService.authenticated()) {
      this.navCtrl.setRoot(JobListComponent);
    }
  } 

  eventSubmit() {
    if (this.validation()) {
      var self = this;
      firebase.auth().signInWithEmailAndPassword(this.user['email'], this.user['password']).then(() => {
        self.successAlert('Usuário logado!');
        this.navCtrl.setRoot(JobListComponent);
      }).catch(function (error) {
        self.customMessage(error.code, error.message);
      });
    }
  }

  customMessage(errorCode, errorMessage) {
    switch (errorCode) {
      case 'auth/user-not-found': {
        errorMessage = 'Usuário não cadastrado';
        break;
      }
      case 'auth/wrong-password': {
        errorMessage = 'Senha incorreta';
        break;
      }
    }
    console.log(errorCode);
    this.erroAlert(errorMessage);
  }

  validation() {
    if (this.isEmpty(this.user['email'])) {
      this.erroAlert('Favor preencher o e-mail!');
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

  eventBtnCreateAccount(event) {
    this.navCtrl.push(CreateUserComponent);
  }

}
