import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import sassPlugin from 'vite-plugin-sass';

export default 
{
    build: 
    {
        rollupOptions: 
        {
            input: 'src/main.tsx' // Path to your entry point file
        }
    },
    optimizeDeps: 
    {
        include: ['react', 'react-dom'] // Add your dependencies here
    },
    plugins: 
    [
        reactRefresh(),
        sassPlugin()
    ],
};