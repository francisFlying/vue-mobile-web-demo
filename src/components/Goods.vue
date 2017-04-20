<style scoped>
.myul,.myul li{
  margin: 0;
  padding: 0;
  list-style: none;
}
.myul{
  display: flex;
  flex-wrap: wrap;
}
.myul li{
  width:50%;
}

</style>
<template>
<div>
  <h1>商品列表</h1>
  <mt-loadmore :top-method="loadTop"  ref="loadmore">
  <ul 
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="true"
  infinite-scroll-distance="10"
  class="myul">
    <li @click="go(item.id)" v-for="item in message">
      <img :src="item.img_url" alt="">
      <p>{{item.title}}</p>
      <span>价格: {{item.sell_price}}</span>
    </li>
  </ul>
  </mt-loadmore>
</div>
</template>

<script>
import axios from 'axios'
import config from '../config.js'
export default{
  data(){

    return {
      pageindex:1,
      message:[]
    }
  },
  methods:{
  // 进入详情页!
  go(id){
    this.$router.push({name:'goodsdetail',params:{gid:id}})
  },

  // 这个方法是当我们上拉列表是执行
  loadMore(){
    // console.log(12345)
    this.getdata2()
  },
  // loadTop是我们松手时执行
  loadTop(){
    // 可以发请求获取数据!
    // 得到数据之后，要让转换的圈消失
    console.log(1234)
    this.getdata();

    // 如果ref属性写在组件的标签上，这个this.$refs得到的就对应组件的实例
    // this.$refs.loadmore.onTopLoaded();
  },
  getdata2(){
      this.pageindex++
      axios.get(config.apiDomain + '/api/getgoods?pageindex='+this.pageindex)
          .then((res) => {
              console.log(res)
              // this.message = res.data.message
              // 上拉加载,是要把获取到的数据与原数据合并,而不是替换!
              this.message = this.message.concat(res.data.message)
              // this.message = [{}]

              // this.$refs.loadmore.onTopLoaded();
        });
  }
},
  getdata(){
    // 下拉刷新是为了获取第1页的数据
    axios.get(config.apiDomain + '/api/getgoods?pageindex=1')
    .then((res) => {
        console.log(res)
        this.message = res.data.message
        this.$refs.loadmore.onTopLoaded();
    })
  },
  created(){
  axios.get(config.apiDomain + '/api/getgoods?pageindex=1')
  .then((res) => {
      console.log(res)
      this.message = res.data.message
  })
  }
}
</script>