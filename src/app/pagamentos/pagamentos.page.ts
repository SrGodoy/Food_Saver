import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.page.html',
  styleUrls: ['./pagamentos.page.scss'],
})
export class PagamentosPage implements OnInit {
  totalCarrinho: number = 0;
  taxaEntrega: number = 5.00;
  totalComTaxa: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Pegando os parâmetros passados da página anterior
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.totalCarrinho = parseFloat(params['totalCarrinho']);
        this.taxaEntrega = parseFloat(params['taxaEntrega']);
        this.totalComTaxa = parseFloat(params['totalComTaxa']);
      }
    });
  }
 irParaCancelar(){
  this.router.navigate(['/tab2']);
 }

 irParaMenu(){
  this.router.navigate(['/tab1']);
 }

  irParaPedidos() {
    this.router.navigate(['/pedidos'], {
      queryParams: {
        totalCarrinho: this.totalCarrinho,
        taxaEntrega: this.taxaEntrega,
        totalComTaxa: this.totalComTaxa,
      },
    });
  }
  isChecked: boolean = false;

toggleCheckbox() {
  this.isChecked = !this.isChecked;
}



}
