<template>
  <div>
    <div id="circleLineChart"></div>
  </div>
</template>
<script>
export default {
  name: 'circleLineChart',
  data() {
    return {

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
      let myChart = this.$echarts.init(document.getElementById('circleLineChart'))
      let options = {
        title: {
          text: '访问量',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
          },
          left: 20,
          top: 20
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['北京', '上海', '广州'],
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          },
          right: 20,
          top: 30
        },
        grid: {
          left: 50,
          right: 20,
          bottom: 50,
          top: 80,
          // containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
        // }, {
        //   axisPointer: {
        //     show: false
        //   },
        //   axisLine: {
        //     lineStyle: {
        //       color: '#57617B'
        //     }
        //   },
        //   axisTick: {
        //     show: false
        //   },
        //   position: 'bottom',
        //   offset: 20,
        //   data: ['', '', '', '', '', '', '', '', '', '', {
        //     value: '周六',
        //     textStyle: {
        //       align: 'left'
        //     }
        //   }, '周日']
        }],
        yAxis: [{
          type: 'value',
          name: '单位（%）',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '北京',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12
            }
          },
          data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
        }, {
          name: '上海',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 136, 212, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(0, 136, 212, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)',
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12
            }
          },
          data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
        }, {
          name: '广州',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
                width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(219, 50, 51, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(219, 50, 51, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(219,50,51)',
              borderColor: 'rgba(219,50,51,0.2)',
              borderWidth: 12
            }
          },
          data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
        }, ]
      }
      myChart.setOption(options)
    }
  }
}
</script>
<style lang="scss" scoped>
#circleLineChart{
  width: 100%;
  height: 400px;
}
</style>
