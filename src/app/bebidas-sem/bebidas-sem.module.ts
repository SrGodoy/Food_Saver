import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BebidasSemPageRoutingModule } from './bebidas-sem-routing.module';

import { BebidasSemPage } from './bebidas-sem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BebidasSemPageRoutingModule
  ],
  declarations: [BebidasSemPage]
})
export class BebidasSemPageModule {}
