import { defineConfig } from 'vitest/config'

export default defineConfig({
  base: '/fedimint-web-sdk/', 
  test: {
    watch: false,
    coverage: {
      provider: 'v8',
      include: ['packages/**/*.ts'],
    },
  },
  optimizeDeps: {
    exclude: ['@fedimint/core-web'],
  },
})
