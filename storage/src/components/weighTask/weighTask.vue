<template>
  <div class="app">
    <xHead></xHead>
    <xNavigation v-bind:modular="modular"></xNavigation>
    <main>
      <div class="lay">
        <xPath v-bind:xpath="xpath"></xPath>
        <div class="searchBox">
            <div class="block">
              <span class="demonstration">创建日期：</span>
              <el-date-picker v-model="value6" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
              </el-date-picker>
            </div>
            <div class="keywordBox">
              <span>关键词：</span>
              <span class="planNum">计划编号<img src="../../assets/img/xialabai.png" alt=""></span>
              <input class="keyContent"></input>
            </div>
            <div class="stateBox">
              <span>状态：</span>
              <span class="select">请选择<img src="../../assets/img/xialabai.png" alt=""></span>
            </div>
            <div class="searchBtn">查询</div>
        </div>
        <div class="operation ">
          <div><img src="../../assets/img/xinzeng.png" alt=""><span>新增</span></div>
          <div><img src="../../assets/img/kaishi.png" alt=""><span>开始</span></div>
          <div><img src="../../assets/img/zanting.png" alt=""><span>暂停</span></div>
          <div><img src="../../assets/img/wancheng.png" alt=""><span>完成</span></div>
          <div><img src="../../assets/img/shangyi.png" alt=""><span>上移</span></div>
          <div><img src="../../assets/img/xiayi.png" alt=""><span>下移</span></div>
          <div><img src="../../assets/img/xiugai1.png" alt=""><span>修改</span></div>
          <div><img src="../../assets/img/xiangqing.png" alt=""><span>详情</span></div>
          <div><img src="../../assets/img/shezhi.png" alt=""><span>设置</span></div>
          <div><img src="../../assets/img/zhiding.png" alt=""><span>置顶</span></div>
          <div><img src="../../assets/img/tongbu.png" alt=""><span>同步</span></div>
        </div>
        <xTable :tableData="tableData"></xTable>
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
  import xTable from '../common/xtable.vue'
  export default {
    components: {
      xFooter,
      xNavigation,
      xHead,
      xTable,
      xPath
    },
    data() {
      return {
        modular: 2,
        xpath: "称重任务",
        value6: '',
         tableData: [{
          number: '1',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        },{
          number: '2',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        },{
          number: '3',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        },{
          number: '4',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        },{
          number: '5',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        },{
          number: '6',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        },{
          number: '7',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        },{
          number: '8',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        },{
          number: '9',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        },{
          number: '10',
          planNumber: 'JBZ20180910',
          planName: '益海ASW麦子',
          goodsName: '标准白麦',
          documentNumber: 'SAO201712025558',
          typeName: '销售出库',
          planQuantity: '5550000',
          actualQuantity: '33516',
          residualQuantity: '21840',
          taskState: '进行中',
          updateTime:'2018-10-15 11:12:06',
        }]
      }
    },
    methods: {

    },
    computed: {},
    mounted() {}
  }

</script>

<style scoped lang='scss'>
  @import '../weighTask/weighTask.scss';

</style>
