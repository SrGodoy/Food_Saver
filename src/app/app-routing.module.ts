import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  

  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },

  {
    path: 'paes',
    loadChildren: () => import('./paes/paes.module').then( m => m.PaesPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'pagamentos',
    loadChildren: () => import('./pagamentos/pagamentos.module').then( m => m.PagamentosPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then( m => m.BebidasPageModule)
  },
  {
    path: 'bebidas-sem',
    loadChildren: () => import('./bebidas-sem/bebidas-sem.module').then( m => m.BebidasSemPageModule)
  },
  {
    path: 'bebidas-com',
    loadChildren: () => import('./bebidas-com/bebidas-com.module').then( m => m.BebidasComPageModule)
  },
  {
    path: 'pratos-quentes',
    loadChildren: () => import('./pratos-quentes/pratos-quentes.module').then( m => m.PratosQuentesPageModule)
  },
  {
    path: 'pratos-frios',
    loadChildren: () => import('./pratos-frios/pratos-frios.module').then( m => m.PratosFriosPageModule)
  },
  {
    path: 'acompanha',
    loadChildren: () => import('./acompanha/acompanha.module').then( m => m.AcompanhaPageModule)
  },
  {
    path: 'sobremesa',
    loadChildren: () => import('./sobremesa/sobremesa.module').then( m => m.SobremesaPageModule)
  },
  {
    path: 'combos',
    loadChildren: () => import('./combos/combos.module').then( m => m.CombosPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
