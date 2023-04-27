import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import DetailProjectPage from "../pages/DetailProjectPage.vue";
import ContactPage from "../pages/ContactPage.vue";

const router = createRouter({
    history: createWebHistory(), // freccette avanti/indietro nel browser
    linkActiveClass: "active",
    linkExactActiveClass: "",
    routes: [ // rotte vue - array di oggetti
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/projects/:id",
            name: "project-detail",
            component: DetailProjectPage,
        },
        {
            path: "/contacts",
            name: "contacts",
            component: ContactPage,
        }
    ]
});

export {router};