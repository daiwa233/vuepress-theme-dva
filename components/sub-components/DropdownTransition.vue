<!--
 * @Author: your name
 * @Date: 2020-02-11 01:20:37
 * @LastEditTime: 2020-02-11 01:20:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\components\sub-components\DropdownTransition.vue
 -->

<template>
  <transition
    name="dropdown"
    @enter="setHeight"
    @after-enter="unsetHeight"
    @before-leave="setHeight"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'DropdownTransition',
  methods: {
    setHeight (items) {
      // explicitly set height so that it can be transitioned
      items.style.height = items.scrollHeight + 'px'
    },
    unsetHeight (items) {
      items.style.height = ''
    }
  }
}
</script>

<style lang="stylus">
.dropdown-enter, .dropdown-leave-to
  height 0 !important
</style>