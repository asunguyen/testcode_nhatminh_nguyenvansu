module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    https: true
  },

  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",


  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/app_assets/css/main.scss";'
      }
    },
    extract: false
  },
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined
};
