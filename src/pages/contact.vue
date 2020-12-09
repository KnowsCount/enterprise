<!--
 * @Description: 编辑。
 * @Date: 2020-12-09 17:39:43
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-09 17:49:15
 * @FilePath: /vueEnterprise/src/pages/contact.vue
-->

<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
      <mu-paper>
        <mu-text-field type="text" hintText="leave your name"> </mu-text-field>
        <div>leave your email here</div>
        <br />
      </mu-paper>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to the Contact Page",
    };
  },
};
</script>
