<!--
 * @Author: your name
 * @Date: 2020-02-09 11:14:44
 * @LastEditTime : 2020-02-15 11:20:42
 * @LastEditors: Please set LastEditors
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

      // add 当没有valine配置时，不引入valine
      const { valineConfig } = this.$themeConfig;
      if (valineConfig) {

        import ('valine').then(Valine => { 
          new Valine.default({
            el:'#vcomments',
            ...valineConfig
          })
        
      })
      }
      

      
    }
  }
</script>

<style lang="scss" scoped>

</style>