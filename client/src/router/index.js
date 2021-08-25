import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import AddPost from '../views/AddPost.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add-post",
    name: "add-post",
    component: AddPost,
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router