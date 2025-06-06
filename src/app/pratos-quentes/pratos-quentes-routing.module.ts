import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PratosQuentesPage } from './pratos-quentes.page';

const routes: Routes = [
  {
    path: '',
    component: PratosQuentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PratosQuentesPageRoutingModule {}
