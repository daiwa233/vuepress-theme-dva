<!--
 * @Author: your name
 * @Date: 2020-02-06 15:15:46
 * @LastEditTime : 2020-02-12 23:19:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\layouts\Categories.vue
 -->
<template>
  <div class="category-page">
    <global-header ></global-header>
    <MobileSidebar></MobileSidebar>
    <div class="main">
     
      <div class="main-part">
        <div class="catetory-content">
        <div class="category-title">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
        </div>
        <ul class="category-part">
          <li class="category-item" v-for="(item,i) in $categoryItems " :key="i">
            <a :href="item.path" target="_self" class="flex_space_between">
              <span>{{item.id}}</span>
              <span>{{ item.pages.length }}</span>
            </a>
            <ul class="category-item__sub_wrapper" v-if="item.sub.length>0">
              <li class="category-item__sub" v-for="(item_sub, i) in item.sub " :key="i">
                <a :href="item_sub.path" target="_self" class="flex_space_between">
                  <span>
                    <i class="iconfont icon-ziji"></i>
                    {{item_sub.id}}
                  </span>
                  <span>{{ item_sub.pages.length }}</span>
                </a>
                <ul class="category-item__grandsub_wrapper" v-if="item_sub.sub.length>0">
                  <li
                    class="category-item__grandsub"
                    v-for="(item_grandsub, i) in item_sub.sub"
                    :key="i"
                  >
                    <a :href="item_grandsub.path" target="_self" class="flex_space_between">
                      <span>
                        <i class="iconfont icon-ziji"></i>
                        {{item_grandsub.id}}
                      </span>
                      <span>{{ item_grandsub.pages.length }}</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        </div>
      </div>
      <AsideContent class="right-aside" />
      
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import AsideContent from "@theme/components/sub-components/AsideContent.vue"

import HomeFooter from '@theme/components/sub-components/Footer.vue'

import MobileSidebar from "@theme/components/sub-components/MobileSidebar.vue"
export default {
  components: {
    AsideContent,
    MobileSidebar,
    HomeFooter
  },
  data() {
    return {};
  },
  computed:{
   
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_palette.scss";
.category-page {
  .main {
    padding:98px 20px 20px;
    max-width: 1200px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    .main-part{
      flex: 3;
    }
    .catetory-content {
      flex-direction: column;
      padding-left: 0;
      
      border-radius: 8px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 20px 24px;
      box-sizing: border-box;
      box-shadow: $boxshadow;
      transition: all 0.3s;
      margin-bottom: 10px;
      &:hover {
        box-shadow: $hovershadow;
      }
      .category-item {
        display: flex;
        flex-direction: column;
        .flex_space_between {
          color: inherit;
          display: flex;
          justify-content: space-between;
          padding: 0.2rem 1rem;
          transition: all 0.3s;
          &:hover {
            padding: 0.2rem 0.85rem;
            background-color: #3eaf7ce1;
            color: #363636;
          }
        }
      }
      .category-title {
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
      .category-content, .aside-content{
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