import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Produto } from '../models/produto';
import { Capacitor } from '@capacitor/core';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  private readonly API_URL = Capacitor.isNativePlatform()
    ? 'http://10.0.2.2:8080/salvar.php'
  : 'http://localhost:8080/salvar.php';

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  async sincronizarProdutos() {
    const produtos: Produto[] = await this.storage.get('produtos') || [];
    const pendentes = produtos.filter(p => p.syncStatus === 'pending');

    for (const produto of pendentes) {
      const sucesso = await this.enviarProduto(produto);

      if (sucesso) {
        produto.syncStatus = 'synced';
        console.log(`✔ Produto sincronizado: ${produto.name}`);
      } else {
        console.warn(`❌ Falha ao sincronizar: ${produto.name}`);
      }
    }

    // Atualiza os produtos no storage
    await this.storage.set('produtos', produtos);
  }

 async enviarProduto(produto: Produto): Promise<boolean> {
  try {
    const resposta = await CapacitorHttp.post({
      url: this.API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: produto
    });

    return resposta.data?.status === 'success';
  } catch (erro) {
    console.error('Erro ao enviar produto:', erro);
    return false;
  }
}
}