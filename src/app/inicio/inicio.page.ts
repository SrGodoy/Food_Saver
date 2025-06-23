import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(private router: Router,
    private produtoService: ProdutoService
  ) { }

  
  goToTab1() {
    this.router.navigate(['/tabs/tab1']);
  }

  ngOnInit() {
    this.produtoService.listarProdutos().subscribe(res => {
      if (res.status === 'success') {
    

        this.router.navigateByUrl('/tabs/tab1');
      } else {
        console.error('Erro ao carregar produtos no início');
      }
    });
  }


}
