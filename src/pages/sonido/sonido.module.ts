import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SonidoPage } from './sonido';

@NgModule({
  declarations: [
    SonidoPage,
  ],
  imports: [
    IonicPageModule.forChild(SonidoPage),
  ],
})
export class SonidoPageModule {}
