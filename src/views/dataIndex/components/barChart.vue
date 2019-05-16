<template>
  <div>
    <el-header>{{title}}</el-header>
    <div id="barChart"></div>
  </div>
</template>
<script>
export default {
  name: 'barChart',
  data() {
    return {
      title: '柱状图标题'
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.chartInit()
    },
    chartInit() {
      let myChart = this.$echarts.init(document.getElementById('barChart'))
      myChart.setOption({
        legend: {
          textStyle: {
            color: '#00ce7d'
          }
        },
        tooltip: {},
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['试卷', 43.3, 85.8, 93.7],
            ['教案', 83.1, 73.4, 55.1],
            ['视频', 86.4, 65.2, 82.5],
            ['微课', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: {
          type: 'category',
          axisLine:{
            lineStyle:{
              color:'#42b6f6',
            }
          }
        },
        yAxis: {
          name: "（万）",
          nameTextStyle: {
              color: '#42b6f6',
              fontSize: 12
          },
          axisLine:{
            lineStyle:{
              color:'#42b6f6',
            }
          }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: 'bar',
            barWidth: 18,
            itemStyle:{
              normal:{
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00b0ff'
                }, {
                  offset: 1,
                  color: '#7052f4'
                }], false)
              }
            },
          },
          {
            type: 'bar',
            barWidth: 18,
            itemStyle:{
              normal:{
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#c487ee'
                }, {
                  offset: 1,
                  color: '#6f81da'
                }], false)
              }
            },
          },
          {
            type: 'bar',
            barWidth: 18,
            itemStyle:{
              normal:{
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#7aee8e'
                }, {
                  offset: 1,
                  color: '#43ce5b'
                }], false)
              }
            },
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#barChart{
  width: 100%;
  height: 250px;
}
</style>
