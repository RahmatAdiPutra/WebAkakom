import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailFeedback } from './detail-feedback';

@NgModule({
  declarations: [
    DetailFeedback,
  ],
  imports: [
    IonicPageModule.forChild(DetailFeedback),
  ],
  exports: [
    DetailFeedback
  ]
})
export class DetailFeedbackModule {}
