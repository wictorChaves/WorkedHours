import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { DatetimeHelper } from './../../helper/DatetimeHelper';
import { StartActiveComponent } from './../start-active/start-active';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the JobCreateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'job-create',
  templateUrl: 'job-create.html'
})
export class JobCreateComponent {

  job = {}

  constructor(private navCtrl: NavController, public authService: AuthServiceProvider) {

  }

  ionViewCanEnter() {
    return this.authService.authenticated();
  } 

  eventSubmit() {
    let newJob = firebase.database().ref('job/').push();
    this.job['created_at'] = DatetimeHelper.getTimeStamp();
    this.job['updated_at'] = DatetimeHelper.getTimeStamp();
    newJob.set(this.job);
    this.navCtrl.push(StartActiveComponent, {
      id: newJob.key
    });
  }

}
