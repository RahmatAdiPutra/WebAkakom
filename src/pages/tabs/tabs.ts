import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { Berita } from '../berita/berita';
import { Info } from '../info/info';

@Component({
selector: 'page-tabs',
  templateUrl: 'tabs.html'
  })
export class TabsPage {
tab1Root: any = Berita;
tab2Root: any = Info;
tab3Root: any = HomePage;
  
  constructor() {
  }

}
