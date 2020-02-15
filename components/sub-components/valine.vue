<!--
 * @Author: your name
 * @Date: 2020-02-09 11:14:44
 * @LastEditTime : 2020-02-15 11:20:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\valine.vue
 -->
<template>
  <div id="vcomments">

  </div>
</template>

<script>



  export default {
    name: 'ValineComment',
    
    mounted() {

      // import ('leancloud-storage').then(AV => {
      //   window.AV = AV;
      //   const {valineConfig = {}} = this.$themeConfig;

      //   const Valine = require('valine');
      //   new Valine({
      //     el:'#vcomments',
      //     ...valineConfig
      //   })
      // })
      import ('valine').then(Valine => {
        
        const {valineConfig = {}} = this.$themeConfig;
        new Valine.default({
          el:'#vcomments',
          ...valineConfig
        })
        
      })

      
    }
  }
</script>

<style lang="scss" scoped>

</style>