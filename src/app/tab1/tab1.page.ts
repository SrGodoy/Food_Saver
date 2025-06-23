import { Component } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
})
export class Tab1Page {
  produtos: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) {}

  // Este método é chamado toda vez que a aba/tab for exibida
  ionViewWillEnter() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.listarProdutos().subscribe(res => {
      if (res.status === 'success') {
        this.produtos = res.produtos.map(p => {
          if (p.image && !p.image.startsWith('data:image')) {
            p.image = 'data:image/jpeg;base64,' + p.image;
          }
          return p;
        });
      } else {
        console.error('Falha ao carregar produtos');
      }
    });
  }

  adicionarAoCarrinho(produto: any) {
    this.carrinhoService.adicionarProduto(produto);
    alert(`${produto.name} adicionado ao carrinho!`);
  }
}
