<template>
  <div>
    <table>
      <tr>
        <td>全选</td>
        <th v-for="(val, key) in dataList[1]">{{key}}</th>
      </tr>
      <tr v-for="obj in dataList">
        <td>
          <div  class="check" :class="{checked:checked==true}">
          </div>
        </td>
        <td v-for="(val, key) in obj">{{val}}</td>
      </tr>
    </table>
    <div class="pageBox">
      <div class="leftBox">
        <span>显示第</span>
        <span>1</span>
        <span>到第</span>
        <span>10</span>
        <span>条记录，总共</span>
        <span>46</span>
        <span>条记录，每页显示</span>
        <div class="selPageNum"><span>10</span><img src="../../assets/img/up.png" alt=""></div>
        <span>条记录</span>
      </div>
      <div class="rightBox">
        <div class="com front">
          <<</div>
            <div class="com previous">上一页</div>
            <div class="com" v-for="count in 4">{{count}}</div>
            <div class="com next">下一页</div>
            <div class="com behind">>></div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['tableData','checked'],
    data() {
      return {
        dataList: '',
        ischecked: false
      }
    },
    methods: {

    },
    computed: {},
    mounted() {
      this.dataList = this.tableData;
      this.ischecked = this.checked;
    }
  }

</script>

<style scoped lang='scss'>
  @import '../common/xtable.scss';

</style>
