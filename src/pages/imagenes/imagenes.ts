import { Component } from '@angular/core';
import { CrearPage} from '../crear/crear';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImagenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imagenes',
  templateUrl: 'imagenes.html',
})
export class ImagenesPage {
  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
    recogeDatos(ruta)
    {
      this.navCtrl.getPrevious().data.ruta = ruta;
      this.navCtrl.pop();
    }
}
