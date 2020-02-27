import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import PricesIndex from '@/components/PrizeIndexComponent'
import PriceDetail from '@/components/PrizeDescriptionComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PricesIndex',
      component: PricesIndex
    },
    {
      path: '/prize-detail/:prizeId',
      name: 'PriceDetail',
      component: PriceDetail,
      props: true
    }
  ]
})
