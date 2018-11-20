<template>
  <div class="all">
    <div class="layout">
      <xHead></xHead>
      <xNavigation v-bind:modular="modular"></xNavigation>
      <main>
        <div class="box">
          <div class="title">
            <div class="dot"></div>
            <span>日作业总量曲线</span>
          </div>
          <div class="workload clearfix" ref="workload"></div>
        </div>
        <div class="box division">
          <div class="title">
            <div class="dot"></div>
            <span>最新作业</span>
          </div>
          <div class="lately">
            <div class="latelyWork" v-for="count in 4">
              <div class="state" :class="{ state1: state==1 }">{{state1}}</div>
              <span>[SC0234820393]菜籽粕</span>
            </div>
            <div class="latelyWork" v-for="count in 5">
              <div class="state" :class="{ state2: statea=2 }">{{state2}}</div>
              <span>[SC0234820393]菜籽粕</span>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="title">
            <div class="dot"></div>
            <span>业务大类占比</span>
            <span class="titleTips">(今年的数据信息)</span>
          </div>
          <div class="businessClass clearfix" ref="businessClass"></div>
        </div>
        <div class="box division">
          <div class="title">
            <div class="dot"></div>
            <span>业务明细占比</span>
            <span class="titleTips">(今年的数据信息)</span>
          </div>
          <div class="ratioDetails " ref="ratioDetails"></div>
        </div>
        <div class="box division">
          <div class="title">
            <div class="dot"></div>
            <span>最新过磅记录</span>
          </div>
          <div class="latestPound">
            <div class="loop" v-for="count in 7">
              <div class="latelyPoundInfo">
                <div class="dot1"></div>
                <span>[14:05:59][出场][粤R13412]37456KG</span>
              </div>
              <div class="cut"></div>
            </div>
          </div>
        </div>
      </main>
      <div class="clearfix"></div>
      <footer>Copyright @深圳市中软易通科技有限公司.All Right Reserved.</footer>
    </div>
  </div>
</template>

<script>
  import xHead from '../common/xheader.vue'
  import xNavigation from '../common/xnavigation.vue'
  export default {
    name: 'home',
    components: {
      xNavigation,
      xHead
    },
    data() {
      return {
        modular: 0,
        state1: "进行中",
        state2: "完成",
        state: 1,
        statea: 2
      }
    },
    methods: {
      drawLine() {
        // 绘制日作业总量曲线
        let workload = this.$echarts.init(this.$refs.workload)
        workload.setOption({
          xAxis: {
            // align:'center'  ,
            type: 'category',
            boundaryGap: false,
            data: ["07-28", "07-30", "08-01", "08-03", "08-05", "08-07", "08-09", "08-11", "08-13", "08-15",
              "08-17", "08-19", "08-21", "08-23", "08-25", "08-27"
            ]
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} T'
            }
          },
          grid: {
            x: 60,
            x2: 40,
            y: 45,
            height: 200
          },
          series: [{
            data: [820, 1932, 2901, 1934, 1290, 2430, 2320, 3320, 5320, 6320, 4320, 5320, 3233, 2231, 1134,
              2677
            ],
            type: 'line',
          }]
        });
        // 绘制业务大类占比
        let businessClass = this.$echarts.init(this.$refs.businessClass)

        businessClass.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            top: '75%',
            orient: 'horizontal',
            left: 'center',
            data: ['直接', '邮件', '联盟', '视频', '搜索', '二维'],
            width: 210,
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '40%'],
            data: [{
                value: 335.56,
                name: '直接'
              },
              {
                value: 310.56,
                name: '邮件'
              },
              {
                value: 234.26,
                name: '联盟'
              },
              {
                value: 135.62,
                name: '视频'
              },
              {
                value: 1548.16,
                name: '搜索'
              }, {
                value: 1098.09,
                name: '二维'
              }
            ],
            //标签
            label: {
              normal: {
                show: true,
                // position: 'inside',
                formatter: '{b} \n {c}T', //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                // textStyle: {
                //   align: 'center',
                //   baseline: 'middle',
                //   fontFamily: '微软雅黑',
                //   fontSize: 15,
                //   fontWeight: 'bolder'
                // }
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        });
        // 绘制业务明细占比
        let ratioDetails = this.$echarts.init(this.$refs.ratioDetails)

        ratioDetails.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            top: '75%',
            width: 300,
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '二维扫码', '撼天动地', '鲜衣怒马', '天赋异禀'],
          },
          series: [{
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '40%'],
            data: [{
                value: 335.65,
                name: '直接访问'
              },
              {
                value: 310.22,
                name: '邮件营销'
              },
              {
                value: 234.11,
                name: '联盟广告'
              },
              {
                value: 135.76,
                name: '视频广告'
              },
              {
                value: 1548.04,
                name: '搜索引擎'
              },
              {
                value: 198.45,
                name: '二维扫码'
              },
              {
                value: 1098.76,
                name: '撼天动地'
              },
              {
                value: 500.88,
                name: '鲜衣怒马'
              },
              {
                value: 108.34,
                name: '天赋异禀'
              }
            ],
            //标签
            label: {
              normal: {
                show: true,
                // position: 'inside',
                formatter: '{b} \n {c}T', //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比

                // textStyle: {
                //   align: 'center',
                //   baseline: 'middle',
                //   fontFamily: '微软雅黑',
                //   fontSize: 15,
                //   fontWeight: 'bolder'
                // }
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]
        });
      }
    },
    computed: {},
    mounted() {

      this.drawLine();
    }
  }

</script>

<style scoped lang='scss'>
  @import '../home/home.scss';

</style>
