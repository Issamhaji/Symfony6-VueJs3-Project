import { createRouter, createWebHistory } from "vue-router";

import Home from './components/HomePage.vue';
import List from "./components/ListPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/list', component: List},
    ],
});
export default router;