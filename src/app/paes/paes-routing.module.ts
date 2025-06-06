import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaesPage } from './paes.page';

const routes: Routes = [
  {
    path: '',
    component: PaesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaesPageRoutingModule {}
