<!--
 * @Description: 编辑。
 * @Date: 2020-12-08 16:28:00
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-09 17:56:50
 * @FilePath: /vueEnterprise/src/App.vue
-->
<template>
  <div id="app">
    <nav>
      <div>
        <mu-bottom-nav value="nav0">
          <mu-bottom-nav-item to="/" title="home" value="home">
          </mu-bottom-nav-item>
          <mu-bottom-nav-item to="/admin" title="admin" value="admin">
          </mu-bottom-nav-item>
          <mu-bottom-nav-item to="/about" title="about" value="about">
          </mu-bottom-nav-item>
          <mu-bottom-nav-item to="/contact" title="contact" value="contact">
          </mu-bottom-nav-item>
        </mu-bottom-nav>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2em;
}
</style>
