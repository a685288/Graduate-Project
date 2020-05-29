/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/memberSystem/SignIn.vue";
import Dashboard from "../views/Dashboard.vue";
import myclass from "../views/dashboardPages/Userclass.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: 'myclass',
        component: myclass
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
