<template>
  <div class="all">
    <div class="bg">
      <div class="centerBg">
        <img src="../../assets/img/logo2.png" class="logo2">
        <div class="group">
          <div>
            <span>用户名：</span>
            <input type="text">
          </div>
          <div>
            <span>密&nbsp;&nbsp;&nbsp;码：</span>
            <input type="password">
          </div>
        </div>
        <div class="loginBg">
          <div class="loginBtn">登 录</div>
        </div>
      </div>
      <p class="statement">Copyright @深圳市中软易通科技有限公司.All Right Reserved.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {

    },
    data() {
      return {}
    },
    methods: {

    },
    computed: {},
    mounted() {}
  }

</script>

<style scoped lang='scss'>
  @import '../login/login.scss';

</style>
