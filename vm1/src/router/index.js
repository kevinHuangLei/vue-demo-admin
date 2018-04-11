import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import contentView from '@/components/contentView'
import homeItem from '@/components/homeItem'
import oneItem from '@/components/sliderChildren/oneDetail'
import twoItem from '@/components/sliderChildren/twoDetail'
import threeItem from '@/components/sliderChildren/threeDetail'


import bigBankReportDetail from '@/components/newsManagement/bigBankReportDetail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'contentView',
    //   component: contentView
    // },
    {
      path: '/',
      name: 'homeItem',
      component: homeItem
    },
    {
      path: '/one',
      name: 'oneItem',
      component: oneItem
    },
    {
      path: '/two',
      name: 'twoItem',
      component: twoItem
    },
    {
      path: '/three',
      name: 'threeItem',
      component: threeItem
    },
    {
      path: '/bigBankReportDetail',
      name: 'bigBankReportDetail',
      component: bigBankReportDetail
    }
  ]
})
