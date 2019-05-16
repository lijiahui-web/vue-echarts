<template>
  <div>
    <el-header>{{title}}</el-header>
    <div id="pieChart2"></div>
  </div>
</template>
<script>
export default {
  name: 'pieChart2',
  data() {
    return {
      title: '标题',
      echartData: [],
      rich: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.echartData = [{
        value: 2154,
        name: '曲阜师范大学'
      }, {
        value: 3854,
        name: '潍坊学院'
      }, {
        value: 3515,
        name: '青岛职业技术学院'
      }, {
        value: 3515,
        name: '淄博师范高等专科'
      }, {
        value: 3854,
        name: '鲁东大学'
      }, {
        value: 2154,
        name: '山东师范大学'
      }]
      this.rich = {
        yellow: {
          color: "#ffc72b",
          fontSize: 30,
          padding: [5, 4],
          align: 'center'
        },
        total: {
          color: "#ffc72b",
          fontSize: 40,
          align: 'center'
        },
        white: {
          color: "#fff",
          align: 'center',
          fontSize: 14,
          padding: [21, 0]
        },
        blue: {
          color: '#49dff0',
          fontSize: 16,
          align: 'center'
        },
        hr: {
          borderColor: '#0b5263',
          width: '100%',
          borderWidth: 1,
          height: 0,
        }
      }
      this.chartInit()
    },
    chartInit() {
      let that = this
      let myChart = this.$echarts.init(document.getElementById('pieChart2'))
      let options = {
        title: {
          text:'总考生数',
          left:'center',
          top:'53%',
          padding:[24,0],
          textStyle:{
            color:'#fff',
            fontSize: 18,
            align:'center'
          }
        },
        legend: {
          selectedMode:false,
          formatter: function() {
            var total = 0; //各科正确率总和
            that.echartData.forEach(function(value) {
              total += value.value;
            });
            return '{total|' + total + '}';
          },
          data: [this.echartData[0].name],
          // data: ['高等教育学'],
          // itemGap: 50,
          left: 'center',
          top: 'center',
          icon: 'none',
          align:'center',
          textStyle: {
            color: "#fff",
            fontSize: 16,
            rich: this.rich
          },
        },
        series: [{
          name: '总考生数量',
          type: 'pie',
          radius: ['42%', '50%'],
          hoverAnimation: false,
          color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
          label: {
            normal: {
              formatter: function(params) {
                var total = 0; //考生总数量
                var percent = 0; //考生占比
                that.echartData.forEach(function(value) {
                  total += value.value;
                });
                percent = ((params.value / total) * 100).toFixed(1);
                return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
              },
              rich: this.rich
            },
          },
          labelLine: {
            normal: {
              length: 55,
              length2: 0,
              lineStyle: {
                  color: '#0b5263'
              }
            }
          },
          data: this.echartData
        }]
      }
      myChart.setOption(options)
    }
  }
}
</script>
<style lang="scss" scoped>
#pieChart2{
  width: 100%;
  height: 340px;
}
</style>
