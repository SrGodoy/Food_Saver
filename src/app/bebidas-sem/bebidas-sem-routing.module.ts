import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BebidasSemPage } from './bebidas-sem.page';

const routes: Routes = [
  {
    path: '',
    component: BebidasSemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebidasSemPageRoutingModule {}
