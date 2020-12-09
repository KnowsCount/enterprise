<!--
 * @Description: 编辑。
 * @Date: 2020-12-08 16:36:52
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-09 17:48:39
 * @FilePath: /vueEnterprise/src/pages/about.vue
-->

<template>
  <div>
    <div class="title">
      <h1>About Page</h1>
      <p>{{ msg }}</p>
      <img src="../assets/logo.png" />
      <p style="padding-left: 30em; padding-right: 30em">{{ msg2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg:
        "Appropriately productize installed base resources before 2.0 action items. Energistically orchestrate unique human capital with just in time functionalities. Compellingly pontificate user friendly e-services after value-added platforms. Seamlessly morph premium total linkage rather than reliable architectures. Appropriately underwhelm wireless value with resource sucking networks.",
      msg2:
        "Rapidiously orchestrate adaptive supply chains for covalent leadership skills. Holisticly foster cost effective niches vis-a-vis orthogonal functionalities. Appropriately e-enable scalable vortals via parallel outsourcing. Completely unleash long-term high-impact materials after top-line resources. Competently cultivate high-quality synergy with emerging core competencies.",
    };
  },
};
</script>

<style>
p {
  padding-left: 5em;
  padding-right: 5em;
}
</style>