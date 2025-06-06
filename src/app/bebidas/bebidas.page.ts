import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  toComAlcool(){
    this.router.navigate(['/bebidas-com']);
   }

   toSemAlcool(){
    this.router.navigate(['/bebidas-sem']);
   }
  




}
