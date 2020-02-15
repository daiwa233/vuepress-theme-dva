<!--
 * @Author: your name
 * @Date: 2020-02-04 12:20:42
 * @LastEditTime : 2020-02-14 23:39:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva\layouts\Article.vue
 -->
<template>
  <div >
    <Header></Header>

    <Sidebar></Sidebar>
    
    
    <div class="main">
      <div class="content-container">
        <div class="article-header">
          <h1>{{ $page.title }}</h1>
          <hr>
          <div class="article-info">
            <span v-if="$frontmatter.author">
              <i class="iconfont icon-zuozhe"></i>
              {{ $page.frontmatter.author}}
            </span>
            <span v-if="$frontmatter.date">
              <i class="iconfont icon-riqiqishu"></i>
              {{$page.frontmatter.date | formatDate}}
            </span>
            <span :id="path" class="leancloud_visitors" :data-flag-title="$page.title">
              <i class="iconfont icon-ico_yueduliang"></i>
              <span class="leancloud-visitors-count"></span>
            </span>
            <span v-if="category">
              <i class="iconfont icon-fenlei"></i>
              <span v-for="(item, i) in articleCategory" :key="i">
                {{ item }}&nbsp;
              </span>
            </span>
            <span v-if="tag">
              <i class="iconfont icon-label"></i>
              <span v-for="(item,i) in tag" :key="i">
                {{item}} &nbsp;&nbsp;
              </span>
            </span>
          </div>
        </div>
        <div class="container">
          <Content class="theme-dva-content"></Content>
        <!-- <div class="relatives-container container">
          <div class="relative-title">
            <h3>相关推荐</h3>
            <hr>
          </div>
          <div class="relatives ">
            <div class="relative-item" v-for="(item,i) in getRelatives" :key="i">
              <ArticleBox :article="item"></ArticleBox>
            </div>
          </div>
        </div> -->
        <PageFooter></PageFooter>
        </div>
        
        <clientOnly>
          <ValineComment></ValineComment>
        </clientOnly>
        
      </div>
    </div>

    

  </div>
</template>

<script>
import ValineComment from '@theme/components/sub-components/valine.vue'
import Sidebar from '@theme/components/sub-components/Sidebar.vue'
import ArticleBox from '@theme/components/sub-components/ArticleBox.vue'
import PageFooter from '@theme/components/sub-components/PageFooter.vue'
import Header from "@theme/components/sub-components/Header.vue"
  export default {
    components: {
      ValineComment,
      Sidebar,
      ArticleBox,
      PageFooter,
      Header
    },
    data() {
      return {}
    },
    computed: {
      path() {
        return this.$route.path;
      },
      category() {
        return this.$frontmatter.category || this.$frontmatter.categories || null;
      },
      tag() {
        return this.$frontmatter.tag || this.$frontmatter.tags || null;
      },
      articleCategory() {
         if (this.category) {
           return this.category
                  .filter(item =>  item.split('/').length === 1)
                  .map(item => {
                    // 分类和分类名字做映射
                    if (this.$themeConfig.categoryNames) {
                      for (const val of Object.keys(this.$themeConfig.categoryNames)) {
                        if (item === val) return this.$themeConfig.categoryNames[val]
                      }
                    }
                    return item;
                  })
          }
        return [];
      },
      // 获得该文章标签，分类下的推荐文章
      // getRelatives() {
      //   let step = [];
      //   if (this.tag) {
          
      //     for(const val of this.tag) {

      //      step.push(...Object.values(this.$tag._metaMap).filter(item => item.key===val)[0].pages);
      //     }
          
         
      //   }
      //   if (this.category) {
      //     for(const val of this.category) {
      //      step.push(...Object.values(this.$category._metaMap).filter(item => item.key===val)[0].pages);
      //     }
      //   }
      //   // 去重
      //   let result = [...new Set(step)];
      //   // 过滤 + 截取 （小于4,slice 会正确截取）
      //   return result.length > 1 ? result.filter(item => item.path !== this.$route.path).slice(0,4) : [];
      // }
    },
    methods: {
      // 平滑滚动至视野中
      // smoothScroll() {
      //   for(const domEl of document.querySelectorAll('.content__default .header-anchor')){
      //     domEl.addEventListener('click', function(e) {
      //       e.preventDefault();
            
      //       this.parentNode.scrollIntoView({behavior: 'smooth', block: 'start'});
      //       // window.location.hash = `#${this.parentNode.getAttribute('id')}`;
      //     })
      // }
      // },
      
      
    },
    created() {
    },
    mounted() {
      // this.smoothScroll();
    },
    
  }
</script>

<style lang="scss" scoped>



.main{
  margin-left: 20rem;
  transition: all .3s ease-in-out;

  .article-header{
    h1{
      font-size: 2rem;
    }
    .article-info{
      
      >span{
        padding-right: 10px;
        
      }
      span{
        font-size: .9rem;
        word-wrap: break-word;
      }
    }
  }
  .content-container{
    padding:  98px 20px 0;
    margin: 0 auto;
    max-width: 900px;
    
    .container{
      margin: 20px 0;
      box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
      transition: all .3s;
      padding:  40px 50px 50px;
      border-radius: 2px;
      &:hover{
        box-shadow: 0 4px 12px 12px rgba(7,17,27,.15);
      }
    }
    
  }
}



@media(max-width: 1000px) {
 
  // .main{
  //   margin-left:0 !important;
  // }
   
  .content-container{
    padding: 98px 35px 35px !important;
    .container{
      padding: 40px 35px 35px !important;
    }
  }
}

@media(max-width: 850px) {
  
  .article-header{
    h1{
      font-size: 1.8rem !important;
    }
  }
  .content-container{
    padding: 98px 15px 15px !important;
    .container{
      padding: 40px 10px 10px !important;
      box-shadow: none !important;
      &:hover{
        box-shadow: none !important;
      }
    }
  }




}
@media (max-width: 959px){
  .main{
    margin-left:16.4rem !important;
  }
}

@media(max-width: 719px){
  .main{
    margin-left:0 !important;
  }
  .aside-directory{
    left: -16.4rem;
  }
}

</style>