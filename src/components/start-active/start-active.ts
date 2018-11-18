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

  Job = {};
  items = [];
  labelBtnStart = "Iniciar Atividade";

  ref = firebase.database().ref('job/');

  constructor(public navCtrl: NavController, private navParams: NavParams) {

    let newInfo = firebase.database().ref('job/' + navParams.get('id'));
    newInfo.on('value', resp => {
      this.Job = resp.val();
      if (!this.Job.hasOwnProperty('worked')) {
        this.Job['worked'] = [];
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
    this.changeLabel();
  }

}
