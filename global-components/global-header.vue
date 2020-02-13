<!--
 * @Author: your name
 * @Date: 2020-02-04 16:47:19
 * @LastEditTime : 2020-02-13 12:58:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\header.vue
 -->
<template>
  <ModuleTransition>
    <header class="global-header" id="global-header"  v-show="sidebarOpen || showFlag">
     
      <div class="pull_left">
        <div class="sidebar-button" ><svg @click="toogle_sidebar" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon" ><path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"></path></svg></div>
        <div class="site-name"><a href="/">{{ $siteTitle || 'DVA' }}</a></div>
      </div>
      <div class="pull_right">
          <!-- <AlgoliaSearchBox  :options="algolia"></AlgoliaSearchBox> -->
          <SearchBox></SearchBox>
          <div class="nav-links" v-if="navLinks">
            <span class="nav-link-item" v-for="(link, i) in navLinks" :key="i">
              
              <a v-if="link.items" class="dropdown-wrapper">
                <i v-if="link.icon" :class="link.icon"></i>
                {{ link.text }}
                <ul class="link-items">
                  <li v-for="(item,i) in link.items" :key="i">
                    
                    <a :href="item.link" :target="link.target || '_self'" :class="link.link==path ? 'active-link' : ''">
                      <i v-if="item.icon" :class="item.icon"></i>
                    {{ item.text }}
                    </a>
                  </li>
                </ul>
              </a>
              <a
                v-else
                :href="link.link"
                :target="link.target || '_self'"
                :class="link.link==path ? 'active-link' : ''"
              >
              <i v-if="link.icon" :class="link.icon"></i>
              {{ link.text }}
              </a>
            </span>
          </div>
          
      </div>
      <div class="mask" v-show="sidebarOpen" @click="toogle_sidebar"></div>
    </header>
  </ModuleTransition>
</template>

<script>
// import AlgoliaSearchBox from "@theme/components/sub-components/AlgoliaSearchBox.vue";
import SearchBox from '@SearchBox'
import DropdownTransition from '@theme/components/sub-components/DropdownTransition.vue'

export default {
  name: "global-header",
  components: { SearchBox , DropdownTransition},
  props: {
    isScrollHidden: {
      type: Boolean,
      default: true,
    },
    
  },
  data() {
    return {
      showFlag: true,
      sidebarOpen: false,
      // headerStyle: {background: 'rgba(0,0,0,0)', color: '#fff'}
      PubSub: null
    };
  },
  computed: {
    navLinks() {
      return this.$site.themeConfig.nav;
    },
    path() {
      return this.$route.path;
    },
     algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },
  },
  methods: {
    scrollCallback() {
      const _that = this;
      let y = 0,
        time = 0;
      return function() {
        // if (window.scrollY == 0){
        //   _that.headerStyle = {background: 'rgba(0,0,0,0)', color: '#fff'};
        // }
        if (Date.now() - time <= 100) return;
        
        // if (window.scrollY > 0) {
        //   _that.headerStyle.background = "#fff";
        //   _that.headerStyle.color = "inherit";
        // }
        // 向下滚动
        if (window.scrollY > y) {
          _that.showFlag = false;
        } else {
          // 向上滚动
          _that.showFlag = true;
        }
        y = window.scrollY;
        time = Date.now();
      };
    },
    toogle_sidebar() {
      this.sidebarOpen = !this.sidebarOpen;
      if (this.sidebarOpen && this.PubSub) {
        this.PubSub.publish('SIDEBARCLOSED', this.sidebarOpen);

      } else{
         this.PubSub.publish('SIDEBAROPEN', this.sidebarOpen);
 
      }
      
    }
  },

  mounted() {
    import ('pubsub-js').then(PubSub => {
      this.PubSub = PubSub;
    })
    this.isScrollHidden && window.addEventListener("scroll", this.scrollCallback(), false);
  }
};
</script>

<style lang="scss" scoped>
$headerColor: rgba(255, 255, 255, 1);
.global-header {
  z-index:20;
  width: 100%;
  position: fixed;
  box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);
  height: 3.6rem;
  background: $headerColor;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s;
  .pull_left {
    font-size: 20px;
    padding-left: 15px;
    display: flex;
    align-items: center;
    position: relative;
    .site-name{
      a{
        color: inherit;
        &:hover{
          color: #3eaf7c !important;
        }
      }
    }
  }
  .pull_right{
    display: flex;
    align-items: center;
    .search-box{
      margin-right: 0px;
    }
  }
  .nav-links {
    padding: 15px 35px 15px 0px;
    position: relative;
    .nav-link-item {
      margin-left: 1.5rem;
      .dropdown-wrapper{
        cursor: pointer;
        .link-items{
            list-style: none;
            position: absolute;
            right: 0;
            padding: 10px 20px;
            display: none;
            margin-top: 13px;
            width: max-content;
            background: #fff;
            -webkit-box-shadow: 0 5px 20px -4px rgba(0,0,0,.5);
            box-shadow: 0 5px 20px -4px rgba(0,0,0,.5);
            animation: sub_menus .3s .1s ease both;
            >li{
              padding:  5px 10px;
            }
            &::before{
              position: absolute;
              top: -20px;
              left: 0;
              width: 100%;
              height: 25px;
              content: '';
            }
            
        }
        &:hover >.link-items{
          display: block;
        }
      }
      
      .active-link::after {
        width: 100%;
      }
    }
    a {
      color: inherit;
      line-height: 1.4rem;
      position: relative;
      font-size: .9rem;
      &:hover::after {
        width: 100%;
      }
      &::after {
        position: absolute;
        bottom: -4px;
        left: 0;
        z-index: -1;
        width: 0;
        height: 2px;
        background-color: #3eaf7c;
        content: "";
        transition: all 0.3s ease-in-out;
      }
    }
  }

  @keyframes sub_menus {
    0% {
    opacity: 0;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    -ms-filter: none;
    filter: none;
    transform: translateY(0);
  }
  }
   .sidebar-button {
    padding-right: 1rem;
    .icon{
      display: none;
      
    }   
  }


  .mask{
    width: 100vw;
    height: calc(100vh - 58px);
    position: fixed;
    left: 0;
    top: 58px;
    z-index: 9;
    background: rgba(0,0,0,.5);
  }
  @media screen and (max-width:719px) {
    .nav-links{
      display: none;
    }
    .pull_left{
      padding-left: 1rem;
    }
    .search-box{
      padding-right: 20px;
      padding-top: 0 !important;
    }
    .sidebar-button .icon {
      display: block !important;
      width: 1.25rem;
      height: 1.25rem;
    }
}
 
}
</style>