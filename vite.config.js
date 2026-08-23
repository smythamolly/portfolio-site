import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const page = (path) => resolve(import.meta.dirname, path)

export default defineConfig({
  base: '/portfolio-site/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: page('index.html'),
        portfolio: page('portfolio/index.html'),
        airPurifier: page('projects/air-purifier/index.html'),
        projectOne: page('projects/project-one/index.html'),
        projectTwo: page('projects/project-two/index.html'),
        projectThree: page('projects/project-three/index.html'),
      },
    },
  },
})
