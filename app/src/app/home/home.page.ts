import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public type: string;

  constructor() { }

  openModal() {


  }
  setType(type: string) {
    this.type = type;

  }

}