import { defineConfig } from "vitest/config";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
    plugins: [sveltekit()],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler' // to avoid css-dart warnings
            }
        }
    },
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
