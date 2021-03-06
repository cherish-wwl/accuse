const pages = {
    task:{
       entry: 'src/entrys/task.js',
       template: 'public/index.html',
       filename: 'mine.html',
       title: '任务中心',
       chunks: ['chunk-vendors', 'chunk-common', 'task']
    },
    coinDetail:{
      entry: 'src/entrys/coinDetail.js',
      template: 'public/index.html',
      filename: 'coinDetail.html',
      title: '金币中心',
      chunks: ['chunk-vendors', 'chunk-common', 'coinDetail']
    },
    feeback:{
      entry: 'src/entrys/feeback.js',
      template: 'public/index.html',
      filename: 'feeback.html',
      title: '意见反馈',
      chunks: ['chunk-vendors', 'chunk-common', 'feeback']
    },
    myFeedback:{
      entry: 'src/entrys/myFeedback.js',
      template: 'public/index.html',
      filename: 'myFeedback.html',
      title: '我的反馈',
      chunks: ['chunk-vendors', 'chunk-common', 'myFeedback']
    },
    report:{
      entry: 'src/entrys/report.js',
      template: 'public/index.html',
      filename: 'report.html',
      title: '举报',
      chunks: ['chunk-vendors', 'chunk-common', 'report']
   },
   writeOff:{
      entry: 'src/entrys/writeOff.js',
      template: 'public/writeOff.html',
      filename: 'writeOff.html',
      title: '注销账户',
      chunks: ['chunk-vendors', 'chunk-common', 'writeOff']
   },
   shop:{
      entry: 'src/entrys/shop.js',
      template: 'public/shop.html',
      filename: 'shop.html',
      title: '',
      chunks: ['chunk-vendors', 'chunk-common', 'shop']
    },
    shopRecord:{
      entry: 'src/entrys/shopRecord.js',
      template: 'public/shopRecord.html',
      filename: 'shopRecord.html',
      title: '交易记录',
      chunks: ['chunk-vendors', 'chunk-common', 'shopRecord']
    },
    shopSuccess:{
      entry: 'src/entrys/shopSuccess.js',
      template: 'public/shopSuccess.html',
      filename: 'shopSuccess.html',
      title: '交易成功',
      chunks: ['chunk-vendors', 'chunk-common', 'shopSuccess']
    }
  }

    
module.exports = pages