const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        app: resolve(__dirname, 'src/script/app.js'),
        infopaslon: resolve(__dirname, 'src/pages/infopaslon.html'),
        infopaslon: resolve(__dirname, 'src/pages/guide.html'),
        infopaslon: resolve(__dirname, 'src/pages/bantuan.html'),
        adminhome: resolve(__dirname, 'src/pages/admin/home.html'),
        admindata: resolve(__dirname, 'src/pages/admin/data.html'),
        formpaslon: resolve(__dirname, 'src/pages/admin/form.html'),
      }
    }
  }
})