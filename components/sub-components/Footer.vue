<!--
 * @Author: your name
 * @Date: 2020-02-08 19:36:57
 * @LastEditTime : 2020-02-14 14:30:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\Footer.vue
 -->
<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-items" v-if="$themeConfig.footer">
        <div class="footer-item" v-for="(item,i) in $themeConfig.footer" :key="i">
          <a v-if="item.url" :href="item.url"  :target="item.target || '_target'">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.text }}</span>
          </a>
          <span v-else>
             <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.text }}</span>
          </span>
        </div>
      </div>
      <div class="fixed">
        <div class="item"> Powered by <a href="https://vuepress.vuejs.org/zh/" target="_blank"><i class="iconfont icon-qiangli1"></i>Vuepress</a></div>
        <div class="item">theme <a href="https://github.com/lhj233/vuepress-theme-dva" target="_target">dva</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-footer',
    computed:{
      copyright() {
        return this.$themeConfig.copyright || '2018-2020';
      }
    }
  }
</script>

<style lang="scss" scoped>
.footer{
  position: relative;
  
  text-align: center;
  .footer-content{
    max-width: 700px;
    margin: 0 auto;
    padding: 20px 0; 
    box-sizing: border-box;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-top: 1px solid #aaa;
    width: 200%;
    height: 0;
    transform-origin: 0 0;
    transform: scale(0.5, 0.5);
    box-sizing: border-box;
  }
}

.footer-items{
  margin: 0 auto;
  a,span{
    color: inherit;
    font-weight: 500;
  }
  .footer-item{
    padding: 2px 5px;
    display: inline-block;
    
  }
}

.fixed{
  padding-top: 5px;
  .item{
    display: inline-block;
    color: #2c3e50;
    font-weight: 500;
     &:first-child{
      padding-right: 10px;
      border-right: 1px solid #ccc;
    }
    &:last-child{
      padding-left: 10px;
    }
  }
  
  
}
</style>