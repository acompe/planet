import Vue from 'vue';
import VueRouter from "vue-router";

import planet from "../components/planet";

import my from '../components/planet/my'
import gold from "../components/planet/gold";
import walk from "../components/planet/walk";

Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/planet/walk'
    },
    {
      path: '/planet',
      name: 'planet',
      component: planet,
      redirect:'/planet/walk',
      children:[
        {
          path:'/planet/my',
          component: my
        },
        {
          path: '/planet/gold',
          component: gold
        },
        {
          path: '/planet/walk',
          component: walk
        }
      ]
    }
  ]
})
