import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IndexedDBService } from '../services/indexed-db.service'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  searchText: string = '';




  constructor(private router: Router, private menuCtrl: MenuController, private toastController: ToastController,
    private indexedDBService: IndexedDBService) { }

  ngOnInit() {
   
  }


  search(event: any) {
    console.log('Buscando: ', this.searchText);
  }

  async adicionarAoCarrinho(nome: string, preco: number, imagem: string) {
    const quantidade = 1;  

    try {
      await this.indexedDBService.addItem(nome, preco, quantidade, imagem);
      this.mostrarToast('Produto adicionado ao carrinho!');
      
    } catch (error) {
      console.error('Erro ao adicionar produto ao carrinho:', error);
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







  goToPaes() {
    this.router.navigateByUrl('/tabs/paes');
  }
  goToBebidas() {
    this.router.navigateByUrl('/bebidas');
  }
  goToPratosQuentes() {
    this.router.navigateByUrl('/pratos-quentes');
  }
  goToPratosFrios() {
    this.router.navigateByUrl('/pratos-frios');
  }
  goToAcompanha() {
    this.router.navigateByUrl('/acompanha');
  }
  goToSobremesas() {
    this.router.navigateByUrl('/sobremesa');
  }
  goToCombos() {
    this.router.navigateByUrl('/combos');
  }
  goToOfertas() {
    this.router.navigateByUrl('/ofertas');
  }





}




  
