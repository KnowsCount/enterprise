<!--
 * @Description: 编辑。
 * @Date: 2020-12-08 16:29:26
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-09 16:57:39
 * @FilePath: /vueEnterprise/src/components/home.vue
-->

<template>
  <section>
    <mu-appbar title="系统测试"> </mu-appbar>
    <mu-row>
      <mu-col width="20" tablet="20" desktop="20"> &nbsp; </mu-col>
      <mu-col width="20" tablet="20" desktop="20"> &nbsp; </mu-col>
    </mu-row>
    <mu-row>
      <mu-col width="20" tablet="20" desktop="20"> &nbsp; </mu-col>
      <mu-col width="20" tablet="20" desktop="20"> &nbsp; </mu-col>
    </mu-row>
    <mu-paper>
      <mu-text-field type="text" hintText="提示文字"> </mu-text-field>
    </mu-paper>
    <mu-row>
      <mu-col width="20" tablet="20" desktop="20"> &nbsp; </mu-col>
      <mu-col width="20" tablet="20" desktop="20"> &nbsp; </mu-col>
    </mu-row>
    <mu-linear-progress />
    <mu-bottom-nav value="nav0">
      <mu-bottom-nav-item title="nav0" value="nav0"> </mu-bottom-nav-item>
      <mu-bottom-nav-item title="nav1" value="nav1"> </mu-bottom-nav-item>
    </mu-bottom-nav>
  </section>
</template>
<style scoped>
#foo {
  top: 95%;
  right: 5%;
}
</style>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to the Homepage",
    };
  },
};
</script>
