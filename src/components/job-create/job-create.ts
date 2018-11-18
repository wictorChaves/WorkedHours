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

  constructor(private navCtrl: NavController) {

  }

  eventSubmit() {
    console.log(this.job)
    let newInfo = firebase.database().ref('job/').push();
    newInfo.set(this.job);
    console.log(newInfo.key);
    this.navCtrl.push(StartActiveComponent, {
      id: newInfo.key
    });
  }

}
