<!--
 * @Author: your name
 * @Date: 2020-02-08 19:36:57
 * @LastEditTime : 2020-02-14 14:30:33
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\Footer.vue
 -->
<template>
  <div class="footer">
    <div class="footer-content">
      <div >
        <i class="iconfont icon-copyright"></i>
        {{ copyright }} 
        <span>by {{ $themeConfig.copyrightName || $siteTitle || 'Dva'}}</span>
      </div>
      <div>Powered by <a href="https://vuepress.vuejs.org/zh/" target="_blank"><i class="iconfont icon-qiangli1"></i>Vuepress</a></div>
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
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 20px 0; 
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
</style>