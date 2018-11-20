<template>
  <div class="all">
    <xHead></xHead>
    <xNavigation v-bind:modular="modular"></xNavigation>
    <main>
      <div class="layout">
        <xPath v-bind:xpath="xpath"></xPath>
        <div class="searchBox ">
          <span class="searchTitle ">印刷卡号:</span>
          <input class="Content "></input>
          <span class="searchTitle ">车牌号:</span>
          <input class="Content "></input>
          <span class="searchTitle ">司机姓名:</span>
          <input class="Content "></input>
          <div class="searchBtn ">查询</div>
        </div>
        <div class="operation ">
          <div><img src="../../assets/img/faka.png" alt=""><span>发卡</span></div>
          <div><img src="../../assets/img/xiugai.png" alt=""><span>修改</span></div>
          <div><img src="../../assets/img/zhuxiao.png" alt=""><span>注销</span></div>
          <div><img src="../../assets/img/guashi.png" alt=""><span>挂失</span></div>
          <div class="jiechu"><img src="../../assets/img/jiechu.png" alt=""><span>解除挂失</span></div>
          <div><img src="../../assets/img/chakan.png" alt=""><span>查看</span></div>
          <div><img src="../../assets/img/dayin.png" alt=""><span>打印</span></div>
        </div>
        <xTable :tableData="tableData" :checked.sync="checked"></xTable>
      </div>
    </main>
    <xFooter></xFooter>
  </div>
  </div>
</template>

<script>
  import xFooter from '../common/xfooter.vue'
  import xHead from '../common/xheader.vue'
  import xNavigation from '../common/xnavigation.vue'
  import xTable from '../common/xtable.vue'
  import xPath from '../common/xpath.vue'
  export default {
    name: 'ICcard',
    components: {
      xFooter,
      xNavigation,
      xHead,
      xTable,
      xPath
    },
    data() {
      return {
        modular: 1,
        checked: true,
        xpath: "IC卡管理",
        tableData: [{
          cardNum: '粤R46723',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          cardNum: '粤R46722',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          cardNum: '粤R46724',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          cardNum: '粤R46721',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          cardNum: '粤R46728',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          cardNum: '粤R46726',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          cardNum: '粤R46727',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          cardNum: '粤R46727',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          cardNum: '粤R46727',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          cardNum: '粤R46727',
          internalNum: '89878888',
          printNum: '777788888',
          ICtype: '短期卡',
          ICstate: '正常',
          name: '小东',
          time: '2018-10-15',
          phone: '15687589658',
          ID: '456988889555555',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    computed: {},
    mounted() {}
  }

</script>

<style scoped lang='scss'>
  @import '../ICcard/ICcard.scss';

</style>
