import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { Sejarah } from '../pages/sejarah/sejarah';
import { VisiMisi } from '../pages/visi-misi/visi-misi';
import { Jurusan } from '../pages/jurusan/jurusan';
import { TautanPage } from '../pages/tautan-page/tautan-page';
import { FeedbackPage } from '../pages/feedback-page/feedback-page';
import { Chat } from '../pages/chat/chat';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = TabsPage;

	pages: Array<{title: string, component: any, icon: string}>;
	
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    { title: 'Beranda', component: TabsPage, icon: "home" },
	{ title: 'Sejarah Kampus', component: Sejarah, icon: "bookmarks" },
    { title: 'Visi & Misi', component: VisiMisi, icon: "ribbon" },
	{ title: 'Program Studi', component: Jurusan, icon: "school" },
	{ title: 'Tautan', component: TautanPage, icon: "bookmark" },
	{ title: 'Feedback', component: FeedbackPage, icon: "thumbs-up" },
	{ title: 'Chating', component: Chat, icon: "chatboxes" }
    ];
 let config = {
   apiKey: "AIzaSyAArfhPBwmRjN5SqAOIWW_NL1akIxnoq6g",
    authDomain: "mymenu-3ccc8.firebaseapp.com",
    databaseURL: "https://mymenu-3ccc8.firebaseio.com",
    projectId: "mymenu-3ccc8",
    storageBucket: "mymenu-3ccc8.appspot.com",
    messagingSenderId: "740203844716"
  };
  firebase.initializeApp(config);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
	
  }
  

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
