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

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  ref = firebase.database().ref('job/');

  constructor(public navCtrl: NavController, private navParams: NavParams) {

    console.log("ID: " + navParams.get('id'));

    /*
    console.log("Resultados");
    this.ref.on('value', resp => {
      //this.items = [];


      var returnArr = [];

      resp.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
      });

      console.log(returnArr);

    });*/
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  eventClickBtnStartActivity(event: any) {
    console.log(this.getTimeStamp());
  }

  getTimeStamp(){
    return  Math.round((new Date()).getTime() / 1000);
  }

}
