
<template>
  <div class="tag-page">
    <Header ></Header>
    <MobileSidebar></MobileSidebar>
    <main class="main">
     
      <div class="main-part">
        <div class="tag-content">
        <div class="tag-title">
          <i class="iconfont icon-label"></i>
          <span>标签</span>
        </div>
        <div class="tags">
            <a :href="tag.path" class="tag-item" v-for="(tag, i) in tags" :key="i" :style="generatorTagStyle(tag.pages.length)">
              <span>{{ tag.name }}</span>
            </a>

        </div>
      </div>
      </div>
   <AsideContent class="right-aside" />
  </main>
   <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import AsideContent from "@theme/components/sub-components/AsideContent.vue"

import HomeFooter from '@theme/components/sub-components/Footer.vue'
import Header from "@theme/components/sub-components/Header.vue"
import MobileSidebar from "@theme/components/sub-components/MobileSidebar.vue"
export default {
  components: {
    AsideContent,
    MobileSidebar,
    HomeFooter,
    Header
  },
  data() {
    return {};
  },
  computed:{
   tags() {
     return this.$frontmatterKey.list;
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
    .main-part{
      flex:3;
    }
    .tag-content {
      flex-direction: column;
      padding-left: 0;
      background: #fff;
      border-radius: 8px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 34px 80px;
      box-sizing: border-box;
      box-shadow: $boxshadow;
      transition: all 0.3s;
      margin-bottom: 10px;
      &:hover {
        box-shadow: $hovershadow;
      }
      .tags{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 20px;
        .tag-item{
      
          color: #fff;	
          display: inline-block;
          box-sizing: border-box;
          padding:6px 12px; 
          border-radius: 5px;
          margin: 12px 6px 0;
          transition: all 250ms;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px ;	
          &:hover {			
            transform: translateY(-5px);
            cursor: pointer;
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px;
          }
          span{ margin: auto}
          
        }
      }
      .tag-title {
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          font-size: 20px; 
          font-weight: 600;
        }
        i{
          padding-right: 5px;
          font-size: 20px;
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
      .tag-content, .aside-content{
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