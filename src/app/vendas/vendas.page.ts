// src/app/vendas/vendas.page.ts
import { Component, OnInit } from '@angular/core';
import { VendaService } from '../services/venda.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.page.html',
  styleUrls: ['./vendas.page.scss'],
})
export class VendasPage implements OnInit {
  vendas: any[] = [];

  constructor(private vendaService: VendaService) {}

  ngOnInit() {
    this.carregarVendas();
  }

  carregarVendas() {
    this.vendaService.listarVendas().subscribe({
      next: (res) => this.vendas = res,
      error: (err) => console.error('Erro ao buscar vendas', err)
    });
  }
}
