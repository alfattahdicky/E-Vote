const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        landing: resolve(__dirname, 'src/pages/landing.html'),
        infopaslon: resolve(__dirname, 'src/pages/infopaslon.html'),
        paslon: resolve(__dirname, 'src/pages/paslon.html'),
        adminhome: resolve(__dirname, 'src/pages/admin/home.html'),
        admindata: resolve(__dirname, 'src/pages/admin/data.html'),
        formpaslon: resolve(__dirname, 'src/pages/admin/form.html'),
      }
    }
  }
})