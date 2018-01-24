import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MainPage } from '../main/main';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  @ViewChild('nama') nama;
  @ViewChild('password') password;

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert(message: string){
    this.alertCtrl.create({
      title: 'Hai',
      subTitle: message,
      buttons: ['OK']
    }).present()
  }

  login() {
    console.log('mau login: ', this.nama.value, this.password.value);
    
    this.fire.auth.signInWithEmailAndPassword(this.nama.value, this.password.value)
      .then( data => {
        console.log('dapat data: ', data);
        this.showAlert('Anda Berhasil masuk')
        this.navCtrl.setRoot( MainPage )
      }).catch( err => {
        console.log('dapat error: ', err);
        this.showAlert(err.message)
      })
  }

}
