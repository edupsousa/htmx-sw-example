import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      injectRegister: false,
      manifest: false,
      injectManifest: {
        injectionPoint: undefined,
      },
      srcDir: 'src',
      filename: 'sw-main.ts',
      devOptions: {
        enabled: true,
        type: 'module',
      },
    }),
  ],
});
