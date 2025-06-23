import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Capacitor } from '@capacitor/core';

if (Capacitor.isNativePlatform()) {
  // Ignora erros de certificado em desenvolvimento
  Capacitor.getPlatform() === 'android' && 
    (window as any).AndroidHacks && 
    (window as any).AndroidHacks.allowMixedContent();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


