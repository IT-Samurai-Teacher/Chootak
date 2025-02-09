import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Chootak/', // Match your repository name exactly!
  plugins: [react()],
});