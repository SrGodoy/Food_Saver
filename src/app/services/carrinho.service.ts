import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private itensCarrinho: any[] = [];

  adicionarProduto(produto: any) {
    // Se o produto já existir no carrinho, só aumenta a quantidade
    const index = this.itensCarrinho.findIndex(p => p.id === produto.id);
    if (index !== -1) {
      this.itensCarrinho[index].quantity += 1;
    } else {
      this.itensCarrinho.push({ ...produto, quantity: 1 });
    }
  }

  removerProduto(produtoId: string) {
    this.itensCarrinho = this.itensCarrinho.filter(p => p.id !== produtoId);
  }

  limparCarrinho() {
    this.itensCarrinho = [];
  }

  getProdutos() {
    return [...this.itensCarrinho]; // retorna cópia
  }
}
