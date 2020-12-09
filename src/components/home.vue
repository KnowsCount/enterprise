<!--
 * @Description: 编辑。
 * @Date: 2020-12-08 16:29:26
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-09 18:11:08
 * @FilePath: /vueEnterprise/src/components/home.vue
-->

<template>
  <section>
    <mu-appbar title="主页"> </mu-appbar>
    <img src="../assets/logo.png" style="" />
    <mu-bottom-nav value="nav0">
      <mu-bottom-nav-item title="简介" value="intro"> </mu-bottom-nav-item>
      <mu-bottom-nav-item title="案例" value="cases"> </mu-bottom-nav-item>
    </mu-bottom-nav>
  </section>
</template>
<style>
.mu-bottom-item-active .mu-bottom-item-text {
  font-size: 18px;
}
.mu-bottom-item-text {
  font-size: 14px;
}
</style>
