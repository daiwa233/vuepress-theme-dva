/*
 * @Author: your name
 * @Date: 2020-01-31 13:53:48
 * @LastEditTime : 2020-02-15 01:17:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dva\docs\.vuepress\config.js
 */


module.exports = {
  locales:{
    '/': {
      lang: 'zh-CN',
      title: "DVA",
      description: "今日事 今日毕",    
    }
  },
  base: '/',
  head: [
    ['link', {rel: 'icon', href: 'https://image.start-here.cn/favicon.ico'}],
    ['link', {rel: 'stylesheet', href: '//at.alicdn.com/t/font_1625681_l6soj9fb0gg.css'}],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    ['link', { rel: 'mask-icon', href: '/logo.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  patterns: ['**/*.vue', '**/*.md'],
  theme: require.resolve('../../'),
  themeConfig: {
    nav: [
      {text: '主页', link: '/', icon:"iconfont icon-ziyuan"},
      {
        text: '分类',
        items: [
          {text: '前端', link: '/categories/web/', icon: 'iconfont icon-_qianduankaifa'},
          {text: 'Node', link: '/categories/node/', icon: 'iconfont icon-node'},
          {text: '计算机网络', link: '/categories/computer-network/', icon: 'iconfont icon-jisuanji'},
          {text: '浏览器', link: '/categories/browser/', icon: 'iconfont icon-liulanqi'},
          {text: '探索', link: '/categories/explore/', icon:'iconfont icon-tansuo'},
        ],
        icon: 'iconfont icon-fenlei'
      },
      {text: '时间轴', link:'/timeline.html', icon: 'iconfont icon-shijianzhou'},
      {text: '友链', link:'/friendlinks.html', icon: 'iconfont icon-youlian'},
      {text: '关于', link:'/about.html', icon: 'iconfont icon-guanyuwomen'},
    ],
    socialLinks:[
      {url: 'https://github.com/lhj233', icon: 'iconfont icon-github'},
      {url: 'mailto:dvalhj@163.com', icon: 'iconfont icon-youxiang'},
      {url: 'tencent://message/?uin=1743972413&Site=http://start-here.cn&Menu=yes', icon: 'iconfont icon-QQ'},
      {url: 'https://space.bilibili.com/427457286', icon: 'iconfont icon-bilibili'},
      {url: 'http://start-here.cn/rss.xml', icon: 'iconfont icon-RSS'},
    ],
    valineConfig: {
      appId: '4F5vvGqeYopTahmhzYr84Xhg-gzGzoHsz',
      appKey: 'vmoQXP1EUlE9lUq31cWWfTfo',
      placeholder: '干就完了',
      notify: true,
      visitor: true,
      avatar: 'retro'
    },
    friendlinks: require('./friendlinks'),
    sitemap: {
      hostname: 'https://start-here.cn'
    },
    feed: {
      canonical_base: 'https://start-here.cn'
    },
    avatar: 'https://image.start-here.cn/logo.jpg',
    
    

  //   lastUpdated: 'Last Updated', 
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-158555817-1' // UA-00000000-0
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ]
    
  ]

}