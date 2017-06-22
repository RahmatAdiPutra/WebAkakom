import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Server } from '../server/server';
/**
 * Generated class for the Sejarah page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sejarah',
  templateUrl: 'sejarah.html',
})
export class Sejarah {
public alamatURL : Server;
  public items     : any = [];

  constructor(public navCtrl  : NavController,
              public navParams: NavParams,
              public http     : Http)
  {

  }

 
  ionViewWillEnter()
  {
    this.load();
  }

  load()
  {
    this.alamatURL = new Server();
    this.http.get(this.alamatURL.getUrl() + 'tampilTentangKampus.php')
    .map(res => res.json())
    .subscribe(data =>
    {
       this.items = data;
    });
  }
}
