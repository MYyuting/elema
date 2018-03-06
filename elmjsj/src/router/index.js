import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index1 from '@/components/shouye/index1'
import Ss from '@/components/shouye/ss'
import Index2 from '@/components/faxian/index2'
import Eat from '@/components/faxian/eat'
import Index3 from '@/components/dingdan/index3'
import Ddxq from '@/components/dingdan/ddxq'
import Index4 from '@/components/wode/index4'
import Denglv from '@/components/wode/denglv'
import Dizhi from '@/components/wode/dizhi'
import Jinbi from '@/components/wode/jinBi'
import Fenx from '@/components/wode/fenxiang'

import Nav1 from '@/components/shouye/nav1'
import Xiang from '@/components/public/xiangqing'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/index1',
          name: 'Index1',
          component: Index1
        },
        {
          path: '/index2',
          name: 'Index2',
          component: Index2
        },
        {
          path: '/index3',
          name: 'Index3',
          component: Index3
        },
        {
          path: '/index4',
          name: 'Index4',
          component: Index4
        },
        {
          path:"/",
          redirect:"/index1"
        }
      ]
    },
    {
      path:"/nav1",
      component:Nav1
    },
    {
      path:"/xiang/:id",
      component:Xiang
    },
    {
      path:"/addres",
      component:Dizhi
    },
    {
      path:"/jinbi",
      component:Jinbi
    },
    {
      path:"/fenx",
      component:Fenx
    },
    {
      path:"/denglv",
      component:Denglv
    },
    {
      path:"/ddxq",
      component:Ddxq
    },
    {
      path:"/eat",
      component:Eat
    },
    {
      path:"/ss",
      component:Ss
    }
  ]
})
