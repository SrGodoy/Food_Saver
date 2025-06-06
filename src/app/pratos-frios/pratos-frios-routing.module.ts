import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratosFriosPage } from './pratos-frios.page';

const routes: Routes = [
  {
    path: '',
    component: PratosFriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratosFriosPageRoutingModule {}
