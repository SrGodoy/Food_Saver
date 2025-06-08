import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

 

  constructor(
    private route: ActivatedRoute,

    private router: Router
  ) {}

  async ngOnInit() {
  
  }

  
  goToPedidos() {
    this.router.navigateByUrl('/tabs/pedidos');
  }

  voltar() {
    this.router.navigateByUrl('/tabs/tab3');
  }
}