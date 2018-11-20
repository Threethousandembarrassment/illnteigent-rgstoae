<template>
  <div class="app">
    <xHead></xHead>
    <xNavigation v-bind:modular="modular"></xNavigation>
    <main>
      <div class="lay">
        <xPath v-bind:xpath="xpath"></xPath>
        <div class="searchBox">
          <div class="block">
            <span class="demonstration">过磅日期：</span>
            <el-date-picker v-model="value6" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="keywordBox">
            <span>关键词：</span>
            <span class="planNum">业务单号</span>
            <div class="keyContent"></div>
          </div>
          <div class="searchBtn">查询</div>
        </div>
        <div class="operation ">
          <div>查看</div>
          <div>打印</div>
          <div>删除</div>
          <div>同步</div>
          <div>导出</div>
          <div>数据变更</div>
          <div>辅助数</div>
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
    name: 'func',
    components: {
      xFooter,
      xNavigation,
      xHead,
      xTable,
      xPath
    },
    data() {
      return {
        modular: 3,
        value6: '',
        xpath: "过磅记录",
          tableData: [{
          number: '1',
          planNumber: 'JBZ20180910',
          businessNumber: 'PUI20180950',
          licenseNumber: '粤BF7591',
          state: '进-称重中',
          enter: '49820',
          comeout: '',
          netWeight: '',
          enterTime: '08-28 14:02:01',
          comeoutTime: '',
          enterPound: '简仓1磅',
          comeoutPound:'',
        },{
          number: '1',
          planNumber: 'JBZ20180910',
          businessNumber: 'PUI20180950',
          licenseNumber: '粤BF7591',
          state: '进-结束',
          enter: '49820',
          comeout: '',
          netWeight: '',
          enterTime: '08-28 14:02:01',
          comeoutTime: '',
          enterPound: '简仓1磅',
          comeoutPound:'',
        },{
          number: '1',
          planNumber: 'JBZ20180910',
          businessNumber: 'PUI20180950',
          licenseNumber: '粤BF7591',
          state: '完成',
          enter: '49820',
          comeout: '',
          netWeight: '',
          enterTime: '08-28 14:02:01',
          comeoutTime: '',
          enterPound: '简仓1磅',
          comeoutPound:'',
        },{
          number: '1',
          planNumber: 'JBZ20180910',
          businessNumber: 'PUI20180950',
          licenseNumber: '粤BF7591',
          state: '完成',
          enter: '49820',
          comeout: '',
          netWeight: '',
          enterTime: '08-28 14:02:01',
          comeoutTime: '',
          enterPound: '简仓1磅',
          comeoutPound:'',
        },{
          number: '',
          planNumber: '',
          businessNumber: '',
          licenseNumber: '',
          state: '',
          enter: '',
          comeout: '',
          netWeight: '',
          enterTime: '',
          comeoutTime: '',
          enterPound: '',
          comeoutPound:'',
        },{
          number: '',
          planNumber: '',
          businessNumber: '',
          licenseNumber: '',
          state: '',
          enter: '',
          comeout: '',
          netWeight: '',
          enterTime: '',
          comeoutTime: '',
          enterPound: '',
          comeoutPound:'',
        },{
          number: '',
          planNumber: '',
          businessNumber: '',
          licenseNumber: '',
          state: '',
          enter: '',
          comeout: '',
          netWeight: '',
          enterTime: '',
          comeoutTime: '',
          enterPound: '',
          comeoutPound:'',
        },{
          number: '',
          planNumber: '',
          businessNumber: '',
          licenseNumber: '',
          state: '',
          enter: '',
          comeout: '',
          netWeight: '',
          enterTime: '',
          comeoutTime: '',
          enterPound: '',
          comeoutPound:'',
        },{
           number: '',
          planNumber: '',
          businessNumber: '',
          licenseNumber: '',
          state: '',
          enter: '',
          comeout: '',
          netWeight: '',
          enterTime: '',
          comeoutTime: '',
          enterPound: '',
          comeoutPound:'',
        },{
          number: '',
          planNumber: '',
          businessNumber: '',
          licenseNumber: '',
          state: '',
          enter: '',
          comeout: '',
          netWeight: '',
          enterTime: '',
          comeoutTime: '',
          enterPound: '',
          comeoutPound:'',
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
  @import '../poundRecord/poundRecord.scss';

</style>
