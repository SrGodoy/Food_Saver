import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
})
export class Tab2Page implements OnInit {
  produtosCarrinho: any[] = [];

 constructor(private carrinhoService: CarrinhoService, private http: HttpClient,private router: Router) {}


  ngOnInit() {
    this.produtosCarrinho = this.carrinhoService.getProdutos();
  }

  comprar() {
     const produtosParaComprar = this.produtosCarrinho;

  this.http.post('http://10.0.2.2:8080/realizar_venda.php', produtosParaComprar).subscribe({
    next: (res: any) => {
      if (res.status === 'success') {
        alert('Compra realizada com sucesso!');
        this.carrinhoService.limparCarrinho();
        this.produtosCarrinho = [];
      } else {
        alert('Erro na compra: ' + res.message);
      }
    },
    error: err => {
      alert('Erro no servidor: ' + err.message);
    }
  });
  }

  removerItem(id: string) {
    this.carrinhoService.removerProduto(id);
    this.produtosCarrinho = this.carrinhoService.getProdutos();
  }

voltarLoja() {
  
  this.router.navigate(['/tabs/tab1']);
}


}
