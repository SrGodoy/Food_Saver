import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private baseUrl = 'http://10.0.2.2:8080'; 

  constructor(private http: HttpClient) {}

  listarProdutos() {
    return this.http.get<{status:string, produtos:any[]}>(`${this.baseUrl}/listar_produtos.php`);
  }
}
