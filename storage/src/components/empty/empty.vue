<template>
  <div class="all">
 
 <!--<el-table center stripe border ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange"
          :row-class-name="tableRowClassName">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="cardNum" label="车牌号" show-overflow-tooltip>
            <template slot-scope="scope">{{ scope.row.cardNum }}</template>
          </el-table-column>
          <el-table-column prop="internalNum" label="内部卡号" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="printNum" label="印刷卡号" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="ICtype" label="IC卡类型" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="ICstate" label="IC卡状态" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="name" label="司机姓名" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="ID" label="身份证号" width="220">
          </el-table-column>
          <el-table-column prop="phone" label="手机号" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="time" label="发卡时间" show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <div class="msg">
          <span>显示第</span>
          <span class="sty"> {{pageStart}} </span>
          <span>到第</span>
          <span class="sty"> {{pageEnd}} </span>
          <span>条记录，总共</span>
          <span class="sty">{{total}}</span>
          <span>条记录每页显示</span>
          <span class="sellectBtn">选择</span>
          <span>条记录</span>
          <div class="paging">
            <div class="aa"><<</div>
            <div class="aa">上一页</div>
            <div class="aa">1</div>
            <div class="aa">2</div>
            <div class="aa">3</div>
            <div class="aa">4</div>
            <div class="aa">...</div>
            <div class="aa">下一页</div>
            <div class="aa">>></div>
          </div>
        </div>-->
    </table>
  </div>
</template>

<script>
  export default {
    name: 'empty',
    components: {

    },
    data() {
      return {}
    },
    methods: {
   //点击后颜色变绿
      // tableRowClassName({row, rowIndex}) {
      //   if (rowIndex === 1) {
      //     return 'warning-row';
      //   } else if (rowIndex === 3) {
      //     return 'success-row';
      //   }
      //   return '';
      // },
      // //选择与取消选择
      // toggleSelection(rows) {
      //   if (rows) {
      //     rows.forEach(row => {
      //       this.$refs.multipleTable.toggleRowSelection(row);
      //     });
      //   } else {
      //     this.$refs.multipleTable.clearSelection();
      //   }
      // },
      // handleSelectionChange(val) {
      //   this.multipleSelection = val;
      // }
    },
    computed: {},
    mounted() {}
  }

</script>

<style scoped lang='scss'>
  @import '../empty/empty.scss';

</style>
