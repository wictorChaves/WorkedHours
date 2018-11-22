import { FirebaseArchiveProvider } from './../../providers/firebase-archive/firebase-archive';
import { FirebaseJobProvider } from './../../providers/firebase-job/firebase-job';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { JobCreateComponent } from './../job-create/job-create';
import { StartActiveComponent } from './../start-active/start-active';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'job-archive',
  templateUrl: 'job-archive.html'
})
export class JobArchiveComponent {

  items: Array<{ id: number, title: string, note: string, icon: string }> = [];

  constructor(private firebaseJobProvider: FirebaseJobProvider, private firebaseArchiveProvider: FirebaseArchiveProvider, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
    this.loadList();
  }

  loadList() {
    var self = this;
    this.firebaseArchiveProvider.readAll().then((res: Array<any>) => {
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
    this.alertCtrl.create({
      title: 'Restaurar?',
      message: 'Deseja restaurar este trabalho?',
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
            var self = this;
            self.firebaseArchiveProvider.readById(item.id).then((res: any) => {
              self.firebaseJobProvider.create(res.val()).then((res: any) => {
                self.firebaseArchiveProvider.remove(item.id).then((res: any) => {
                  this.loadList();
                  this.alertCtrl.create({
                    title: 'Restaurado',
                    subTitle: 'Item restaurado com sucesso!',
                    buttons: ['ok']
                  }).present();
                });
              });
            });
          }
        }
      ]
    }).present();
  }

  itemPressed(event, item) {
    this.alertCtrl.create({
      title: 'Deletar?',
      message: 'Deseja deletar este trabalho?',
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
            this.firebaseArchiveProvider.remove(item.id).then((res: any) => {
              this.loadList();
              this.alertCtrl.create({
                title: 'Deletado',
                subTitle: 'Item deletado com sucesso!',
                buttons: ['ok']
              }).present();
            });
          }
        }
      ]
    }).present();
  }

  eventClickBtnNewJob(event) {
    this.navCtrl.push(JobCreateComponent);
  }

}
