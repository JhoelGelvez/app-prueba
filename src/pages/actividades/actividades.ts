import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ACTIVIDADES } from "../../data/data.actividad";

/**
 * Generated class for the ActividadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actividades',
  templateUrl: 'actividades.html',
})
export class ActividadesPage {

  formActividad : FormGroup;
  act: any [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.formActividad = this.formBuilder.group({
      nombreAct: ['', Validators.required],
    });
  }

  AddActividad(){    
    ACTIVIDADES.push(this.formActividad.value.nombreAct);
    this.act = ACTIVIDADES.slice(0);
    this.formActividad.reset();
  }

  EliminarAct(activi){
    let index = this.act.indexOf(activi);

    if(index > -1){
      this.act.splice(index, 1);
    }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActividadesPage');
  }

}
