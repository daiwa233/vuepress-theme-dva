
<template>
  <aside class="sidebar" :style="asideStyle">
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
   
   <div class="article-directory" v-if="showdir">
      <p>{{ $page.title }}</p>
    <ul >
      <li 
      :class="`level${item.level}`" 
      :id="`dir-${item.slug}`" 
      v-for=" (item, i) in $page.headers " 
      :key="i">
      <a 
      :href="`#${item.slug}`" 
      @click.prevent="scrollToTarget(`#${item.slug}`)"
      >
      {{ item.title }}
       </a> 
      </li>
    </ul>
   </div>
  </aside>
</template>

<script>

import DropdownTransition from '@theme/components/sub-components/DropdownTransition.vue'
  export default {
    name: 'Sidebar',
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
    showdir() {
      // fix: 当文章没有h2,h3标题的时候 this.$page.headers === 'undefined'
      return this.$page.id==='post' && this.$page.title && this.$page.headers;
    }
    },
    props: {
      needScrollEvent: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      
      // 平滑滚动至视野中
      scrollToTarget(target) {
        let elem = document.querySelector(target);
        elem.scrollIntoView({behavior: 'smooth', block: 'start'});
      },
      toogleDirectory() {
        let _that = this;
        let domList = {}, dirList = {};
          for(const item of this.$page.headers) {
            domList[item.slug] = document.querySelector(`#${item.slug}`);
            dirList[item.slug] = document.querySelector(`#dir-${item.slug}`);
          }
        window.addEventListener('scroll', function() {
           window.requestAnimationFrame(() => {
             Object.keys(domList).forEach(item => {
              const {top} = domList[item].getBoundingClientRect();
              // 小于等于1 因为点击锚点时，浏览器没有非常精确到视口顶端，大概是0.7多
              if (top <= 1 ) {
               
                // console.log(getPrevNode())
                let prevNode = _that.getPrevNode(dirList[item]);
               if ( prevNode && prevNode.className.includes('active')) {
                 prevNode.classList.remove('active');
                 
               }
               dirList[item].classList.add('active');
              } else {
                
                if (dirList[item].className.includes('active')) {
                  dirList[item].classList.remove('active');
                }
                
              }
            })
           })
        })
        
      },
      getPrevNode(el) {
        return el.previousElementSibling || el.previousSibling;
      },
      toogle_sidebar(msg, data) {
        if (data) {
          this.asideStyle.transform = "translateX(16.4rem)";
        } else{
          this.asideStyle.transform = "translateX(0px)";
        }
    }
    },
    created() {
      
    },
    mounted() {

      import ('pubsub-js').then( PubSub => {
        PubSub.subscribe('SIDEBAROPEN', this.toogle_sidebar);
        PubSub.subscribe('SIDEBARCLOSED', this.toogle_sidebar);
      })
      
     this.needScrollEvent && this.showdir && this.toogleDirectory();
    }
  }
</script>

<style lang="scss" scoped>

.sidebar{
  position: fixed;
  left:0;
  top: 58px;
  height: calc(100% - 58px);
  width: 20rem;
  padding: 20px 0px 50px 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: all .3s; 
  z-index: 30;
  border-top: 1px solid #eaecef;
  .level2, .level3{
    box-sizing: border-box;
    a{
      display: block;
      padding-left: .6rem;
      border-right: 3px solid transparent;
      text-decoration: none;
      transition: all .2s ease-in-out;
      &:hover{
      color: #69cbc8;
      }
    }
  }
  .level2{
      font-size: .9rem;
      padding:5px ;
    
  }
  .level3{
      font-size: .9rem;
      margin-left: 1rem;
  }
  >span{
    text-align: center;
    font-size: 1.15rem;
  }
  a{
    color: inherit;
    cursor: pointer;
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
    border-bottom: 1px solid rgb(230, 222, 222);
    margin-bottom: 15px;
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
  .article-directory{
    
    p{
      font-size: 1.1em;
      font-weight: 700;
      padding: .35rem 1.5rem .35rem 1.25rem;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      text-align: center;
      
    }
  }
}
@media screen and (min-width: 719px){
  .mobile-sidebar{
    display: none !important;
  }
  .sub-link-items {
      transition: height .1s ease-out;
      overflow: hidden;
  }
}
@media(max-width: 959px) {
  
  .sidebar{
    font-size: 15px;
    width: 16.4rem !important;
  }


}
@media(max-width: 719px){
  .sidebar{
    left: -16.4rem;
  }
}

</style>