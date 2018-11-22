import { FirebaseJobProvider } from './../../providers/firebase-job/firebase-job';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { JobCreateComponent } from './../job-create/job-create';
import { StartActiveComponent } from './../start-active/start-active';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import * as firebase from 'Firebase';

@Component({
  selector: 'job-list',
  templateUrl: 'job-list.html'
})
export class JobListComponent {

  items: Array<{ id: number, title: string, note: string, icon: string }> = [];

  constructor(private firebaseJobProvider: FirebaseJobProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
    var self = this;
    this.firebaseJobProvider.readAll().then((res: Array<any>) => {
      self.items = this.formatToList(res);
    });
  }

  formatToList(childSnapshot: Array<any>) {
    return childSnapshot.map(function (item) {
      let val = item.val();
      return {
        id: item.key,
        title: val.name,
        note: val.description,
        icon: 'alarm'
      };
    });
  }

  ionViewCanEnter() {
    return this.authService.authenticated();
  }

  itemTapped(event, item) {
    this.navCtrl.push(StartActiveComponent, {
      id: item.id
    });
  }

  itemPressed(event, item) {
    this.alertCtrl.create({
      title: 'Arquivar?',
      message: 'Deseja arquivar este trabalho?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log(item.id);
            console.log('Agree clicked');
          }
        }
      ]
    }).present();
  }

  eventClickBtnNewJob(event) {
    this.navCtrl.push(JobCreateComponent);
  }

}
