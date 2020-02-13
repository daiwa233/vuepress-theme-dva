<!--
 * @Author: your name
 * @Date: 2020-02-13 17:37:09
 * @LastEditTime : 2020-02-13 17:38:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuepress-theme-dva-devloping\layouts\404.vue
 -->
<template>
  <div class="theme-container">
    <div class="theme-dva-content">
      <h1>404</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
        Take me home.
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]
export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
<style lang="scss" scoped>
  .theme-dva-content{
    max-width: 740px;
    margin: 150px auto;
    padding: 2rem 2.5rem;
}

</style>