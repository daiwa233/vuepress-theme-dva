<!--
 * @Author: your name
 * @Date: 2020-02-03 15:50:28
 * @LastEditTime : 2020-02-14 19:23:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva\components\views\Home.vue
 -->
<template>
  <div class="container-outer">
  
    <Header></Header>
    <MobileSidebar></MobileSidebar>
    <main>

    <div class="home-container" >
      <div class="articles-body">
        <ArticleBox :article="article" v-for="article in $pagination.pages" :key="article.key"></ArticleBox>
        <div class="pagination-part">
          <Pagination />
        </div>
      </div>
      <div class="aside-content-box">
        <aside-content></aside-content>
      </div>
    </div>
    </main>
    <footer>
      <home-footer></home-footer>
    </footer>
  </div>
</template>

<script>
import ArticleBox from '@theme/components/sub-components/ArticleBox.vue'
import AsideContent from '@theme/components/sub-components/AsideContent.vue'
import HomeFooter from '@theme/components/sub-components/Footer.vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
import MobileSidebar from '@theme/components/sub-components/MobileSidebar.vue'
import Header from "@theme/components/sub-components/Header.vue"

import moment from 'moment'
export default {
  components: {
    ArticleBox,
    Pagination,
    AsideContent,
    HomeFooter,
    MobileSidebar,
    Header
  },
  data(){
    return {
      
    }
  },
  computed: {
    style() {
      let style = {};
      let url = this.$site.themeConfig.background || 'http://img.start-here.cn/6a63f6246b600c334c3e91cb1e4c510fd9f9a16a.jpg';
      style.backgroundImage = `url(${url})`;
      style.backgroundAttachment = "fixed"; 
      return style;
    },
    blogtitle() {
      return this.$site.themeConfig.blogtitle || 'dva';
    },

  },
  methods:{
    
    
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
 .home-container{
    display: flex;
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0px auto;
    padding: 98px 20px  20px;
    .articles-body{
      flex: 3 1 0;
      .pagination-part{
        display:flex;
        justify-content: center;
        align-items: center;
        
      }

    }
    .aside-content-box{
      flex: 1 1 0;
    }
  }

  @media screen and (max-width:900px) {
   .home-container{
     flex-direction: column;

     .articles-body,.aside-content-box{
       width:100%;
      }
      
      .aside-content-box {
        .aside-content{
          margin-left: 0;
        }
      }
   }
   
  }

  @media screen and (max-width:719px) {
    .home-container{
      padding: 98px 5px 20px;
    }
}

</style>