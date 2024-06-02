import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
	server: {
		watch: {
			usePolling: true
		},
		hmr: {
			overlay: false
		},
		host: true,
		strictPort: true,
		port: 8080
	}
})
