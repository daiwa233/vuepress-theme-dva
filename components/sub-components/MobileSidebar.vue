<!--
 * @Author: your name
 * @Date: 2020-02-09 13:57:02
 * @LastEditTime : 2020-02-13 12:39:08
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\Directory.vue
 -->
<!--
 * @Author: your name
 * @Date: 2020-02-09 13:57:02
 * @LastEditTime : 2020-02-09 18:59:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\Directory.vue
 -->
<template>
  <aside class="special-sidebar" :style="asideStyle">
    <div class="mobile-sidebar" >
        <div class="aside-link" v-if="navLinks">
          <span class="aside-link-item" v-for="(link, i) in navLinks" :key="i">
            <a v-if="link.items" class="dropdown-wrapper">
              <i v-if="link.icon" :class="link.icon"></i>
             <span> {{ link.text }}</span>
             <span class="iconfont icon-index103 right" @click="sub_link_item = !sub_link_item" ></span>
             <DropdownTransition>
              <ul v-show="sub_link_item" class="sub-link-items">
                <li v-for="(item,i) in link.items" :key="i">
                  <a
                    :href="item.link"
                    :target="link.target || '_self'"
                    :class="link.link==path ? 'active-link' : ''"
                  >
                    <i v-if="item.icon" :class="item.icon"></i>
                   <span> {{ item.text }}</span>
                  </a>
                </li>
              </ul>
              </DropdownTransition>
            </a>
            <a
              v-else
              :href="link.link"
              :target="link.target || '_self'"
              :class="link.link==path ? 'active-link' : ''"
            >
              <i v-if="link.icon" :class="link.icon"></i>
              <span>{{ link.text }}</span>
            </a>
          </span>
        </div>  
    </div>
  </aside>

</template>

<script>
import DropdownTransition from '@theme/components/sub-components/DropdownTransition.vue'
  export default {
    name: 'MobileSidebar',
    components: {
      DropdownTransition
    },
    data() {
      return {
        asideStyle: {
          transform: 'translateX(0px)'
        }, 
        sub_link_item:false,
      }
    },
    computed: {
      navLinks() {
        return this.$site.themeConfig.nav;
      },
      path() {
      return this.$route.path;
    },
    },

    methods: {
      



      toogle_sidebar(msg, data) {
        if (data) {
          this.asideStyle.transform = "translateX(16.4rem)";
        } else{
          this.asideStyle.transform = "translateX(0px)";
        }
    }
    },
    mounted() {
      
      import ('pubsub-js').then( PubSub => {
        PubSub.subscribe('SIDEBAROPEN', this.toogle_sidebar);
        PubSub.subscribe('SIDEBARCLOSED', this.toogle_sidebar);
      })
    }
  }
</script>

<style lang="scss" scoped>

.special-sidebar{
  position: fixed;
  left:-16.4rem;
  top: 58px;
  height: calc(100% - 58px);
  width: 16.4rem;
  background: #fff;
  padding: 20px 0px 50px 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: all .3s; 
  z-index: 30;
  border-top: 1px solid #eaecef;
  

  a{
    color: inherit;
    cursor: pointer;
    .sub-link-items{
      padding-left: 1em;
    }
  }
  .active{
    a{
      background: #3eaf7ce3;
      border-right-color: #de9253;
      color: #fff;
      border-radius: 2px;
    }
  }
  .mobile-sidebar{
    display: block;
    width: 100%;
    background: #fff;
    transition: all .5s;
    box-sizing: border-box;
    z-index:10;
    .aside-link{
      display: flex;
      flex-direction: column;
      padding: 0px 10px;
      
      .aside-link-item{
        padding: 6px 18px;
        transition: all .3s;
       
        a{
          display: block;
          color: inherit;
          position: relative;
          span{
            padding-left: 5px;
          }
          .right{
            float: right;
          }
          .sub-link-items{
             margin: 0 !important;
             transition: height .3s ease-out;
             overflow: hidden;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 719px){
  .special-sidebar{
    display: none !important;
  }
  .sub-link-items {
      transition: height .1s ease-out;
      overflow: hidden;
  }
}



</style>