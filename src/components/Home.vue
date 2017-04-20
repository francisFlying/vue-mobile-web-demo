<template>
<div>
<mt-swipe :auto="2000">
  <mt-swipe-item v-for="item in list">
    <img alt="" :src="item.img">
  </mt-swipe-item>
</mt-swipe>
<div>
  <ul class="myul">
    <li @click="go('news')">
      <!-- 路径就按当前文件所在位置来写 -->
      <img src="../../statics/images/menu5.png" alt="">
      <p>新闻</p>
    </li>
    <li @click="go('pic')">
      <!-- 路径就按当前文件所在位置来写 -->
      <img src="../../statics/images/menu5.png" alt="">
      <p>图片分享</p>
    </li>
    <li>
      <!-- 路径就按当前文件所在位置来写 -->
      <img src="../../statics/images/menu5.png" alt="">
      <p>新闻</p>
    </li>
    <li>
      <!-- 路径就按当前文件所在位置来写 -->
      <img src="../../statics/images/menu5.png" alt="">
      <p>新闻</p>
    </li>
    <li>
      <!-- 路径就按当前文件所在位置来写 -->
      <img src="../../statics/images/menu5.png" alt="">
      <p>新闻</p>
    </li>
    <li>
      <!-- 路径就按当前文件所在位置来写 -->
      <img src="../../statics/images/menu5.png" alt="">
      <p>新闻</p>
    </li>
  </ul>
</div>
  <button @click="test">嘻嘻</button>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
          list: [{
            url: 'http://www.itcast.cn/subject/phoneweb/index.html',
            img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg'
          }, {
            url: 'http://www.itcast.cn/subject/phoneweb/index.html',
            img: 'http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg'
          }]
    }
  },
  methods:{
    go(arg){
      // 跳转
      this.$router.push({name:arg})
    },
    test(){
      // Toast('你好吗')
      Toast({
          message: '提示',
          position: 'bottom',
          duration: 1000
      });
    }
  }
}
</script>
<style>
.myul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.myul,.myul li{
  margin: 0;
  padding: 0;
}
.myul li{
  /*flex:1;*/
  width: 33.33%;
  list-style: none;
  text-align: center;
}
.myul li img{
  width: 50%;
}
.mint-swipe{
  height: 200px !important;
}
.mint-swipe-item img{
  width: 100% !important;
}
</style>