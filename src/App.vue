<template>
<div style="">
<mt-header fixed title="固定在顶部"></mt-header>
<div class="content">
  <router-view></router-view>
</div>

<mt-tabbar v-model="isSelect">
  <mt-tab-item @click="go" id="home">
    <img slot="icon" src="../statics/images/menu3.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="vvip">
    <img slot="icon" src="../statics/images/menu4.png">
    会员
  </mt-tab-item>
  <mt-tab-item id="cart">
    <img slot="icon" src="../statics/images/menu5.png" >
    购物车
  </mt-tab-item>
  <mt-tab-item id="search">
    <img slot="icon" src="../statics/images/menu6.png" >
    搜索
  </mt-tab-item>
</mt-tabbar>

</div>
</template>

<script>
// const App = {
//   // teplate:'<div style="">1312</div>',
//   data(){
//     return {}
//   }
// }

// export default App
export default {
  data(){
    return {
      isSelect:''
    }
  },
  methods:{
    go:function () {

      // 改变url中锚点部分
      this.$router.push({name:'home'})
      // location.hash = '#/home'
    }
  },

  // 组件实例创建创建完成
  created(){
    window._tmp = this
  },
  
  // dom完成
  mounted(){

  },

  // 当data里属性值变化后就会调用
  // 只要data中的属性变了，updated就会被调用
  updated(){
    // console.log('12345')
    this.$router.push({name:this.isSelect})
  }
}
</script>

<style>
.mint-tabbar{
  position: fixed !important;
}
body{
  margin: 0;
  padding: 0;
}
.content{
  margin-top: 40px;
}
</style>