import { JobCreateComponent } from './../job-create/job-create';
import { StartActiveComponent } from './../start-active/start-active';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

@Component({
  selector: 'job-list',
  templateUrl: 'job-list.html'
})
export class JobListComponent {

  items: Array<{ id: number, title: string, note: string, icon: string }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('job/').on('value', resp => {
      this.items = [];
      resp.forEach(childSnapshot => {
        this.items.push(this.createItemObj(childSnapshot));
      });
    });
  }

  createItemObj(childSnapshot) {
    let item = childSnapshot.val();
    return {
      id: childSnapshot.key,
      title: item.name,
      note: item.description,
      icon: 'alarm'
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(StartActiveComponent, {
      id: item.id
    });
  }

  eventClickBtnNewJob(event) {
    this.navCtrl.push(JobCreateComponent);
  }

}
