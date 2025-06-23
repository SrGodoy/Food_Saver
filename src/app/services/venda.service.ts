// src/app/services/venda.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VendaService {
  private apiUrl = 'http://10.0.2.2:8080/vendas.php'; 

  constructor(private http: HttpClient) {}

  listarVendas() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
