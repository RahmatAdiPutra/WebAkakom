import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail-jurusan',
  templateUrl: 'detail-jurusan.html',
})
export class DetailJurusan {

jurusan;
penjelasan;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.jurusan = this.navParams.get('item').jurusan;
    this.penjelasan = this.navParams.get('item').penjelasan;
  }
 
}
