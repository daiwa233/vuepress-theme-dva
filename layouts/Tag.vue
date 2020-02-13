
<template>
  <div class="tag-page">
    <global-header ></global-header>
    <MobileSidebar></MobileSidebar>
    <main class="main">
      <div class="tag-body">
        <div class="tag-item">
          <i class="iconfont icon-label large"  ></i>
          <span :style="generatorTagStyle($pagination.pages.length)">{{ tag }}</span>
        </div>
        <ArticleBox :article="article" v-for="article in $pagination.pages" :key="article.key"></ArticleBox>
        <div class="pagination-part">
          <Pagination />
        </div>
      </div>
      <AsideContent class="right-aside" />
    </main>
   <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import AsideContent from "@theme/components/sub-components/AsideContent.vue"
import ArticleBox from '@theme/components/sub-components/ArticleBox.vue'
import HomeFooter from '@theme/components/sub-components/Footer.vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
import MobileSidebar from "@theme/components/sub-components/MobileSidebar.vue"
export default {
  components: {
    AsideContent,
    MobileSidebar,
    HomeFooter,
    ArticleBox,
    Pagination
  },
  data() {
    return {};
  },
  computed:{
    tag() {
      return this.$route.meta.id;
    }
  },
  methods: {
    generatorTagStyle(num) {
      let style = {};
      switch(num) {
        case num >= 25:
           style.color = `#3eaf7c`;
           break;
        case num >= 20: 
           style.color = `rgb(130,57,53)`;
           break;
        case num >= 15:
          style.color = `rgb(147,190,178)`;
          break;
        case num >= 10:
          style.color = `rgb(201,186,131)`;
          break;
        case num >= 5:
          style.background = `rgb(222,211,140)`;
          break;
        default: 
        style.background = `rgb(222,146,83)`;
      }
      return style;
    },
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_palette.scss";
.tag-page {
  .main {
    padding:98px 20px 20px;
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    .tag-body{
      flex:3;
      display: flex;
      flex-direction: column;
      width:100%;
      .tag-item, .pagination-part{
        display: flex;
        justify-content: center;
        align-items: center;

      }
      .tag-item{
        padding: 30px;
        position: relative;
        span{
          color: #fff;	
          display: inline-block;
          box-sizing: border-box;
          padding:6px 12px; 
          border-radius: 5px;
          margin: 0px 10px ;
          
          transition: all 250ms;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px ;	
          &:hover {			
            transform: translateY(-5px);
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px;
          }
        }
        .large{
          font-size: 22px;
        }
        
      }
    }
    .right-aside {
      flex: 1;
    }
  }
  @media screen and (max-width: 900px) {
    .main{
      flex-direction: column;
      .aside-content{
          margin-left: 0;
      }
      .tag-body, .aside-content{
        width: 100%;
      }
    }
    
  } 
  @media screen and (max-width: 710px) {
    .main{
      padding: 68px 5px 5px;
    }
  }
}
</style>