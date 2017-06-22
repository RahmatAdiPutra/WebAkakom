import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Sejarah } from '../pages/sejarah/sejarah';
import { VisiMisi } from '../pages/visi-misi/visi-misi';
import { Jurusan } from '../pages/jurusan/jurusan';
import { Berita } from '../pages/berita/berita';
import { Info } from '../pages/info/info';
import { TautanPage } from '../pages/tautan-page/tautan-page';
import { FeedbackPage } from '../pages/feedback-page/feedback-page';
import { Chat } from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
	TabsPage,
	Sejarah,
    VisiMisi,
	Jurusan,
	Berita,
	Info,
	TautanPage,
	FeedbackPage,
	Chat
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	TabsPage,
	Sejarah,
    VisiMisi,
	Jurusan,
	Berita,
	Info,
	TautanPage,
	FeedbackPage,
	Chat
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
