import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaesPageRoutingModule } from './paes-routing.module';
import { PaesPage } from './paes.page';
import { RouterModule,Routes } from '@angular/router';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';


const routes: Routes = [
  {
    path: '',
    component: PaesPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    PaesPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaesPage]
})
export class PaesPageModule {}
