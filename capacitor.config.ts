import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Food Saver',
  webDir: 'www',
  bundledWebRuntime: false,
  
  server: {
    cleartext: true,          // Permite comunicação HTTP (não apenas HTTPS)
    allowNavigation: [
      '172.18.144.1',         
      'localhost'             
    ]
  },
  // Configurações específicas para Android
  android: {
    allowMixedContent: true,  // Permite conteúdo misto (HTTP/HTTPS)
    webContentsDebuggingEnabled: true // Opcional: ativa debug no Android
  },



  plugins: {
    CapacitorHttp: {
      enabled: true           // Habilita o plugin HTTP nativo
    },
    Network: {
      timeout: 5000           // Timeout para verificações de rede
    }
  }
};

export default config;