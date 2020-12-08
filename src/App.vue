<!--
 * @Description: 编辑。
 * @Date: 2020-12-08 16:28:00
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-08 16:37:13
 * @FilePath: /vueEnterprise/src/App.vue
-->
<template>
    <div id="app">
        <nav>
            <div class="container">
                <ul class="nav__left">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/admin">Admin</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
