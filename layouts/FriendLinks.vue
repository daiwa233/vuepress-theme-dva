

<template>
  <div class="friend-links-page">
    <Header></Header>
    <MobileSidebar></MobileSidebar>
    <div class="main">
      <Content v-if="!!$page.frontmatter.content"></Content>
      <div class="link-list" v-if="$themeConfig.friendlinks">
        <a :href="item.url" class="link-item" v-for="(item,i) in $themeConfig.friendlinks" :key="i">
            <div class="avatar-box"><img :src="item.avatar" alt=""></div>
            <div class="link-info">
              <p>{{ item.name }}</p>
              <p>{{ item.description }}</p>
              <p>{{ item.url}} <span>→</span></p>
              
            </div>  
            
        </a>
      </div>
      <clientOnly>
          <ValineComment></ValineComment>
      </clientOnly>
    </div>
  </div>
</template>

<script>
import MobileSidebar from "@theme/components/sub-components/MobileSidebar.vue"
import ValineComment from '@theme/components/sub-components/valine.vue'
import Header from "@theme/components/sub-components/Header.vue"
  export default {
    components: {
      MobileSidebar,
      ValineComment,
      Header
    }
  }
</script>

<style lang="scss" scoped>
  .main{
    padding: 128px 40px 40px;
    max-width: 1000px;
    box-sizing: border-box;
    transition: all .3s ease-in-out;
    margin: 0 auto;
    .content__default{
      padding-bottom: 80px;
    }
    .link-list{
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      transition: all .3s ease-in-out;
      justify-content: space-between;
      .link-item{
        transition: all .3s ease-in-out;
        width: 280px;
        min-width: 280px;
        height: 150px;
        padding: 37.5px 20px 20px;
        box-shadow:0 4px 8px 6px rgba(7,17,27,.06);
        box-sizing: border-box;
        margin-bottom: 65px;
        position: relative;
        color: #fff;
        border-radius: 15px;
        
        &:hover{
          box-shadow:  0 4px 12px 12px rgba(7,17,27,.15);
        }
        &:hover .avatar-box{
          box-shadow: 0px 5px 70px 0px #fff, 0px 0px 0px 7px rgba(238, 237, 241, 0.5);
        }

        &:hover .link-info p span{
          animation: bounce 2s infinite;

        }
        &:nth-child(5n) {
          background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
        }
        &:nth-child(5n+1) {
          
          background: radial-gradient(ellipse at top left, rgba(105,155,200,1) 0%,rgba(181,197,216,1) 57%);
        }
        &:nth-child(5n+2){
          background: radial-gradient(ellipse at center, rgba(150, 150, 150, 1) 0%, rgba(89, 89, 89, 1) 100%);
        }
        &:nth-child(5n+3){
          background-image: linear-gradient(#8b9da9, #e7dfd0);
        }
        &:nth-child(5n+4){
          background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg, #670d10 0%,#092756 100%);
        }
        
        .avatar-box{
          position:absolute;
          left: 50%;
          top: 0;
          transform:translate(-50%,-50%);
          width: 75px;
          height: 75px;
          transition: all .5s ease-in-out;
          border-radius: 50%;
          box-shadow: 0px 5px 30px 0px #fff, 0px 0px 0px 3px rgba(238, 237, 241, 0.5);
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
           
          }
        }
        .link-info{
          p{
            margin: 8px 0 !important;
            overflow:hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
            cursor: pointer;
            span{
              display: inline-block;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .link-list{
      .link-item{
        width:calc(50% - 40px) !important;
      }
    }
  }
   @media screen and (max-width: 679px) {
    .link-list{
      .link-item{
        width: 100% !important;
      }
    }
  }

  @keyframes bounce {
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

</style>