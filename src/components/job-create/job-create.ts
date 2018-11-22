import { FirebaseJobProvider } from './../../providers/firebase-job/firebase-job';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { StartActiveComponent } from './../start-active/start-active';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'job-create',
  templateUrl: 'job-create.html'
})
export class JobCreateComponent {

  job = {}

  constructor(private firebaseJobProvider:FirebaseJobProvider, private navCtrl: NavController, public authService: AuthServiceProvider) {

  }

  ionViewCanEnter() {
    return this.authService.authenticated();
  } 

  eventSubmit() {
    let newJob = this.firebaseJobProvider.create(this.job);
    this.navCtrl.setRoot(StartActiveComponent, {
      id: newJob.key
    });
  }

}
