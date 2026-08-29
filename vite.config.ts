import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { substackRssPlugin } from './vite/substackRssPlugin'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [substackRssPlugin(), react(), tailwindcss()],
	server: {
		watch: {
			ignored: ['**/.playwright-cli/**']
		}
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
		css: true,
		reporters: ['verbose'],
		coverage: {
			reporter: ['text', 'json', 'html'],
			include: ['src/**/*'],
			exclude: []
		}
	}
})
