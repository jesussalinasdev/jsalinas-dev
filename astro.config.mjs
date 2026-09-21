import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jsalinas.dev',
  output: 'static',
  outDir: './out',
  trailingSlash: 'always',
  build: { format: 'directory' },
  server: { port: 3000 },
  devToolbar: { enabled: false },
});
