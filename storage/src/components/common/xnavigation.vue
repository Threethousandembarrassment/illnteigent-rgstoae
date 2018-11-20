<template>
  <div class="bigBox">
    <div class="navigation">
      <div class="upline">
        <img src="../../assets/img/logo.png" alt="中软易通|智能出入库系统" class="logo">
        <router-link to='/' class="switchBox">
          <img src="../../assets/img/icon1.gif" alt="">
          <p :class="{ modular: modular==0 }">首页</p>
        </router-link>
        <router-link to='/ICcard' class="switchBox">
          <img src="../../assets/img/icon2.gif" alt="">
          <p :class="{ modular: modular==1 }">IC卡管理</p>
        </router-link>
        <router-link to='/weighTask' class="switchBox">
          <img src="../../assets/img/icon3.gif" alt="">
          <p :class="{ modular: modular==2 }">称重任务</p>
        </router-link>
        <router-link to='/poundRecord'class="switchBox">
          <img src="../../assets/img/icon4.gif" alt="">
          <p :class="{ modular: modular==3 }">过磅记录</p>
        </router-link>
        <router-link to='/hardWareControl' class="switchBox">
          <img src="../../assets/img/icon5.gif" alt="">
          <p :class="{ modular: modular==4 }">硬件控制</p>
        </router-link>
        <router-link to='/manualWeigh' class="switchBox">
          <img src="../../assets/img/icon6.gif" alt="">
          <p :class="{ modular: modular==5 }">手动称重</p>
        </router-link>
        <router-link to='/componentDetection' class="switchBox">
          <img src="../../assets/img/icon7.gif" alt="">
          <p :class="{ modular: modular==6 }">组件检测</p>
        </router-link>
        <router-link to='/functionManagement' class="switchBox">
          <img src="../../assets/img/icon8.gif" alt="">
          <p :class="{ modular: modular==7 }">功能管理</p>
        </router-link>
        <router-link to='/authorityManagement' class="switchBox">
          <img src="../../assets/img/icon9.gif" alt="">
          <p :class="{ modular: modular==8 }">权限管理</p>
        </router-link>
      </div>
      <div class="downline">
        <img src="../../assets/img/l_d.png" alt="" class="dleft">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['modular'],
    name: 'xnavigation',
    data() {
      return {
        
      }
    },
    methods: {


    },
    computed: {},
    mounted() {}
  }

</script>

<style scoped lang='scss'>
  @import '../common/common.scss';

</style>
