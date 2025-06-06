import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcompanhaPageRoutingModule } from './acompanha-routing.module';

import { AcompanhaPage } from './acompanha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcompanhaPageRoutingModule
  ],
  declarations: [AcompanhaPage]
})
export class AcompanhaPageModule {}
