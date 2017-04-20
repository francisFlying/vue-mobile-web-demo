import Vue from 'vue'  // 找到vue.js 合并
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Cart from './components/Cart.vue'
import Search from './components/Search.vue'
import VVIP from './components/VVIP.vue'
import News from './components/news.vue'
import Detail from './components/Detail.vue'
import Pic from './components/Pic.vue'
import Goods from './components/Goods.vue'
import GoodsDetail from './components/GoodsDetail.vue'

// 引入UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
   {name:'app',path:'/', redirect:'/home'},
   {name:'home', path:'/home', component:Home},
   {name:'search', path:'/search', component:Search},
   {name:'cart', path:'/cart', component:Cart},
   {name:'vvip', path:'/vvip', component:VVIP},
   {name:'news', path:'/news', component:News},
   {name:'detail', path:'/detail/:myid', component:Detail},
   {name:'pic',path:'/pic/:youid',component:Pic},
   {name:'goods',path:'/goods',component:Goods},
   {name: 'goodsdetail',path:'/goodsdetail/:gid',component:GoodsDetail}
  ]
})

// new 
new Vue({
  el: '#box',
  router,
  render:h=>h(App)
})