
<style>
.newul,.newul li{
margin: 0;
padding: 0;
}
.newul{
  padding-bottom: 40px;
}
.newul li{
  list-style: none;
  display: flex;
}
.left{
  width: 25%;
}
.left img{
  width:80%;
}
h4{
  margin-top: 0;
}
.right{
flex:1;
}
</style>
<template>
<div>
  <h1>我是新闻组件</h1>
  <ul class="newul">
    <li @click="go(item.id)" v-for="item in message">
      <div class="left">
        <img :src="item.img_url" alt="">
      </div>
      <div class="right">
        <h4>{{item.title}}</h4>
        <!-- <p>{{item.zhaiyao}}</p> -->
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
import config from '../config.js'
export default {
  data(){
    return {
      message:[], // summary
    }
  },
  methods:{
    go(id){
      // 保存在localstorage 里
      // localStorage.setItem('myid', id)
      this.$router.push({name:'detail',params:{myid:id}})
      // location.hash = '#/detail/2'
      // /detail/:myid   // /detail/2
    }
  },
  created(){
    // http://localhost:8000/
    var that = this
    axios.get(config.apiDomain + '/api/getnewslist')
    .then(function (res) {
      // console.log(res)
      that.message  = res.data.message
    })
  }
}
</script>
