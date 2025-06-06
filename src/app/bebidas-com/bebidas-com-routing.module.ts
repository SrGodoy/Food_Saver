import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BebidasComPage } from './bebidas-com.page';

const routes: Routes = [
  {
    path: '',
    component: BebidasComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BebidasComPageRoutingModule {}
