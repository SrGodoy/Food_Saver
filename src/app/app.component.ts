import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IndexedDBService } from './services/indexed-db.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showTabs = true;
  searchText: string = '';
  showMenu = true;

  constructor(
    private storage: Storage,
    private router: Router,
    private indexedDBService: IndexedDBService
  ) {
    this.initializeApp();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hiddenTabsRoutes = ['/tabs/tab1', '/tabs/tab2', '/tabs/tab3', '/inicio'];
        const hiddenMenuRoutes = ['/tab3', '/inicio', '/pagamentos', '/pedidos'];

        this.showTabs = !hiddenTabsRoutes.some(route => event.url.startsWith(route));
        this.showMenu = !hiddenMenuRoutes.some(route => event.url.startsWith(route));
      }
    });
  }

  

  async initializeApp() {
    await this.indexedDBService.initializeDatabase();
    await this.storage.create();

    const hasSeenInicio = localStorage.getItem('hasSeenInicio');

    if (hasSeenInicio) {
      this.router.navigateByUrl('/tabs/tab1');
    } else {
      this.router.navigateByUrl('/inicio');
      localStorage.setItem('hasSeenInicio', 'true');
    }
  }

  search(event: any) {
    console.log('Buscando: ', this.searchText);
  }

  goToPaes() {
    this.router.navigateByUrl('/tabs/paes');
  }
  goToBebidas() {
    this.router.navigateByUrl('/bebidas');
  }
  goToPratosQuentes() {
    this.router.navigateByUrl('/pratos-quentes');
  }
  goToPratosFrios() {
    this.router.navigateByUrl('/pratos-frios');
  }
  goToAcompanha() {
    this.router.navigateByUrl('/acompanha');
  }
  goToSobremesas() {
    this.router.navigateByUrl('/sobremesa');
  }
  goToCombos() {
    this.router.navigateByUrl('/combos');
  }
  goToOfertas() {
    this.router.navigateByUrl('/ofertas');
  }

}
