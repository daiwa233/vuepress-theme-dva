<!--
 * @Author: your name
 * @Date: 2020-02-03 15:55:27
 * @LastEditTime : 2020-02-10 17:07:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\global-components\ModuleTransition.vue
 -->

<template>
  <transition name="module-transition" >
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: 'ModuleTransition',
    props: {
      duration: {
        type: String,
        default: '.3s'
      },
       direction: {
        type: String,
        default: "down"
      }
    },
    
  }
</script>

<style lang="scss" scoped>
.module-transition-enter-active{
  opacity: 1;
  transition: all .3s ease-in-out .06s;
}
.module-transition-enter, .module-transition-leave-to{
  opacity: 0;
  transform: translateY(-20px);
}
</style>