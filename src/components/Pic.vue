<template>
<div>
  <h1>
    我是图片分享!
  </h1>
  <button @click="go(21)">家居生活</button>
  <button @click="go(22)">明星美女</button>
  <button @click="go(23)">22期美女帅哥</button>
  <button @click="go(24)">我爱自己的祖国!</button>
  <div v-for="item in message">
    <img :src="imgDomain + item.img_url" alt="">
    <p>{{item.zhaiyao}}</p>
  </div>
</div>
</template>

<script>
import  axios from 'axios'
import config from '../config.js'
export  default{
  data(){
    return {
      imgDomain: config.imgDomain,
      message:[]
    }
  },
  methods:{
    go(id){
      this.$router.push({name:'pic',params:{youid:id}})
      this.getdata()
    },
    getdata(){
       const youid = this.$route.params.youid
    // $router
    // father
    // 发请求获取图片信息
    axios.get(config.apiDomain + '/api/getimages/'+youid)
    .then((res) => {
      console.log(res)
      this.message = res.data.message
     })
    }
  },

  // 如果这个组件一真在页面出现，没有消失过
  // 这个created就不会重新执行
  created(){
    alert(1)
    const youid = this.$route.params.youid
    // $router
    // father
    // 发请求获取图片信息
    axios.get(config.apiDomain + '/api/getimages/'+youid)
    .then((res) => {
      console.log(res)
      this.message = res.data.message
    })
  }
}
</script>

<style>
</style>