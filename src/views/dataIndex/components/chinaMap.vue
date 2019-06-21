<template>
  <div>
    <el-header>{{title}}</el-header>
    <div id="chinaMapChart"></div>
  </div>
</template>
<script>
import { geoCoordMap } from '@/utils/chinaMap'
import 'echarts/map/js/china.js'
export default {
  name: 'chinaMapChart',
  data() {
    return {
      title: '数据采集标题',
      mapData: {},
      series: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.mapData = geoCoordMap()
      let that = this
      let BJData = [
        [{name:'北京'}, {name:'上海',value:95}],
        [{name:'北京'}, {name:'广州',value:90}],
        [{name:'北京'}, {name:'大连',value:80}],
        [{name:'北京'}, {name:'南宁',value:70}],
        [{name:'北京'}, {name:'南昌',value:60}],
        [{name:'北京'}, {name:'拉萨',value:50}],
        [{name:'北京'}, {name:'长春',value:40}],
        [{name:'北京'}, {name:'包头',value:30}],
        [{name:'北京'}, {name:'重庆',value:20}],
        [{name:'北京'}, {name:'常州',value:10}]
      ];

      let SHData = [
        [{name:'上海'},{name:'包头',value:95}],
        [{name:'上海'},{name:'昆明',value:90}],
        [{name:'上海'},{name:'广州',value:80}],
        [{name:'上海'},{name:'郑州',value:70}],
        [{name:'上海'},{name:'长春',value:60}],
        [{name:'上海'},{name:'重庆',value:50}],
        [{name:'上海'},{name:'长沙',value:40}],
        [{name:'上海'},{name:'北京',value:30}],
        [{name:'上海'},{name:'丹东',value:20}],
        [{name:'上海'},{name:'大连',value:10}]
      ];

      let GZData = [
        [{name:'广州'},{name:'福州',value:95}],
        [{name:'广州'},{name:'太原',value:90}],
        [{name:'广州'},{name:'长春',value:80}],
        [{name:'广州'},{name:'重庆',value:70}],
        [{name:'广州'},{name:'西安',value:60}],
        [{name:'广州'},{name:'成都',value:50}],
        [{name:'广州'},{name:'常州',value:40}],
        [{name:'广州'},{name:'北京',value:30}],
        [{name:'广州'},{name:'北海',value:20}],
        [{name:'广州'},{name:'海口',value:10}]
      ];

      let LSData = [
        [{name:'拉萨'},{name:'保定',value:60}],
        [{name:'拉萨'},{name:'沧州',value:10}],
        [{name:'拉萨'},{name:'天津',value:30}],
        [{name:'拉萨'},{name:'咸阳',value:55}],
        [{name:'拉萨'},{name:'威海',value:22}],
        [{name:'拉萨'},{name:'德州',value:74}]
      ];

      let planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

      let convertData = function (data) {
        let res = [];
        for (let i = 0; i < data.length; i++) {
          let dataItem = data[i];
          let fromCoord = that.mapData[dataItem[0].name];
          let toCoord = that.mapData[dataItem[1].name];
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[1].value
            });
          }
        }
        return res;
      }
      let color = ['#a6c84c', '#ffa022', '#46bee9'];
      [['北京', BJData], ['上海', SHData], ['广州', GZData], ['拉萨', LSData]].forEach(function (item, i) {
        that.series.push({
          name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 1,
          effect: {
            show: true,
            period: 6,
            trailLength: 0.7,
            color: '#fff',
            symbolSize: 3
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 0,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 2,
          symbol: ['none', 'arrow'],
          symbolSize: 10,
          effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
          },
          lineStyle: {
            normal: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: convertData(item[1])
        },
        {
          name: item[0] + ' Top10',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            brushType: 'stroke'
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}'
            }
          },
          symbolSize: function (val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              color: color[i]
            }
          },
          data: item[1].map(function (dataItem) {
            return {
              name: dataItem[1].name,
              value: that.mapData[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        });
      })
      this.chartInit()
    },
    chartInit() {
      let myChart = this.$echarts.init(document.getElementById('chinaMapChart'))
      myChart.setOption({
        // backgroundColor: '#404a59',
        // title : {
        //   text: '模拟迁徙',
        //   subtext: '数据纯属虚构',
        //   left: 'center',
        //   textStyle : {
        //     color: '#fff'
        //   }
        // },
        tooltip : {
          trigger: 'item',
          formatter:function(params){
            if(params.seriesType=="effectScatter") {
              return "线路："+params.data.name+""+params.data.value[2];
            }else if(params.seriesType=="lines"){
              return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
            }else{
              return params.name;
            }
          }
        },
        legend: {
          orient: 'vertical',
          top: 'bottom',
          left: 'right',
          data:['北京 Top10', '上海 Top10', '广州 Top10'],
          textStyle: {
            color: '#fff'
          },
          selectedMode: 'multiple',
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: true,
              color:'#fff'
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#555555', //背景颜色
              borderColor: '#404a59'  //分割线颜色
            },
            emphasis: {
              areaColor: '#2a333d'  //高亮区域背景色
            }
          }
        },
        series: this.series
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#chinaMapChart{
  width: 100%;
  height: 400px;
  padding: 0 20px;
}
</style>
