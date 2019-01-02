module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@views': 'src/views',
      },
    },
  },
  devServer: {
    proxy: {
      '/api/': { target: `http://localhost:${process.env.PORT || '9090'}` },
    },
  },
}
