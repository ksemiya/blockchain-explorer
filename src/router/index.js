import Vue from 'vue'
import Router from 'vue-router'
import BlockchainPage from '../pages/Blockchain.vue'
import BlockPage from '../pages/Block.vue'
import TransactionPage from '../pages/Transaction.vue'
import CheckPage from '../pages/Check.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blockchain',
      component: BlockchainPage
    },
    {
      path: '/block/:height',
      name: 'block',
      component: BlockPage,
      props: true
    },
    {
      path: '/transaction/:hash',
      name: 'transaction',
      component: TransactionPage,
      props: true
    },
    {
      path: '/check/',
      name: 'check',
      component: CheckPage,
      props: true
    }
  ]
})
