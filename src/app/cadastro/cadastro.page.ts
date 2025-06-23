import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { Produto } from '../models/produto';
import { Storage } from '@ionic/storage-angular';
import { SyncService } from '../services/sync.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: 'cadastro.page.html'
})
export class CadastroPage {
  produto: Produto = this.novoProduto();

  constructor(
    private storage: Storage,
    private alertCtrl: AlertController,
    private syncService: SyncService
    
  ) {}

  novoProduto(): Produto {
    return {
      id: '',
      name: '',
      quantity: 1,
      price: 0,
      syncStatus: 'pending',
      createdAt: new Date().toISOString()
    };
  }

  async tirarFoto() {
    try {
      const foto = await Camera.getPhoto({
        quality: 80,
        resultType: CameraResultType.Base64
      });
      this.produto.image = `data:image/jpeg;base64,${foto.base64String}`;
    } catch (erro) {
      console.log('Usuário cancelou ou erro na câmera');
    }
  }

  async salvar() {
    // Validação básica
    if (!this.produto.name || this.produto.price <= 0) {
      this.mostrarAlerta('Atenção', 'Nome e preço são obrigatórios!');
      return;
    }

    // Gera ID e timestamp
    this.produto.id = 'prod_' + Date.now();
    this.produto.createdAt = new Date().toISOString();

    // Salva no storage
    const produtos = await this.storage.get('produtos') || [];
    produtos.push(this.produto);
    await this.storage.set('produtos', produtos);
    await this.syncService.sincronizarProdutos();

    this.mostrarAlerta('Sucesso', 'Produto salvo!');
    this.produto = this.novoProduto();
  }

  async mostrarAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }
}