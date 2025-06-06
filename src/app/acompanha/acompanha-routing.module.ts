import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcompanhaPage } from './acompanha.page';

const routes: Routes = [
  {
    path: '',
    component: AcompanhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcompanhaPageRoutingModule {}
