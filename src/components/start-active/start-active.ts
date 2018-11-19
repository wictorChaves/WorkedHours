import { DatetimeHelper } from './../../helper/DatetimeHelper';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the StartActiveComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'start-active',
  templateUrl: 'start-active.html'
})
export class StartActiveComponent {

  id;
  total = DatetimeHelper.second2time(0);
  Job = {};
  items = [];
  labelBtnStart = "Iniciar Atividade";

  ref = firebase.database().ref('job/');

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.id = navParams.get('id');
    let newInfo = firebase.database().ref('job/' + this.id);
    newInfo.on('value', resp => {
      this.Job = resp.val();
      if (!this.Job.hasOwnProperty('worked')) {
        this.Job['worked'] = [];
      } else {
        this.updateListTime();
      }
    });
  }

  changeLabel() {
    this.labelBtnStart = (this.Job['worked'].length % 2 == 0) ? "Iniciar Atividade" : "Parar Atividade";
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  eventClickBtnStartActivity(event: any) {

    let worked: any[] = this.Job['worked'];
    worked.push(DatetimeHelper.getTimeStamp());
    this.Job['worked'] = worked;
    this.updateListTime();
    this.changeLabel();
  }

  updateJob() {
    firebase.database().ref('job/' + this.id).update(this.Job);
  }

  updateListTime() {
    var i = 2;
    this.items = [];
    var countTotal = 0;
    for (i = 2; i <= this.Job['worked'].length; i += 2) {
      let seconds = this.Job['worked'][i - 1] - this.Job['worked'][i - 2];
      this.items.push(DatetimeHelper.second2time(seconds));
      countTotal = countTotal + seconds;
    }
    this.total = DatetimeHelper.second2time(countTotal);
    this.updateJob();
  }

}
