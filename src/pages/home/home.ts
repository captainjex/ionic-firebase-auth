import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { FirstPage } from '../first/first';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  toLoginPage() {
    this.navCtrl.push(LoginPage)
  }
  toRegisterPage() {
    this.navCtrl.push(RegisterPage)
  }

  

}
