const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'src/script/app.js'),
        main: resolve(__dirname, 'src/index.html'),
        infopaslon: resolve(__dirname, 'src/pages/infopaslon.html'),
        paslon: resolve(__dirname, 'src/pages/paslon.html'),
        home: resolve(__dirname, 'src/pages/home.html'),
        guide: resolve(__dirname, 'src/pages/guide.html'),
        login: resolve(__dirname, 'src/pages/login.html'),
        bantuan: resolve(__dirname, 'src/pages/bantuan.html'),
        adminhome: resolve(__dirname, 'src/pages/admin/home.html'),
        dataPaslon: resolve(__dirname, 'src/pages/admin/dataPaslon.html'),
        dataMahasiswa: resolve(__dirname, 'src/pages/admin/dataMahasiswa.html'),
        formPaslon: resolve(__dirname, 'src/pages/admin/form.html'),
        quickCount: resolve(__dirname, 'src/pages/admin/quickCount.html'),
      }
    }
  }
})