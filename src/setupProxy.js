const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'https://5e528b14d90e6c00149913cf.mockapi.io/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/api"
    }
  }));
  app.use(createProxyMiddleware('/now', {
    target: 'https://devapi.qweather.com/v7/weather/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/now/": "/now"
    }
  }))
}

