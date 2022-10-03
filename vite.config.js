import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

const path = require('path');

export default ({ mode }) => {

    return defineConfig({
    
        resolve: {
            alias: {
                '~': path.resolve(__dirname, './src'),
            },
            dedupe: [
                'vue'
            ],
        },

        // for those who develop in a virtual machine instead of a host
        server: {
            host: '0.0.0.0',
            watch: {
                usePolling: true,
            },
        },

        plugins: [
            vue({
                css: true
            }),
        ],

        build: {
            sourcemap: true,
            lib: {
                entry: path.resolve(__dirname, 'src/index.js'),
                name: 'index',
                fileName: format => `index.${format}.js`,
            },
            rollupOptions: {
                external: [
                    'vue'
                ],
                output: {
                    globals: {
                        vue: 'Vue',
                    }
                },
            },
        },

    });
};