import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built assets work no matter what sub-folder
// the calculator is uploaded to on assignments4u.com.
export default defineConfig({
  base: './',
  plugins: [react()],
})
