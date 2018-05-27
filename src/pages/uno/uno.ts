import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the UnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uno',
  templateUrl: 'uno.html',
})
export class UnoPage {
  res: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private alertCtrl: AlertController)
  {
    console.log(this.res = navParams.data[1]);
  }

  getProductos(){


    this.http.get('http://localhost:8000/usuario', {responseType: 'text'})
      .subscribe(data => {   // data is a string
        console.log(data);
      });

  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad UnoPage');
  }

}


