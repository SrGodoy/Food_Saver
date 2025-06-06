import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexedDBService } from '../services/indexed-db.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  itensCarrinho: any[] = [];
  totalCarrinho: number = 0;
  taxaEntrega: number = 5.00;
  totalComTaxa: number = 0;

  constructor(
    private router: Router,
    private indexedDBService: IndexedDBService,
    private navController: NavController
  ) {}

  loading: boolean = true;


ngOnInit() {
   this.carregarItensCarrinho();
  }



  ionViewDidEnter() {
    // Forçar recarregamento ou reinicialização da página
    this.reloadPage();
  }

  reloadPage() {
 
    this.navController.navigateRoot('/tabs/tab2', { animated: false });
  }


  
  async carregarItensCarrinho() {
    this.loading = true;
    try {
      const itens = await this.indexedDBService.getItems();
      console.log('Itens carregados do IndexedDB:', itens);
      this.itensCarrinho = itens || [];
      this.calcularTotalCarrinho();
    } catch (error) {
      console.error('Erro ao carregar itens do carrinho:', error);
    } finally {
      this.loading = false;
    }
  }

  async removerItem(id: number) {
    try {
      // Chama o serviço para remover o item do IndexedDB
      await this.indexedDBService.deleteItem(id);
      
      
      await this.carregarItensCarrinho();  
      console.log(`Item com ID ${id} removido com sucesso.`);
    } catch (error) {
      console.error('Erro ao remover item:', error);
    }
  }
  


  calcularTotalCarrinho() {
    this.totalCarrinho = this.itensCarrinho.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    this.totalComTaxa = this.totalCarrinho + this.taxaEntrega;
  }


  irParaPagamentos() {
    if (this.itensCarrinho.length === 0) {
      alert('O carrinho está vazio. Adicione produtos antes de prosseguir.');
      return;
    }
    this.router.navigate(['/pagamentos'], {
      queryParams: {
        totalCarrinho: this.totalCarrinho,
        taxaEntrega: this.taxaEntrega,
        totalComTaxa: this.totalComTaxa
      }
    });
  }

  voltarLoja() {
    this.router.navigateByUrl('/tabs/tab1');
  }
}
