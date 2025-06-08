import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private navController: NavController
  ) {}

  loading: boolean = true;


ngOnInit() {
  }



  ionViewDidEnter() {
    // Forçar recarregamento ou reinicialização da página
    this.reloadPage();
  }

  reloadPage() {
 
    this.navController.navigateRoot('/tabs/tab2', { animated: false });
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
