import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TautanPage } from './tautan-page';

@NgModule({
  declarations: [
    TautanPage,
  ],
  imports: [
    IonicPageModule.forChild(TautanPage),
  ],
  exports: [
    TautanPage
  ]
})
export class TautanPageModule {}
