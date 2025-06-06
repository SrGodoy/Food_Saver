import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndexedDBService } from '../services/indexed-db.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos: any[] = [];
  pedidosConcluidos: any[] = [];
  totalCarrinho: number = 0;
  taxaEntrega: number = 5.00;
  totalComTaxa: number = 0;

  constructor(
    private route: ActivatedRoute,
    private indexedDBService: IndexedDBService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.carregarDadosCarrinho();
    await this.carregarPedidos();
  }

  async carregarDadosCarrinho() {
    try {
      const dadosCarrinho = await this.indexedDBService.getItems();
      if (dadosCarrinho && dadosCarrinho.length > 0) {
        const carrinho = dadosCarrinho[0];
        this.totalCarrinho = carrinho.totalCarrinho || 0;
        this.taxaEntrega = carrinho.taxaEntrega || 5.00;
        this.totalComTaxa = carrinho.totalComTaxa || 0;
      }
    } catch (error) {
      console.error('Erro ao carregar os dados do carrinho:', error);
    }
  }

  async carregarPedidos() {
    try {
      const itensCarrinho = await this.indexedDBService.getItems();
      this.pedidos = itensCarrinho.map(item => ({
        id: item.id,
        nome: item.name,
        status: 'Em Andamento',
        preco: parseFloat(item.price) || 0,
      }));

      this.totalCarrinho = this.pedidos.reduce((total, pedido) => total + (pedido.preco || 0), 0);
      this.totalComTaxa = this.totalCarrinho + this.taxaEntrega;
    } catch (error) {
      console.error('Erro ao carregar os pedidos:', error);
    }
  }

  async confirmarEntregaDeTodos() {
    try {
      this.pedidos.forEach(pedido => {
        pedido.status = 'Concluído';
        this.pedidosConcluidos.push(pedido);
      });

      this.pedidos = [];
      await this.indexedDBService.clearItems();

      this.totalCarrinho = 0;
      this.totalComTaxa = this.totalCarrinho + this.taxaEntrega;

      await this.indexedDBService.setItem('carrinho', {
        totalCarrinho: this.totalCarrinho,
        taxaEntrega: this.taxaEntrega,
        totalComTaxa: this.totalComTaxa
      });
    } catch (error) {
      console.error('Erro ao confirmar entrega de todos:', error);
    }
  }

  goToPedidos() {
    this.router.navigateByUrl('/tabs/pedidos');
  }

  voltar() {
    this.router.navigateByUrl('/tabs/tab3');
  }
}