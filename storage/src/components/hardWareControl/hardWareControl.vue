<template>
  <div class="app">
    <xHead></xHead>
    <xNavigation v-bind:modular="modular"></xNavigation>
    <main>
      <div class="lay">
        <xPath v-bind:xpath="xpath"></xPath>
        <div class="searchBox">
          <div class="stateBox">
            <span>状态：</span>
            <span class="select">请选择</span>
            <span class="selChild"></span>
          </div>
        </div>
        <div class="box">
          <div class="leftBox">
            <div class="triangle"></div>
            <div class="com top">
              <span>道门控制</span>
              <div class="up">起</div>
              <div class="down">落</div>
            </div>
            <div class="com coms">
              <span>信号灯控制</span>
              <div class="up">红</div>
              <div class="down">绿</div>
            </div>
            <div class="com">
              <span>红外状态</span>
              <div class="inputBox"></div>
              <div class="inputBtn">读取</div>
            </div>
            <div class="com">
              <span>语音播报</span>
              <div class="inputBox"></div>
              <div class="inputBtn">读取</div>
            </div>
            <div class="com">
              <span>顶部LED</span>
              <div class="inputBox"></div>
              <div class="inputBtn">读取</div>
            </div>
          </div>
          <div class="rightBox">
            <div class="triangle"></div>
            <div class="com top">
              <span>道门控制</span>
              <div class="up">起</div>
              <div class="down">落</div>
            </div>
            <div class="com coms">
              <span>信号灯控制</span>
              <div class="up">红</div>
              <div class="down">绿</div>
            </div>
            <div class="com">
              <span>红外状态</span>
              <div class="inputBox"></div>
              <div class="inputBtn">读取</div>
            </div>
            <div class="com">
              <span>语音播报</span>
              <div class="inputBox"></div>
              <div class="inputBtn">读取</div>
            </div>
            <div class="com">
              <span>顶部LED</span>
              <div class="inputBox"></div>
              <div class="inputBtn">读取</div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <xFooter></xFooter>
  </div>
</template>

<script>
  import xFooter from '../common/xfooter.vue'
  import xHead from '../common/xheader.vue'
  import xNavigation from '../common/xnavigation.vue'
  import xPath from '../common/xpath.vue'
  export default {
    name: 'func',
    components: {
      xFooter,
      xNavigation,
      xHead,
      xPath
    },
    data() {
      return {
        modular: 4,
        xpath: "硬件控制",
      }
    },
    methods: {

    },
    computed: {},
    mounted() {}
  }

</script>

<style scoped lang='scss'>
  @import '../hardWareControl/hardWareControl.scss';

</style>
