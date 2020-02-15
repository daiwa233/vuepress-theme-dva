
<template>
  <div>
    <Header></Header>
    <MobileSidebar></MobileSidebar>
    <main class="main">
      <div class="y-m-block" v-for="(item,i) in $placeOnArticle" :key="i">
        <ul class="y-m-d-block" :style="randomColor()">
          <li>
            <i class="iconfont icon-2 left bulb"></i>
            <div class="timeLine left"></div>
            <span class="timeline-date" :style="randomBg()"><a :id="`dva-${item[0].date}`" :href="`#dva-${item[0].date}`">{{item[0].date|formatDateYM}}</a></span>
          </li>
          <li v-for="(sub_item, i) in item" :key="i">
            <div class="left circle"></div>
            <div class="timeLine left"></div>
            <span class="timeline-date" :style="randomBg()" >{{ sub_item.frontmatter.date | formatDateD }}</span>
            <span class="content">{{sub_item.title}}</span>
          </li>
        </ul>
      </div>
      
    </main>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeFooter from "@theme/components/sub-components/Footer.vue";
import Header from "@theme/components/sub-components/Header.vue"
import MobileSidebar from "@theme/components/sub-components/MobileSidebar.vue";
export default {
  components: {
    MobileSidebar,
    HomeFooter,
    Header
  },
  data() {
    return {
     randomNam: null
    }
  },
  methods: {
    randomColor() {
      // return () => { return {color:colorArray[this.randomNum]}}
      let backgroundArray = ["#fff1f0","#fff2e8",'#fff7e6','#f9f0ff','#e6fffb','#e6f7ff','#f0f5ff','#fff0f6'];
      let colorArray = ['#f5222d', '#fa541c','#fa8c16', '#722ed1', '#13c2c2','#1890ff','#2f54eb','#eb2f96'];
      
      let num = Math.floor(Math.random()*7);
      // this.style = {background: backgroundArray[num]};
      this.randomNum = num;
      return {
        color: colorArray[num]
      }
      

      // let style1 = {
      //    background: "#fff1f0",
      //    color: '#f5222d',
      // }
      // let style2 = {
      //    background: "#fff2e8",
      //    color: '#fa541c',
      // }
      // let style3 = {
      //   background: '#fff7e6',
      //   color: '#fa8c16'
      // }
      // let style7 = {
      //   background: '#fffbe6',
      //   color: '#fadb14'
      // }
      // let style4 = {
      //   background: '#e6fffb',
      //   color: '#13c2c2'
      // }
      // let style5 = {
      //   background: '#e6f7ff',
      //   color: '#1890ff'
      // }
      // let style6 = {
      //   background: '#f0f5ff',
      //   color: '#2f54eb'
      // }
      
    },
    randomBg() {
      let backgroundArray = ["#fff1f0","#fff2e8",'#fff7e6','#f9f0ff','#e6fffb','#e6f7ff','#f0f5ff','#fff0f6'];
      return {background: backgroundArray[this.randomNum]};
    }
  },
  mounted() {
     const { hash } = this.$route;
     if(hash) {
       let dom = document.querySelector(decodeURI(hash));
       dom && setTimeout(() => dom.scrollIntoView({behavior: 'smooth', block: 'start'}),1100)
     }
     
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 98px 50px 50px;
  max-width: 900px;
  margin: 0 auto;
  width: fit-content;
  .y-m-block {
    margin-bottom: 50px;
    .y-m-d-block {
      padding: 0 !important;

      &:hover li:first-child .timeLine {
        height: 100%;
        top: 28px !important;
        transition: all 0.3s ease-in-out;
      }
      &:hover .bulb {
        color: inherit !important;
        transition: all 0.2s ease-in-out 0.3s;
      }
      li {
        color:inherit;
       
        position: relative;
        padding: 12px 5px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.3s ease-in-out;
        .content {
          display: inline-block;
          transition: all 0.3s ease-in-out;
          color: #2c3e50;
        }
        &:hover .content {
          color: inherit;
          transform: translateX(10px);
        }
        &:first-child {
          margin-bottom: 10px;
          
          .timeLine {
            top: 39px !important;
          }
        }
        &:last-child {
          .timeLine {
            display: none;
          }
        }
      }
      .bulb {
        left: -23px;
        top: 7px;
        color: #aaa !important;
      }
      .left {
        position: absolute;
        color: inherit;
        box-sizing: border-box;
      }
      .timeline-date {
        box-sizing: border-box;
        padding: 5px 10px;
        background: #f8f0ff;
        color: inherit;
        margin-right: 10px;
        border-radius: 5px;
        a{
          color: inherit;
          font-weight: normal !important;
          padding-top: 4.6rem;
        }
      }
      .circle {
        left: -20px;
        top: 18px;
        width: 10px;
        height: 10px;
        border: 2px solid;
        border-color: inherit;
        border-radius: 100px;
      }
      .timeLine {
        left: -16px;
        top: 28px;
        width: 2px;
        height: calc(100% - 10px);
        border-left: 2px solid #cdd7db;
        
      }
    }


  }
}
</style>