<!--
 * @Author: your name
 * @Date: 2020-02-05 18:09:11
 * @LastEditTime : 2020-02-13 13:30:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\aside-content.vue
 -->
<template>
  <div class="aside-content">
    <div class="site-card card">
      <div class="avatar-box">
        <img :src="avatar" alt class="avatar" />
      </div>
      <div class="site-info">
        <div class="site-title">{{ $siteTitle || 'DVA'}}</div>
        <div class="site-shortword">{{ $description || '今日事 今日毕'}}</div>
      </div>
      <div class="article-info">
        <div class="nums">
          <a href="/" target="_self">
            <p>文章</p>
            <p>{{ articleNum.length }}</p>
          </a>
        </div>
        <div class="tags">
          <a href="/tags" target="_self">
            <p>标签</p>
            <p>{{ $tag.length }}</p>
          </a>
        </div>
        <div class="categories">
          <a href="/categories" target="_self">
            <p>分类</p>
            <p>{{ $category.length }}</p>
          </a>
        </div>
      </div>
      <div class="bookmark" onclick="alert('使用Ctrl+D将本站加入书签')">
        <a href="javascript:;" rel="external nofollow noreferrer" title="加入书签" target="_self">
          <i aria-hidden="true"></i>
          <span>加入书签</span>
        </a>
      </div>
      <div class="social-links" v-if="$themeConfig.socialLinks">
        <span v-for="(item, i) in $themeConfig.socialLinks" :key="i">
          <a
            :href="item.url"
            :target="item.target ? item.target : '_blank'"
            :title="item.title ? item.title : ''"
          >
            <i :class="item.icon ? `${item.icon} dva-icon` : 'dva-icon'"></i>
          </a>
        </span>
      </div>
    </div>
    <div class="notice-card card" v-if="$themeConfig.notifyContent">
      <div>
        <i class="iconfont icon-gonggao"></i>
        <span class="notify">公告</span>
      </div>
      <div class="notify-content">
        <div>{{ $themeConfig.notifyContent || '笨蛋'}}</div>
      </div>
    </div>
    <div class="category-card card" v-if="$category.length>0">
      <div class="title">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </div>
      <ul class="category-part">
        <li class="category-item" v-for="(item,i) in $categoryItems " :key="i">
          <a  :href="item.path" target="_self" class="flex_space_between">
          <span >{{item.id}}</span>
          <span>{{ item.pages.length }}</span>
          </a>

          <ul class="category-item__sub_wrapper" v-if="item.sub.length>0">
            <li class="category-item__sub" v-for="(item_sub, i) in item.sub " :key="i">
              <a :href="item_sub.path" target="_self" class="flex_space_between" >
              <span >
                <i class="iconfont icon-ziji"></i>
                {{item_sub.id}}
                </span>
              <span>{{ item_sub.pages.length }}</span>
              </a>
              <ul class="category-item__grandsub_wrapper" v-if="item_sub.sub.length>0">
                <li class="category-item__grandsub" v-for="(item_grandsub, i) in item_sub.sub" :key="i">
                    <a  :href="item_grandsub.path" target="_self" class="flex_space_between">
                    <span>
                      <i class="iconfont icon-ziji"></i>
                      {{item_grandsub.id}}
                    </span>
                    <span>{{ item_grandsub.pages.length }}</span>
                    </a>
                </li>
              </ul>
            </li>
          </ul>

        </li>
      </ul>
      
    </div>
    <div class="card tag-card" v-if="$tag.length>0">
      <div class="title">
        <i class="iconfont icon-label"></i>
        <span>标签</span>
      </div>
      <div class="tag-content">
        <span class="tag-item all "><a href="/tags" target="_self">全部</a></span>
        <span v-for="(item,i) in tagItems" :key="i" :style="generatorTagStyle(item.pages.length)" class="tag-item">
          <a :href="item.path" target="_self" >{{ item.key }}</a>
          
        </span>
      </div>
    </div>
    <div class="card category-card" v-if="$placeOnArticle.length>0">
      <div class="title">
        <i class="iconfont icon-guidang1"></i>
        <span>归档</span>
      </div>
        <ul class="category-part">
          <li class="category-item" v-for="(item,i) in $placeOnArticle.slice(0,10)" :key="i">
            <a class="flex_space_between" :href="`/timeline.html#dva-${item[0].date}`"> 
              <span>{{ item[0].date }}</span>
              <span>{{ item.length }}</span>
            </a>
          </li> 
        </ul>
         <div class="lookmore" v-if="$placeOnArticle.length>10"><a href="/timeline.html" target="_self">查看更多</a></div>
    </div>
  </div>
