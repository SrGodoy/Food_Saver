import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratosFriosPageRoutingModule } from './pratos-frios-routing.module';

import { PratosFriosPage } from './pratos-frios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratosFriosPageRoutingModule
  ],
  declarations: [PratosFriosPage]
})
export class PratosFriosPageModule {}
