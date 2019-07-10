module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://worlddatabase.series2.trap.show', // 自分のポートにする
        pathRewrite: {
          '^/api/': '/',
        },
      },
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },
}
