/*
 * @Author: your name
 * @Date: 2020-02-02 22:44:10
 * @LastEditTime : 2020-02-12 21:44:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dva\docs\.vuepress\theme\enhanceApp.js
 */
import moment from 'moment'
import {$categoryItems,  $placeOnArticle} from './mixin'

export default({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.filter('formatDate', (date) => {
    
    return moment(date).format('YYYY-MM-DD');
  })
  Vue.filter('formatDateYM', date => {
    return moment(date).format('MM/YYYY');
  })
  Vue.filter('formatDateD', date => {
    return moment(date).format('DD');
  })
  // 注入全局计算属性
  Vue.mixin({
    computed: {
      $categoryItems,
      $placeOnArticle
    }
  })
}
