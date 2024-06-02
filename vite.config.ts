import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
	server: {
		watch: {
			usePolling: true
		},
		hmr: {
			overlay: true,
			clientPort: process.env.PORT || 5173
		},
		host: true,
		strictPort: true,
		port: process.env.PORT || 5173
	}
})
