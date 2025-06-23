import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Storage } from '@ionic/storage-angular';



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
    
  ) {
    this.initializeApp();

this.router.events.subscribe(event => {
  if (event instanceof NavigationEnd) {
    const url = event.urlAfterRedirects || event.url;

    const hiddenTabsRoutes = ['/tabs/tab1', '/tabs/tab2', '/tabs/tab3', '/inicio', '/cadastro' ,'/tab3', ];
    const hiddenMenuRoutes = ['/tab3', '/inicio', '/pagamentos', '/pedidos', '/cadastro'];

    this.showTabs = !hiddenTabsRoutes.some(route => url.startsWith(route));
    this.showMenu = !hiddenMenuRoutes.some(route => url.startsWith(route));
  }
});

  }

  

  async initializeApp() {
 
    await this.storage.create();

    const hasSeenInicio = localStorage.getItem('hasSeenInicio');

    if (hasSeenInicio) {
      this.router.navigateByUrl('/tab1');
    } else {
      this.router.navigateByUrl('/inicio');
      localStorage.setItem('hasSeenInicio', 'true');
    }
  }

  search(event: any) {
    console.log('Buscando: ', this.searchText);
  }


}