</template>

<script>
import DropdownTransition from '@theme/components/sub-components/DropdownTransition.vue'
export default {
name: "AsideContent",
components: {DropdownTransition},
  data() {
    return {
    }
  },
  computed: {
    avatar() {
      return this.$themeConfig.avatar || "http://img.start-here.cn/logo.jpg";
    },
    tagItems() {
      return Object.values(this.$tag._metaMap)
    },
    articleNum() {
      return this.$site.pages.filter(item => item.path.includes('/_posts/'));
    },
  },
  methods: {
    generatorTagStyle(num) {
      let style = {};
      switch(num) {
        case num >= 25:
           style.color = `#3eaf7c`;
           break;
        case num >= 20: 
           style.color = `rgb(130,57,53)`;
           break;
        case num >= 15:
          style.color = `rgb(147,190,178)`;
          break;
        case num >= 10:
          style.color = `rgb(201,186,131)`;
          break;
        case num >= 5:
          style.background = `rgb(222,211,140)`;
          break;
        default: 
        style.background = `rgb(222,146,83)`;
      }
      return style;
    },
  },
  created() {
      
     
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_palette.scss";
.aside-content {
  margin-left: 15px;
  .card {
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20px 24px;
    box-sizing: border-box;
    box-shadow: $boxshadow;
    transition: all 0.3s;
    margin-bottom: 10px;
    &:hover {
      box-shadow: $hovershadow;
    }
  }
  .site-card {
    flex-direction: column;
    align-items: center;
    text-align: center;

    .avatar-box {
      width: 110px;
      height: 110px;

      .avatar {
        width: 100%;
        height: 100%;
      }
    }
    .site-info {
      .site-title {
        font-size: 1.5rem;
        margin: 10px 0 15px;
      }
    }
    .article-info {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      > div {
        padding: 0px 10px;
        :first-child {
          font-size: 0.9rem;
        }
        p {
          line-height: 1rem;
          color: #4c4948;
          font-size: 20px;
        }
      }
    }
    .bookmark {
      width: 100%;
      background: linear-gradient(to bottom right, #50a3a2 0%, #4ac08f 100%);
      position: relative;
      padding: 8px 0;
      box-sizing: border-box;
      font-size: 14px;
      border-radius: 5px;
      a {
        color: #fff;
      }
    }
    .social-links {
      padding: 15px 20px 5px;
      display: flex;
      justify-content: space-between;
      span {
        a {
          color: #3eaf7c94;
          &:hover {
            color: #3eaf7c;
          }
        }
        .dva-icon {
          font-size: 20px;
          padding: 0 8px;
        }
      }
    }
  }
  .notice-card {
    flex-direction: column;

    i::before {
      color: #ff7242;
    }
    .notify {
      margin-left: 5px;
    }
    .notify-content {
      word-break: break-word;
      font-size: 0.9rem;
    }
  }
  .category-card {
    flex-direction: column;
    .category-part{
      padding-left: 0;  
      span{
        font-size: .9rem;
      }     
      .category-item{
        display: flex;
        flex-direction: column;
        .flex_space_between{
          color: inherit;
          display: flex;
          justify-content: space-between;
          padding: .2rem 1rem;
          transition: all .3s;
          &:hover{
            padding: .2rem .85rem;
            background-color: #3eaf7ce1;
            color: #363636;
          }
        }
      }
    }
  }
  .tag-card{
    flex-direction: column;
    .tag-content{
      margin:15px 0 15px;
      display: flex;
      flex-wrap: wrap;
      .all{
        background: #3eaf7c;
      }
      .tag-item{
        font-size: 14px;
        padding: 5px;
        color: #fff;
        margin: 5px;
        border-radius: .2rem;
        box-shadow: 0 1px 6px 0 rgba(0,0,0,.2);
        transition: all .5s;
        cursor: pointer;
        a{
          color: inherit;
          display: inline-block;
        }
        
        &:hover {
          border-radius: .5rem;
        }
      }
    }
  }

  .title{
    span{
      padding-left:10px 5px;
    }
  }
  .lookmore{
    text-align: center;
    transition: all .3s ease;
    padding: .5rem 1rem;
    a{
      display: block;
      color: inherit;
    }
    &:hover{
       background-color: #3eaf7ce1;
    }
  }
}
</style>