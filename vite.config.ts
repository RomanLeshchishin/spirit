import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
	server: {
		host: true,
		strictPort: true,
		port: 8080,
		hmr: {
			overlay: true,
			protocol: ws,
			clientPort: 8080
		}
	}
})
