import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  minDate: string;
  product = {
    name: '',
    expirationDate: '',
    description: '', 
    quantity: 0,
    price: 0,
    image: '' // URL ou base64 da imagem
  };

  constructor(
    private storage: Storage, 
    private alertController: AlertController
  ) {
    this.minDate = new Date().toISOString();
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Prompt
      });

      this.product.image = `data:image/jpeg;base64,${image.base64String}`;
    } catch (error) {
      console.error('Erro ao capturar imagem:', error);
      this.showAlert('Erro', 'Não foi possível acessar a câmera');
    }
  }

  async saveProduct() {
    // Validações reforçadas
    if (!this.product.name?.trim()) {
      this.showAlert('Atenção', 'Informe o nome do produto!');
      return;
    }

    if (this.product.price <= 0 || isNaN(this.product.price)) {
      this.showAlert('Atenção', 'O preço deve ser maior que zero!');
      return;
    }

    if (!this.product.expirationDate) {
      this.showAlert('Atenção', 'Selecione a data de validade!');
      return;
    }

    try {
      const produtos = (await this.storage.get('produtos')) || []; // Usando 'produtos' para manter consistência
      
      // Adiciona metadados
      const novoProduto = {
        ...this.product,
        id: Date.now().toString(),
        createdAt: new Date().toISOString()
      };

      produtos.push(novoProduto);
      await this.storage.set('produtos', produtos); // Chave corrigida para 'produtos'
      
      this.showAlert('Sucesso', 'Produto cadastrado com sucesso!');
      this.resetForm();
      
      // Dispara evento para atualizar a Tab1
      window.dispatchEvent(new Event('storage'));
      
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
      this.showAlert('Erro', 'Não foi possível salvar o produto');
    }
  }

  resetForm() {
    this.product = { 
      name: '', 
      expirationDate: '', 
      description: '', 
      quantity: 0, 
      price: 0, 
      image: '' 
    };
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}