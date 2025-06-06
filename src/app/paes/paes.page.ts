import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IndexedDBService } from '../services/indexed-db.service'; 

@Component({
  selector: 'app-paes',
  templateUrl: './paes.page.html',
  styleUrls: ['./paes.page.scss'],
})
export class PaesPage {
  searchText: string = '';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private indexedDBService: IndexedDBService // iniciando o banco 
  ) {}

  async ngOnInit() {
    console.log('Inicializando IndexedDB...');
   
  }

  search(event: any) {
    console.log('Buscando: ', this.searchText);
  }



  goToPaes() {
    this.router.navigateByUrl('/tabs/paes');
  }

  async adicionarAoCarrinho(nome: string, preco: number, imagem: string) {
    const quantidade = 1;  

    try {
      await this.indexedDBService.addItem(nome, preco, quantidade, imagem);
      this.mostrarToast('Produto adicionado ao carrinho!');
    } catch (error) {
      this.mostrarToast('Erro ao adicionar produto ao carrinho.', 'danger');
    }
  }

 //notificacao
  async mostrarToast(mensagem: string, cor: string = 'success') {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 1000,  
      color: cor,   
      position: 'bottom'
    });
    toast.present();
  }
}

