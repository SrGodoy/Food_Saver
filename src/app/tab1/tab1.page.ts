import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  searchText: string = '';
  produtos: any[] = [];


  constructor(private router: Router, private menuCtrl: MenuController, private toastController: ToastController,
  private storage: Storage  ) { }

 async ngOnInit() {
    await this.storage.create();
    this.carregarProdutos();

      window.addEventListener('storage', () => {
      this.carregarProdutos();
    });
  }

   async carregarProdutos() {
    this.produtos = (await this.storage.get('produtos')) || [];
  }

  adicionarAoCarrinho(nome: string, preco: number, imagem: string) {
    // Implemente sua lógica do carrinho aqui
    console.log('Produto adicionado:', nome, preco, imagem);
  }

  //data 
 formatarData(data: string): string {
    if (!data) return '';
    return new Date(data).toLocaleDateString('pt-BR'); // Formato "dd/mm/aaaa"
  }

  formatarPreco(preco: number): string {
    return preco.toFixed(2).replace('.', ',');
  }



}















  
