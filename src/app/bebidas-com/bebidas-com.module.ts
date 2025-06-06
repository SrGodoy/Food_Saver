import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BebidasComPageRoutingModule } from './bebidas-com-routing.module';

import { BebidasComPage } from './bebidas-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BebidasComPageRoutingModule
  ],
  declarations: [BebidasComPage]
})
export class BebidasComPageModule {}
