import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratosQuentesPageRoutingModule } from './pratos-quentes-routing.module';

import { PratosQuentesPage } from './pratos-quentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratosQuentesPageRoutingModule
  ],
  declarations: [PratosQuentesPage]
})
export class PratosQuentesPageModule {}
