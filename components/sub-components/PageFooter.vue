<!--
 * @Author: your name
 * @Date: 2020-02-13 23:46:27
 * @LastEditTime : 2020-02-14 15:31:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\PageFooter.vue
 -->

<template>
  <div class="page-footer">
    <div class="copyright" v-if="copyright">
      <i class="iconfont icon-copyright">{{copyrightText}}</i>
    </div>

    <div
      v-if="lastUpdated"
      class="last-updated"
    >
      <span class="prefix">{{ lastUpdatedText }}:</span>
      <span class="time">{{ lastUpdated }}</span>
    </div>
    <hr>
    <div class="relatives" >
      <div class="prev" v-if="prevPage">
         <span><i class="iconfont icon-weibiaoti39"></i></span>
        <a :href="prevPage.path">{{ prevPage.title }}</a>
       
      </div>
      <div class="next" v-if="nextPage">
       
        <a :href="nextPage.path">{{ nextPage.title }}</a>
        <span> <i class="iconfont icon-weibiaoti40"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'PageEdit',
  computed: {
    lastUpdated () {
      return this.$page.lastUpdated
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return '上次更新'
    },
    copyright() {
      if (typeof this.$frontmatter.copyright === "boolean") {
        return this.$frontmatter.copyright;
      }
      if (typeof this.$themeConfig.copyright === "boolean") {
        return this.$themeConfig.copyright;
      }
      return true;
    },
    copyrightText() {
      if (typeof this.$frontmatter.copyrightText === "string") {
        return this.$frontmatter.copyrightText;
      }
      if (typeof this.$themeConfig.copyrightText === "string") {
        return this.$themeConfig.copyrightText;
      }
      return "转载请注明出处";
    },
    pages() {
      return this.$site.pages
      .filter((item) => item.path.includes('/_posts/') && item.frontmatter.date)
      .sort((a,b) => moment(b.frontmatter.date).valueOf() - moment(a.frontmatter.date).valueOf() );
    },
    prevPage() {
      
     let index = this.pages.findIndex(item => item===this.$page);
      return index-1 >= 0 ? this.pages[index-1] : null;
    },
     nextPage() {
      let index = this.pages.findIndex(item => item===this.$page);
      return index+1 >= 0 ? this.pages[index+1] : null;
    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style lang="stylus">
@require '../../styles/wrapper.styl'
.page-footer
  @extend $wrapper
  padding-top 2rem
  padding-bottom 1rem
  overflow auto
  .copyright
    display inline-block
    
    i
      font-size .9rem
      color: #aaa
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa
  .relatives
    padding-top 1.5rem
    a
      color inherit
      font-size 1rem
    .next
      float right
      >span 
        display inline-block
      
      &:hover span{
        color inherit
       animation bounceRight 2s infinite
      }
    .prev
      float left
      >span 
        display inline-block
      &:hover span{
        color inherit
       animation bounceLeft 2s infinite;
      }
@media (max-width: 800px)
  .page-footer
    .copyright
       margin-bottom 0.5rem
    .last-updated
      font-size 0.8em
      float none 
      text-align left
    
      

  
@keyframes bounceRight {
    0%,30%, 50%,80%,100%{
      transform: translatex(0px);
    }
    25%{
      transform: translateX(5px);
    }
    40%{
       transform: translatex(10px);
    }
    60%{
      transform: translateX(5px);
    }
  }
@keyframes bounceLeft {
    0%,30%, 50%,80%,100%{
      transform: translatex(0px);
    }
    25%{
      transform: translateX(-5px);
    }
    40%{
       transform: translatex(-10px);
    }
    60%{
      transform: translateX(-5px);
    }
  }



</style>