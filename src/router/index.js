/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '../views/memberSystem/SignIn.vue';
import Dashboard from '../views/dashboard.vue';
import myclass from '../views/dashboardPages/Userclass.vue';
import allclass from '../views/dashboardPages/Allclass.vue';
import course from '../views/coursePages/Course.vue';
import lesson from '../views/coursePages/Lesson.vue';
import video from '../views/coursePages/Video.vue';
import exam from '../views/coursePages/Exam.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/allclass',
    component: Dashboard,
    children: [
      {
        path: 'myclass',
        component: myclass,
      },
      {
        path: 'allclass',
        component: allclass,
      },
      {
        path: 'course',
        component: course,
      },
      {
        name: 'lesson',
        path: 'lesson',
        redirect: '/dashboard/lesson/video',
        component: lesson,
        children: [
          {
            path: 'video',
            component: video,
          },
          {
            path: 'exam',
            component: exam,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
