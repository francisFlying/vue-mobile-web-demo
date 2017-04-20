<template>
<div>
  <h1>
    这是商品详情页
  </h1>
  <h4>{{detail.title}}</h4>
  <div v-html="detail.content"></div>
</div>
</template>

<script>
// 要获取详情信息
import axios from 'axios'
import config from '../config.js'

export default {
  data(){
    return {
      detail:{}
    }
  },
  methods:{

  },
  created(){
    const id = this.$route.params.gid 
    axios.get(config.apiDomain + '/api/goods/getdesc/'+id)
    .then((res) => {
        console.log(res)
        this.detail = res.data.message[0]
    })
  }
}

</script>

<style>
</style>