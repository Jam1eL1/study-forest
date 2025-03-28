import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@home', replacement: '/src/pages/home' },
      { find: '@study-create', replacement: '/src/pages/study-create' },
      { find: '@study-detail', replacement: '/src/pages/study-detail' },
      { find: '@today-focus', replacement: '/src/pages/today-focus' },
      { find: '@today-habit', replacement: '/src/pages/today-habit' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@components', replacement: '/src/components' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@utils', replacement: '/src/utils' },
    ],
  },
});
