import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IndexedDBService {
  private dbName = 'carrinhoDB';
  private storeName = 'itensCarrinho';
  private pedidosStoreName = 'pedidosConcluidos';

  constructor() {}

  public async initializeDatabase(): Promise<void> {
    try {
      await this.openDB();
      console.log('Banco de dados inicializado');
    } catch (error) {
      console.error('Erro ao inicializar o banco de dados:', error);
    }
  }

  private async openDB(): Promise<IDBDatabase> {
    const request = indexedDB.open(this.dbName, 1);
    return new Promise<IDBDatabase>((resolve, reject) => {
      request.onsuccess = (event) => resolve((event.target as IDBRequest).result);
      request.onerror = () => reject('Erro ao abrir o banco de dados');
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBRequest).result;

        if (db.objectStoreNames.contains(this.pedidosStoreName)) {
          db.deleteObjectStore(this.pedidosStoreName);
        }

        if (!db.objectStoreNames.contains(this.pedidosStoreName)) {
          db.createObjectStore(this.pedidosStoreName, { keyPath: 'id', autoIncrement: true });
        }

        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }
      };
    });
  }

  async getItems(): Promise<any[]> {
    const db = await this.openDB();
    return new Promise<any[]>((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject('Erro ao recuperar itens do carrinho');
    });
  }

  async clearItems(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.openDB().then((db) => {
        const transaction = db.transaction(this.storeName, 'readwrite');
        const store = transaction.objectStore(this.storeName);
        const request = store.clear();
        request.onsuccess = () => resolve();
        request.onerror = (event) => reject(event);
      }).catch((error) => reject(error));
    });
  }

  async addItem(name: string, price: number, quantity: number = 1, imageUrl: string): Promise<void> {
    const db = await this.openDB();
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
  
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => {
        const existingItem = getAllRequest.result.find((item: any) => item.name === name && item.imageUrl === imageUrl);
        
        if (existingItem) {
          existingItem.quantity += quantity;
          const putRequest = store.put(existingItem);
          
          putRequest.onsuccess = () => {
            console.log('Quantidade do item atualizada:', existingItem);
            resolve();
          };
          putRequest.onerror = (event) => {
            console.error('Erro ao atualizar item:', event);
            reject(event);
          };
        } else {
          const item = { name, price, quantity, imageUrl };
          const request = store.add(item);
          
          request.onsuccess = () => {
            console.log('Item adicionado:', item);
            resolve();
          };
          request.onerror = (event) => {
            console.error('Erro ao adicionar item:', event);
            reject(event);
          };
        }
      };
      getAllRequest.onerror = (event) => {
        console.error('Erro ao verificar itens existentes:', event);
        reject(event);
      };
    });
  }

  async setItem(storeName: string, item: any): Promise<any> {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(item);

      request.onsuccess = () => resolve(request.result);
      request.onerror = (event: any) => reject(event.target.error);
    });
  }

  async deleteItem(id: number): Promise<void> {
    const db = await this.openDB();
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject('Erro ao deletar item do carrinho');
    });
  }

  async updateItem(id: number, updates: Partial<{ name: string; price: number; quantity: number }>): Promise<void> {
    const db = await this.openDB();
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const getRequest = store.get(id);

      getRequest.onsuccess = () => {
        const item = getRequest.result;
        if (item) {
          const updatedItem = { ...item, ...updates };
          const putRequest = store.put(updatedItem);

          putRequest.onsuccess = () => {
            console.log('Item atualizado:', updatedItem);
            resolve();
          };
          putRequest.onerror = (event) => {
            console.error('Erro ao atualizar item:', event);
            reject(event);
          };
        } else {
          reject('Item não encontrado para atualização.');
        }
      };

      getRequest.onerror = (event) => {
        console.error('Erro ao buscar item para atualização:', event);
        reject(event);
      };
    });
  }

  async PedidosConcluidos(): Promise<void> {
    const db = await this.openDB();

    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = async () => {
        const carrinhoItems = request.result;

        if (carrinhoItems.length > 0) {
          const pedidoConcluido = {
            itens: carrinhoItems,
            status: 'Concluído',
            dataConclusao: new Date().toISOString(),
          };

          const pedidoTransaction = db.transaction(this.pedidosStoreName, 'readwrite');
          const pedidoStore = pedidoTransaction.objectStore(this.pedidosStoreName);
          const pedidoRequest = pedidoStore.add(pedidoConcluido);

          pedidoRequest.onsuccess = async () => {
            console.log('Pedido concluído adicionado.');

            try {
              await this.clearItems();
              resolve();
            } catch (error) {
              console.error('Erro ao limpar o carrinho após mover para pedidos concluídos:', error);
              reject('Erro ao limpar o carrinho');
            }
          };

          pedidoRequest.onerror = (event) => {
            console.error('Erro ao adicionar pedido concluído:', event);
            reject('Erro ao mover pedido para concluído');
          };
        } else {
          reject('Carrinho vazio, não há itens para mover.');
        }
      };

      request.onerror = (event) => {
        console.error('Erro ao recuperar itens do carrinho:', event);
        reject('Erro ao recuperar carrinho');
      };
    });
  }

  async carregarPedidosConfirmados(): Promise<any[]> {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.pedidosStoreName, 'readonly');
      const store = transaction.objectStore(this.pedidosStoreName);
      const request = store.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject('Erro ao carregar pedidos');
    });
  }
}
