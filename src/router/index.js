/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '../views/memberSystem/SignIn.vue';
import Dashboard from '../views/dashboard.vue';
import myclass from '../views/dashboardPages/Userclass.vue';
import allclass from '../views/dashboardPages/Allclass.vue';
import course from '../views/coursePages/Course.vue';
import lesson from '../views/coursePages/Lesson.vue';
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
        path: 'course/:classId?',
        component: course,
      },
      {
        name: 'lesson',
        path: 'course/:classId?/lesson/',
        redirect: 'course/:classId?/lesson/exam',
        component: lesson,
        children: [
          {
            path: 'exam:sectionIndex?/:sectionId?',
            component: exam,
          }
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: "/stuMode/",
  routes,
});

export default router;
