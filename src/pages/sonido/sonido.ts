import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ANIMALES } from "../../data/data,autores";
import { Animal } from "../../interfaces/autor.interface";

/**
 * Generated class for the SonidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sonido',
  templateUrl: 'sonido.html',
})
export class SonidoPage {

  animales:any [] = [];
  audio = new Audio();
  audioTiempo: any;

  constructor(public navCtrl: NavController) {
    this.animales = ANIMALES.slice(0);
  }

  reproducir(animal:Animal){
    console.log (animal);
    this.pausar_audio(animal);
    if(animal.reproduciendo){
      animal.reproduciendo=false;
      return
    }

    this.audio.src = animal.audio;

    this.audio.load();
    this.audio.play();
    animal.reproduciendo = true;
    this.audioTiempo = setTimeout (()=> animal.reproduciendo = false, animal.duracion * 1000);
  }

  private pausar_audio(animalSel:Animal){

    clearTimeout(this.audioTiempo)
    this.audio.pause();
    this.audio.currentTime = 0;
    for(let animal of this.animales){
      if(animal.nombre != animalSel.nombre){
        animal.reproduciendo = false;
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SonidoPage');
  }

}
