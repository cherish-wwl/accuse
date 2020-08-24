const pages =  require('./src/pages');

module.exports ={
  publicPath:'./',
  outputDir:'serve',

  pages,
  devServer: {
    open: true,            
    index: 'mine.html',
    proxy: {
      '': {
        target: 'https://join.dev.fawo.cn',   //代理接口
        secure:false,
        ws:true,
        changeOrigin: true,
      }
    }
  }
}