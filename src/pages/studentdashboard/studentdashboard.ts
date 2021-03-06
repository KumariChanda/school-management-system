import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuToggle, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the StudentdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentdashboard',
  templateUrl: 'studentdashboard.html',
})
export class StudentdashboardPage {


  tab1Root: any = HomePage;
  tab2Root: any = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
