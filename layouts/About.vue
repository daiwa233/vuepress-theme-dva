<!--
 * @Author: your name
 * @Date: 2020-02-06 19:18:42
 * @LastEditTime : 2020-02-14 18:46:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\layouts\About.vue
 -->
<template>
  <div class="about-page">
    <Header ></Header>
    <MobileSidebar></MobileSidebar>
    <main class="main">
      <Content></Content>
      <div class="comment">
        <clientOnly>
          <ValineComment></ValineComment>
        </clientOnly>
      </div>
      
    </main>
    
  </div>
</template>

<script>
import MobileSidebar from "@theme/components/sub-components/MobileSidebar.vue"
import Header from "@theme/components/sub-components/Header.vue"
import ValineComment from '@theme/components/sub-components/valine.vue'
  export default {
    components:{
      MobileSidebar,
      Header,
      ValineComment
    }
  }
</script>

<style lang="scss" scoped>
.about-page{
  .main{
    padding: 98px 50px 50px;
    max-width: 800px;
    margin: 0 auto;
    transition: all .3s ease-in-out;
    .comment{
      margin-top:30px;
    }
  }
}
@media screen and (max-width: 630px) {
  .about-page{
    .main{
      padding: 98px 20px 20px;
    }
  }
}
</style>