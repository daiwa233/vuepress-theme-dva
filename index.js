/*
 * @Author: your name
 * @Date: 2020-02-03 14:18:54
 * @LastEditTime : 2020-02-14 23:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\index.js
 */

module.exports = (options, ctx) => {
const { themeConfig } = ctx;
const { views, sitemap, feed }  = themeConfig;
const frontmatters = [
  {
    id: 'category',
    title: '分类',
    keys: ['category', 'categories'],
    path: '/categories/',
    layout: 'Categories',
    scopeLayout: 'Category'
  },
  {
    id: 'tag',
    title: '标签',
    keys: ['tag', 'tags'],
    path: '/tags/',
    layout: 'Tags',
    scopeLayout: 'Tag'
  }
];
const directories = [
  {
    id: 'post',
    title: '首页',
    dirname: '_posts',
    path: '/',
    layout: 'Layout',
    itemLayout: 'Post',
    itemPermalink: '/:regular',
  }

];
views && views.directories && directories.push(...views.directories);
views && views.frontmatters && frontmatters.push(...views.frontmatters);

return {
    
  plugins: [
    '@vuepress/nprogress',
    ['@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    '@vuepress/back-to-top',
    ['@vuepress/medium-zoom',
      {
        selector: '.theme-dva-content :not(a) > img',
      
        options: {
          margin: 16
        }
      }
    ],
    ['@vuepress/search', 
      {
        searchMaxSuggestions: themeConfig.searchNum || 10
      }
    ],
    [
      '@vuepress/plugin-blog',
      {
        directories,
        frontmatters,
        globalPagination: {
          
            lengthPerPage: themeConfig.lengthPerPage || 5,
            sorter: (prev, next) => {
              
              const {sticky: prevSticky } = prev.frontmatter;
              const {sticky: nextSticky } = next.frontmatter;

              if (prevSticky) {
                if (typeof prevSticky === 'string' && prevSticky.includes('!important')) return -1;
              }
              if (nextSticky) {
                
                if (typeof nextSticky === 'string' && nextSticky.includes('!important')) return 1;
              }

              if (prevSticky) return -1;
              if (nextSticky) return 1;
              
              const moment = require('moment');
              const prevTime = moment(prev.frontmatter.date).valueOf();
              const nextTime = moment(next.frontmatter.date).valueOf();
              return prevTime - nextTime > 0 ? -1 : 1;
            },
          
        },
        sitemap:sitemap || '',
        feed: feed || ''
      }
    ],
    ['container', {
      type: 'tip',
      defaultTitle: {
        '/': '提示'
      }
    }],
    ['container', {
      type: 'warning',
      defaultTitle: {
        '/': '注意'
      }
    }],
    ['container', {
      type: 'danger',
      defaultTitle: {
        '/': '警告'
      }
    }],
    ['container', {
      type: 'details',
      before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
      after: () => '</details>\n'
    }],
    ['container', {
      type: 'cutline',
      defaultTitle: {
        '/': '分割线'
      }
    }]
  ]
  
}


}