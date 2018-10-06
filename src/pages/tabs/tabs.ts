import { Component } from '@angular/core';

import { SonidoPage } from '../sonido/sonido';
import { ActividadesPage } from '../actividades/actividades';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SonidoPage;
  tab2Root = ActividadesPage;

  constructor() {

  }
}
