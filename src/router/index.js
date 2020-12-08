/*
 * @Description: 编辑。
 * @Date: 2020-12-08 16:28:00
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-08 16:40:10
 * @FilePath: /vueEnterprise/src/router/index.js
 */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import home from "@/components/home";
import about from "@/pages/about";
import admin from "@/pages/admin";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: "/about",
            name: "about",
            component: about
        },
        {
            path: "/admin",
            name: "admin",
            component: admin
        }
    ]
});
