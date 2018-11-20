<template>
  <div class="app">
    <xHead></xHead>
    <xNavigation v-bind:modular="modular"></xNavigation>
    <main>
      <div class="lay">
        <xPath v-bind:xpath="xpath"></xPath>
        <div class="leftBox">
          <div class="upper"></div>
          <div class="lower"></div>
        </div>
        <div class="rightBox">
          <div class="line box1">
            <span>选择地磅：</span>
            <div class="chose">气膜仓地磅</div>
            <div class="chose">气膜仓二号房</div>
          </div>
          <div class="line box2">
            <span class="planNum">计划编号：</span>
            <div class="chose">澳洲大麦</div>
            <span>选择车辆：</span>
            <input class="chose" placeholder="请输入车票号"></input>
            <span>称重类型：</span>
            <div class="chose">入场</div>
          </div>
          <div class="box3">
            <span>院内道闸:</span>
            <div>道闸抬起</div>
            <div>道闸落下</div>
            <span class="option">院外道闸:</span>
            <div>道闸抬起</div>
            <div>道闸落下</div>
          </div>
          <div class="cut"></div>
          <div class="infoBox">
            <div>任务类型:<span>销售出库</span></div>
            <div>提货运单:<span>SAO2034234534</span></div>
            <div>任务类型:<span>销售出库</span></div>
            <div>来货船名:<span>宫本城 6</span></div>
            <div>客户名称:<span>新储农业有限公司</span></div>
          </div>
          <div class="readInfoBox">
            <div class="com">
              <span>货物名称</span>
              <div class="name">澳洲大麦</div>
            </div>
            <div class="com">
              <span>货单编号</span>
              <div class="info">
              </div>
              <div class="readBtn">读取</div>
            </div>
            <div class="com">
              <span>入场重量</span>
              <div class="info">
              </div>
              <div class="sendBtn">发送</div>
            </div>
            <div class="com">
              <span>出场重量</span>
              <div class="info">
              </div>
              <div class="sendBtn">发送</div>
            </div>
            <div class="com">
              <span>车辆净重</span>
              <div class="info infos"></div>
            </div>
          </div>
        <div class="cut"></div>
        <div class="com1 submit">提交</div>
        <div class="com1 reset">重置</div>
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
        modular: 5,
        xpath: "手动称重",
      }
    },
    methods: {

    },
    computed: {},
    mounted() {}
  }

</script>

<style scoped lang='scss'>
  @import '../manualWeigh/manualWeigh.scss';

</style>
