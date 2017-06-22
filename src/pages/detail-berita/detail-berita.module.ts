import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailBerita } from './detail-berita';

@NgModule({
  declarations: [
    DetailBerita,
  ],
  imports: [
    IonicPageModule.forChild(DetailBerita),
  ],
  exports: [
    DetailBerita
  ]
})
export class DetailBeritaModule {}
