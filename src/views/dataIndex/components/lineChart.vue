<template>
  <div>
    <el-header>{{title}}</el-header>
    <div id="lineChart"></div>
  </div>
</template>
<script>
export default {
  name: 'lineChart',
  data() {
    return {
      title: '折线图'
    }
  },
  mounted(){
    this.drawLineChart()
  },
  methods: {
    drawLineChart(){
      let myChart = this.$echarts.init(document.getElementById('lineChart'))
      // 绘制图表
      myChart.setOption({
        label:{
          normal:{
            show: true,
            textStyle:{color:'#d27d39',fontSize:"18"},
            position: 'top'
          },
        },
        tooltip: {
          tirgger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: 30,
          right: 30,
          top: 20,
          bottom: 40
        },
        xAxis: {
          type: 'category',
          data: ['5.13', '5.14', '5.15', '5.16', '5.17', '5.18', '5.19'],
          axisLine:{
            lineStyle:{
              color:'#42b6f6',
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLine:{
            lineStyle:{
              color:'#42b6f6',
            }
          },
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          symbolSize:5, //折线点的大小
          areaStyle: {normal: {}},
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0, color: '#3794b1'
              },{
                offset: 1, color: '#86b0bd'
              }]),
              lineStyle: {
                width: 2,
                type: 'solid',
                color: '#777'
              }
            },
            emphasis: {  
              color: '#4fd6d2',  
              lineStyle: {        // 系列级个性化折线样式  
                width:2,  
                type: 'dotted',  
                color: "#4fd6d2" //折线的颜色
              }
            }
          }
        }]
      });
    }
  }
}
</script>
<style lang="scss" scoped>
#lineChart{
  width: 100%;
  height: 200px;
  padding: 0 20px;
}
</style>

