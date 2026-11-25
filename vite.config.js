import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages has no SPA fallback, so deep links such as /cart need a 404.html copy.
const spaFallback = () => {
  let outDir
  return {
    name: 'spa-fallback',
    apply: 'build',
    configResolved(config) { outDir = resolve(config.root, config.build.outDir) },
    closeBundle() { copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html')) },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/StreetEmotion/',
})
