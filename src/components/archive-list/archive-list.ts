import { Component } from '@angular/core';

/**
 * Generated class for the ArchiveListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'archive-list',
  templateUrl: 'archive-list.html'
})
export class ArchiveListComponent {

  text: string;

  constructor() {
    console.log('Hello ArchiveListComponent Component');
    this.text = 'Hello World';
  }

}
