export interface Produto {
  id: string;
  name: string;
  expirationDate?: string;  // Data de validade (opcional)
  description?: string;    // Descrição (opcional)
  quantity: number;        // Quantidade
  price: number;          // Preço
  image?: string;         // Imagem (opcional)
  syncStatus: 'pending' | 'synced';
  createdAt: string;
}