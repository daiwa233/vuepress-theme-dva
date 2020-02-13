/*
 * @Author: your name
 * @Date: 2020-02-04 10:36:53
 * @LastEditTime : 2020-02-12 22:08:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\util.js
 */
import moment from 'moment'

// 全局计算属性 对category中英映射，嵌套分类
export function $categoryItems() {
  const naturalCategories = Object.values(this.$category.map);
  let step = naturalCategories.reduce((prev, cur) => {

    // 为下面向sub push内容做铺垫
    cur.sub = [];
    cur.id=cur.key;
    let arr = cur.id.split("/");
    if (arr.length > 3) {
      console.log("category deep length >3");
      // 截掉中间多余的
      arr.splice(2, arr.length - 3);
      cur.id = arr.join("/");
    }
    
    // // 分类和分类名字做映射
    // if (this.$themeConfig.categoryNames) {
    //   for (const val of Object.keys(this.$themeConfig.categoryNames)) {
    //     if (!cur.id.includes(val)) continue;
    //     cur.id = cur.id.split('/').map(item => {
    //       return item===val ? this.$themeConfig.categoryNames[item] : item;
    //     }).join('/');
    //   }
    // }
    prev.push(cur);
    return prev;
  }, []);
  
  let arr1 = step.filter(val => val.id.split("/").length == 1);
  let arr3 = step.filter(val => val.id.split("/").length == 3);
  let arr2 = step.filter(val => val.id.split("/").length == 2);
  if (arr3.length > 0 && arr2.length > 0) {
    for (const i of arr2) {
      for (const j of arr3) {

        if (j.id.includes(i.id)) {
          // 将前缀去除
          j.id = j.id.split("/").reverse()[0];
          i.sub.push(j);

        }
      }
    }
  }

  if (arr2.length > 0 && arr1.length > 0) {
    for (const i of arr1) {
      for (const j of arr2) {
        if (j.id.includes(i.id)) {
          j.id = j.id.split("/").reverse()[0];
          i.sub.push(j);
        }
      }
    }
  }
  return arr1;
}

// 全局文章归档计算属性
export function $placeOnArticle() {
  const { pages } = this.$site;
  // 过滤掉没有在_posts 下的md 且不包含date YML 的文件
  let step1 = pages
      .filter(item => item.path.includes('/_posts/') && item.frontmatter.date)
      .reduce((prev, cur) => {
        let formatDate = moment(cur.frontmatter.date).format('YYYY-MM');
        cur.date = formatDate; 
       if (!prev[formatDate]) prev[formatDate] = [];

       prev[formatDate].push(cur);
        
        return prev;
      }, {});
    // 对年月排序
   let step2 = Object.keys(step1)
                     .sort((a,b) => moment(b).valueOf() - moment(a).valueOf())
                     .reduce((prev, cur) => {
                       prev[cur] = step1[cur];
                       return prev;
                     }, {}) 
  // 对年月下的日期排序
  return Object.values(step2).reduce((prev, cur) => {
   
    prev.push(cur.sort((a,b) => moment(b.frontmatter.date).valueOf() - moment(a.frontmatter.date).valueOf()));
    return prev;
  }, [])
}
