<template>
  <div class="bigBox">
    <div class="top">
      <span class="time com">{{nowTime}}</span>
      <span class="week com">{{week}}</span>
      <div class="notice">
        <img src="../../assets/img/noticeIcon.png" alt="" class="noticeIcon">
        <span class="noticeWords">公告</span>
        <img src="../../assets/img/getintoIcon.png" alt="" class="getintoIcon">
        <p>智能出入库系统版本发布啦！初始教程进入……</p>
      </div>
      <div class="user">
        <img src="../../assets/img/userIcon.png" alt="" class="userIcon">
        <p>欢迎您，</p>
        <span>admin</span>
        <div class="cancelBox">
          <img src="../../assets/img/cancelIcon.png" alt="" class="cancelIcon">
          <p>注销</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'xheader',
    data() {
      return {
        nowTime: "",
        week: "",
      }
    },
    methods: {
      // 获取当前时间函数
      timeFormate(timeStamp) {
        let year = new Date(timeStamp).getFullYear();
        let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(
          timeStamp).getMonth() + 1;
        let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
        let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
        let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
        this.nowTime = year + "年" + month + "月" + date + "日";
      },
      // 定时器函数
      nowTimes() {
        this.timeFormate(new Date());
        setInterval(this.nowTimes, 30 * 1000);
      },
      //获取星期几的函数
      getweek() {
        this.week = "星期" + "日一二三四五六".charAt(new Date().getDay());
      },

    },
    computed: {},
    mounted() {
      this.nowTimes();
      this.getweek();
    }
  }

</script>

<style scoped lang='scss'>
  @import '../common/common.scss';

</style>
