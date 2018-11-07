import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {
    console.log('Hello StartActiveComponent Component');
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
