<template>
  <div>
    <div id="linesChart"></div>
  </div>
</template>
<script>
export default {
  name: 'linesChart',
  data() {
    return {
      title: '',
      xRows: [],
      allData: [],
      lineTitle: [],
      colorArr: ['#9eb520','#845678','#756898','#912234','#609090'],
      responseData: {
        code: 0,
        data: {
          title: '返回数据的标题',
          x: ['5.13','5.14','5.15','5.16','5.17'],
          list: [
            {
              name: '数据1',
              data: [100,200,300,400,500]
            },
            {
              name: '数据2',
              data: [800,550,740,350,600]
            },
            {
              name: '数据3',
              data: [180,550,310,660,530]
            }
          ]
        }
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.title = this.responseData.data.title
      this.xRows = this.responseData.data.x
      for(let i = 0; i < this.responseData.data.list.length; i ++){
        this.lineTitle.push(this.responseData.data.list[i].name)
        let singleData = {
          name: this.responseData.data.list[i].name,
          type:'line',
          data: this.responseData.data.list[i].data,
          lineStyle: {
            color: this.colorArr[i]
          }
        }
        this.allData.push(singleData)
      }
      this.linesInit()
    },
    linesInit(){
      let myChart = this.$echarts.init(document.getElementById('linesChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.title,
          textStyle: {
            color: '#00ce7d'
          },
          top: 20
        },
        // 鼠标划上提示工具
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.lineTitle,
          textStyle: {
            color: '#00ce7d'
          },
          right: 0,
          top: 25
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        // 工具盒（保存为图片）
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.xRows,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#00ce7d'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#00ce7d'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#00ce7d'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#00ce7d'
            }
          }
        },
        series: this.allData
      });
    }
  }
}
</script>
<style lang="scss" scoped>
#linesChart{
  width: 100%;
  height: 240px;
  padding: 0 20px;
}
</style>
