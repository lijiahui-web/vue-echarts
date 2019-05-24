<template>
  <div>
    <div id="barChart2"></div>
  </div>
</template>
<script>
export default {
  name: 'barChart2',
  data() {
    return {
      itemStyle: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.itemStyle = {
        normal: {},
        emphasis: {
          barBorderWidth: 1,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0,0,0,0.5)'
        }
      }
      this.chartInit()
    },
    chartInit() {
      let myChart = this.$echarts.init(document.getElementById('barChart2'))
      let options = {
        color: ['#6784E3', '#3BB8FF'],
        title: {
          text: '活跃学校TOP榜',
          textStyle: {
              color: '#fff',
              fontSize: 20,
              fontWeight: 'normal',
          },
          left: 24,
          top: 16,
        },
        grid: {
          top: 104,
          left: 76,
          bottom: 97,
          right: 55
        },
        legend: {
          data: ['18岁以内', '19-25岁'],
          bottom: 26,
          textStyle: {
            color: '#555',
            fontSize: 14
          },
          itemGap: 34,
          itemWidth: 10,
          itemHeight: 10
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: '#fff',
          padding: [0, 0, 0, 0],
          textStyle: {
            color: '#333'
          },
          axisPointer: {
            type: 'line',
            animation: true,
            lineStyle: {
              color: 'transparent'
            }
          },
          extraCssText: 'box-shadow: 0px 0px 10px -4px rgba(3, 3, 3, .4)',
          formatter: (params) => {
            let htmls = ''
            let xaxisName = ''
            if (params.length > 0) {
              xaxisName = params[0].axisValue;
              htmls += '<div style="font-size:16px;height:32px;color:#0069FF;border-radius:4px;line-height:36px;padding-left:15px;text-align: left;">' + xaxisName + '</div><div>';
              for (let j = 0; j < params.length; j++) {
                htmls += '<p style="font-size:14px;padding:4px 23px 6px 15px;color:#333;text-align: left;">' + params[j].seriesName + ' : ' + params[j].data + '</p>';
              }
              htmls += '</div>';
              return htmls;
            }
          }
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   },
        //   top: 16,
        //   right: 39
        // },
        xAxis: {
          name: '人次',
          type: 'value',
          nameRotate: 1,
          splitLine: {
            lineStyle: {
              color: '#666'
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#888'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 13,
            color: '#666'
          }
        },
        yAxis: [{
          type: 'category',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 13,
            color: '#666'
          },
          data: ['学校1', '学校2', '学校3', '学校4', '学校5']
        },{
          show: true,
          inverse: true,
          data: ['16','4','14','9','15'],
          axisLabel: {
            textStyle: {
              fontSize:12,
              color: '#666',
            },
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
        }],
        series: [{
          name: '18岁以内',
          type: 'bar',
          stack: 'a',
          barWidth: '30%',
          data: ['8', '7', '5', '3', '4']
        }, {
          name: '19-25岁',
          type: 'bar',
          stack: 'a',
          barWidth: '30%',
          data: ['7', '2', '9', '1', '12'],
          markPoint: {
            symbol: 'path://M0 0 h 300 v -20 l 80 40 l -80 40 v -20 h -300 z',
            data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
            ],
            // formatter: function(params){
            //   console.log(params.data.symbol.replace('image://', ''))
            //   // return '<img src="' + params.data.symbol.replace('image://', '')+ '"/>';
            //   return '123';
            // },
            symbolSize:[30,15],
            // data: [
            //     {coord: [0,10],symbolOffset:[20,-20],symbol:'image://../../assets/image/demo1.png'},
            //     {coord: [1,10],symbolOffset:[20,-20],symbol:'image://../../assets/image/demo2.png'},
            //     {coord: [2,20],symbolOffset:[20,-20],symbol:'image://../../assets/image/demo1.png'},
            //     {coord: [3,20],symbolOffset:[20,-20],symbol:'image://../../assets/image/demo2.png'},
            //     {coord: [4,20],symbolOffset:[20,-20],symbol:'image://../../assets/image/demo1.png'},
            //     {coord: [5,20],symbolOffset:[20,-20],symbol:'image://../../assets/image/demo2.png'},
            //     {coord: [6,20],symbolOffset:[20,-20],symbol:'image://../../assets/image/demo1.png'},
            // ],
            label:{
              show:true,
              position:'right'
            }
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              // distance: 10,
              formatter: function(param) {
                return param.value
              },
              textStyle: {
                color: '#000000',
                fontSize: '16'
              }
            }
          }
        }]
      }
      myChart.setOption(options)
    }
  }
}
</script>
<style lang="scss" scoped>
#barChart2{
  width: 100%;
  height: 440px;
}
</style>
