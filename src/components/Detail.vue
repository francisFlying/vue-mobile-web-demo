<template>
<div>
  <h1>新闻详情!</h1>
  <h4>{{detail.title}}</h4>
  <span>发布时间:{{detail.add_time}}</span>
  <div v-html="detail.content"></div>
</div>
</template>

<script>
import axios from 'axios'
import config from '../config.js'
export default {
  data(){
      return {
        detail:{}
      }
  },
 created(){
  // 发请求获取详情
  // const id = localStorage.getItem('myid')
  const id = this.$route.params.myid
  axios.get(config.apiDomain + '/api/getnew/'+ id)
  .then( (res) => {
    console.log(res)
    this.detail = res.data.message[0]
  })
 }
}
</script>

<style>
</style>