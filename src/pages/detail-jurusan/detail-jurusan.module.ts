import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailJurusan } from './detail-jurusan';

@NgModule({
  declarations: [
    DetailJurusan,
  ],
  imports: [
    IonicPageModule.forChild(DetailJurusan),
  ],
  exports: [
    DetailJurusan
  ]
})
export class DetailJurusanModule {}
