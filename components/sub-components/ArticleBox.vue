<!--
 * @Author: your name
 * @Date: 2020-02-03 15:55:43
 * @LastEditTime : 2020-02-13 20:38:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\ArticleBox.vue
 -->

<template>
  <div class="article_box">
    
    <div class="article_info">
      <div class="article_title"><a :href="article.path">{{ title }}</a></div>
      <div class="article_excerpt" v-if="article.excerpt" v-html="article.excerpt"></div>
      
      <div class="meta-container">
        <span class="article_meta" v-if="article.frontmatter.sticky">
          <i class="iconfont icon-zhiding"></i>
          <span class="sticky">置顶</span>
        </span>
        <time class="article_meta" v-if="article.frontmatter.date">
          <i class="iconfont icon-riqiqishu"></i>
          <span class="post_date" >{{article.frontmatter.date | formatDate}}</span>
        </time>
        <span class="article_meta" v-if="article.frontmatter.tags">
        <i class="iconfont icon-label"></i>
        <span class="article_tag"  v-for="(tag,i) in article.frontmatter.tags" :key="i">{{tag}}&nbsp;&nbsp;</span>
        </span>
      </div>

      
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        
      };
    },
    computed: {
      title() {
        return this.article.frontmatter.title || this.article.title;
      },
    },
    mounted() {
        
    }
    
  }
</script>

<style lang="scss" scoped>
@import '../../styles/_palette.scss';
.article_box{
  display: flex;
  flex-direction: row;
  box-shadow: $boxshadow;
  padding: 20px;
  transition: all .3s;
  margin-bottom: 30px;
  box-sizing: border-box;
  border-radius: 8px;
  &:hover{
    box-shadow: $hovershadow;
  }
 
  .article_info{
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 30px;
    .article_title{
      font-size: 26px;
     
      a {
         color: #2c3e50;
        font-weight: 600;
        position: relative;
         &:hover::after{
            width: 100%;
          }
         &::after {
            position: absolute;
            bottom: -4px;
            left: 0;
            z-index: 1;
            width: 0;
            height: 2px;
            background-color: #3eaf7c;
            content: "";
            -webkit-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }
      }
    }
    .meta-container{
      padding-top: 10px;
    }
    .article_meta{
      padding-right: 10px;
      .icon-zhiding, .sticky{
        color: #ff7242;
      }
    }
  }
}
@media screen and (max-width: 719px) {
  .article_info{
    padding: 0px 10px !important;
  }
}

</style>