<template>
  <div>
    <el-header>{{title}}</el-header>
    <div id="chinaSdkChart"></div>
  </div>
</template>
<script>
import { geoCoordMap } from "@/utils/chinaMap";
import "echarts/map/js/china.js";
// import baiduJSON from '@/utils/baiduData'
export default {
  name: "chinaSdkChart",
  data() {
    return {
      title: "数据采集标题",
      mapData: {},
      series: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.mapData = geoCoordMap();
      this.chartInit();
    },
    chartInit() {
      let that = this;
      let myChart = this.$echarts.init(
        document.getElementById("chinaSdkChart")
      );

      var data = [
        { name: "海门", value: 9 },
        { name: "鄂尔多斯", value: 12 },
        { name: "招远", value: 12 },
        { name: "舟山", value: 12 },
        { name: "齐齐哈尔", value: 14 },
        { name: "盐城", value: 15 },
        { name: "赤峰", value: 16 },
        { name: "青岛", value: 18 },
        { name: "乳山", value: 18 },
        { name: "金昌", value: 19 },
        { name: "泉州", value: 21 },
        { name: "莱西", value: 21 },
        { name: "日照", value: 21 },
        { name: "胶南", value: 22 },
        { name: "南通", value: 23 },
        { name: "拉萨", value: 24 },
        { name: "云浮", value: 24 },
        { name: "梅州", value: 25 },
        { name: "文登", value: 25 },
        { name: "上海", value: 25 },
        { name: "攀枝花", value: 25 },
        { name: "威海", value: 25 },
        { name: "承德", value: 25 },
        { name: "厦门", value: 26 },
        { name: "汕尾", value: 26 },
        { name: "潮州", value: 26 },
        { name: "丹东", value: 27 },
        { name: "太仓", value: 27 },
        { name: "曲靖", value: 27 },
        { name: "烟台", value: 28 },
        { name: "福州", value: 29 },
        { name: "瓦房店", value: 30 },
        { name: "即墨", value: 30 },
        { name: "抚顺", value: 31 },
        { name: "玉溪", value: 31 },
        { name: "张家口", value: 31 },
        { name: "阳泉", value: 31 },
        { name: "莱州", value: 32 },
        { name: "湖州", value: 32 },
        { name: "汕头", value: 32 },
        { name: "昆山", value: 33 },
        { name: "宁波", value: 33 },
        { name: "湛江", value: 33 },
        { name: "揭阳", value: 34 },
        { name: "荣成", value: 34 },
        { name: "连云港", value: 35 },
        { name: "葫芦岛", value: 35 },
        { name: "常熟", value: 36 },
        { name: "东莞", value: 36 },
        { name: "河源", value: 36 },
        { name: "淮安", value: 36 },
        { name: "泰州", value: 36 },
        { name: "南宁", value: 37 },
        { name: "营口", value: 37 },
        { name: "惠州", value: 37 },
        { name: "江阴", value: 37 },
        { name: "蓬莱", value: 37 },
        { name: "韶关", value: 38 },
        { name: "嘉峪关", value: 38 },
        { name: "广州", value: 38 },
        { name: "延安", value: 38 },
        { name: "太原", value: 39 },
        { name: "清远", value: 39 },
        { name: "中山", value: 39 },
        { name: "昆明", value: 39 },
        { name: "寿光", value: 40 },
        { name: "盘锦", value: 40 },
        { name: "长治", value: 41 },
        { name: "深圳", value: 41 },
        { name: "珠海", value: 42 },
        { name: "宿迁", value: 43 },
        { name: "咸阳", value: 43 },
        { name: "铜川", value: 44 },
        { name: "平度", value: 44 },
        { name: "佛山", value: 44 },
        { name: "海口", value: 44 },
        { name: "江门", value: 45 },
        { name: "章丘", value: 45 },
        { name: "肇庆", value: 46 },
        { name: "大连", value: 47 },
        { name: "临汾", value: 47 },
        { name: "吴江", value: 47 },
        { name: "石嘴山", value: 49 },
        { name: "沈阳", value: 50 },
        { name: "苏州", value: 50 },
        { name: "茂名", value: 50 },
        { name: "嘉兴", value: 51 },
        { name: "长春", value: 51 },
        { name: "胶州", value: 52 },
        { name: "银川", value: 52 },
        { name: "张家港", value: 52 },
        { name: "三门峡", value: 53 },
        { name: "锦州", value: 54 },
        { name: "南昌", value: 54 },
        { name: "柳州", value: 54 },
        { name: "三亚", value: 54 },
        { name: "自贡", value: 56 },
        { name: "吉林", value: 56 },
        { name: "阳江", value: 57 },
        { name: "泸州", value: 57 },
        { name: "西宁", value: 57 },
        { name: "宜宾", value: 58 },
        { name: "呼和浩特", value: 58 },
        { name: "成都", value: 58 },
        { name: "大同", value: 58 },
        { name: "镇江", value: 59 },
        { name: "桂林", value: 59 },
        { name: "张家界", value: 59 },
        { name: "宜兴", value: 59 },
        { name: "北海", value: 60 },
        { name: "西安", value: 61 },
        { name: "金坛", value: 62 },
        { name: "东营", value: 62 },
        { name: "牡丹江", value: 63 },
        { name: "遵义", value: 63 },
        { name: "绍兴", value: 63 },
        { name: "扬州", value: 64 },
        { name: "常州", value: 64 },
        { name: "潍坊", value: 65 },
        { name: "重庆", value: 66 },
        { name: "台州", value: 67 },
        { name: "南京", value: 67 },
        { name: "滨州", value: 70 },
        { name: "贵阳", value: 71 },
        { name: "无锡", value: 71 },
        { name: "本溪", value: 71 },
        { name: "克拉玛依", value: 72 },
        { name: "渭南", value: 72 },
        { name: "马鞍山", value: 72 },
        { name: "宝鸡", value: 72 },
        { name: "焦作", value: 75 },
        { name: "句容", value: 75 },
        { name: "北京", value: 79 },
        { name: "徐州", value: 79 },
        { name: "衡水", value: 80 },
        { name: "包头", value: 80 },
        { name: "绵阳", value: 80 },
        { name: "乌鲁木齐", value: 84 },
        { name: "枣庄", value: 84 },
        { name: "杭州", value: 84 },
        { name: "淄博", value: 85 },
        { name: "鞍山", value: 86 },
        { name: "溧阳", value: 86 },
        { name: "库尔勒", value: 86 },
        { name: "安阳", value: 90 },
        { name: "开封", value: 90 },
        { name: "济南", value: 92 },
        { name: "德阳", value: 93 },
        { name: "温州", value: 95 },
        { name: "九江", value: 96 },
        { name: "邯郸", value: 98 },
        { name: "临安", value: 99 },
        { name: "兰州", value: 99 },
        { name: "沧州", value: 100 },
        { name: "临沂", value: 103 },
        { name: "南充", value: 104 },
        { name: "天津", value: 105 },
        { name: "富阳", value: 106 },
        { name: "泰安", value: 112 },
        { name: "诸暨", value: 112 },
        { name: "郑州", value: 113 },
        { name: "哈尔滨", value: 114 },
        { name: "聊城", value: 116 },
        { name: "芜湖", value: 117 },
        { name: "唐山", value: 119 },
        { name: "平顶山", value: 119 },
        { name: "邢台", value: 119 },
        { name: "德州", value: 120 },
        { name: "济宁", value: 120 },
        { name: "荆州", value: 127 },
        { name: "宜昌", value: 130 },
        { name: "义乌", value: 132 },
        { name: "丽水", value: 133 },
        { name: "洛阳", value: 134 },
        { name: "秦皇岛", value: 136 },
        { name: "株洲", value: 143 },
        { name: "石家庄", value: 147 },
        { name: "莱芜", value: 148 },
        { name: "常德", value: 152 },
        { name: "保定", value: 153 },
        { name: "湘潭", value: 154 },
        { name: "金华", value: 157 },
        { name: "岳阳", value: 169 },
        { name: "长沙", value: 175 },
        { name: "衢州", value: 177 },
        { name: "廊坊", value: 193 },
        { name: "菏泽", value: 194 },
        { name: "合肥", value: 229 },
        { name: "武汉", value: 273 },
        { name: "大庆", value: 279 },
        { name: "北京四中", value: 500 },
      ];
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = that.mapData[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            });
          }
        }
        return res;
      };
      myChart.setOption({
        tooltip: {
          trigger: "item"
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [
              {
                featureType: "land",
                elementType: "geometry",
                stylers: {
                  color: "#242f3eff"
                }
              },
              {
                featureType: "manmade",
                elementType: "geometry",
                stylers: {
                  color: "#242f3eff"
                }
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: {
                  color: "#17263cff"
                }
              },
              {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff"
                }
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff"
                }
              },
              {
                featureType: "districtlabel",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff"
                }
              },
              {
                featureType: "districtlabel",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff",
                  weight: 3
                }
              },
              {
                featureType: "poilabel",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff"
                }
              },
              {
                featureType: "poilabel",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff",
                  weight: 3
                }
              },
              {
                featureType: "subway",
                elementType: "geometry",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "railway",
                elementType: "geometry",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "poilabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "subwaylabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "subwaylabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "tertiarywaysign",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "tertiarywaysign",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "provincialwaysign",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "provincialwaysign",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "nationalwaysign",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "nationalwaysign",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "highwaysign",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "highwaysign",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "green",
                elementType: "geometry",
                stylers: {
                  color: "#263b3eff"
                }
              },
              {
                featureType: "nationalwaysign",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d0021bff"
                }
              },
              {
                featureType: "nationalwaysign",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#ffffffff"
                }
              },
              {
                featureType: "city",
                elementType: "labels",
                stylers: {
                  visibility: "on"
                }
              },
              {
                featureType: "city",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "city",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#1dbb74ff"
                }
              },
              {
                featureType: "city",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff"
                }
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff"
                }
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#242f3eff"
                }
              },
              {
                featureType: "local",
                elementType: "geometry.fill",
                stylers: {
                  color: "#38414eff"
                }
              },
              {
                featureType: "local",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#ffffff0"
                }
              },
              {
                featureType: "fourlevelway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#38414eff"
                }
              },
              {
                featureType: "fourlevelway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#ffffff00"
                }
              },
              {
                featureType: "tertiaryway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#38414eff"
                }
              },
              {
                featureType: "tertiaryway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#ffffff0"
                }
              },
              {
                featureType: "tertiaryway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff"
                }
              },
              {
                featureType: "fourlevelway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff"
                }
              },
              {
                featureType: "highway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff"
                }
              },
              {
                featureType: "provincialway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff"
                }
              },
              {
                featureType: "provincialway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff"
                }
              },
              {
                featureType: "tertiaryway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff"
                }
              },
              {
                featureType: "fourlevelway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff"
                }
              },
              {
                featureType: "highway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff"
                }
              },
              {
                featureType: "nationalway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff"
                }
              },
              {
                featureType: "nationalway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff"
                }
              },
              {
                featureType: "nationalway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff"
                }
              },
              {
                featureType: "nationalway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff"
                }
              },
              {
                featureType: "arterial",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff"
                }
              },
              {
                featureType: "arterial",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631fa"
                }
              },
              {
                featureType: "medicallabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "medicallabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "entertainmentlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "entertainmentlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "estatelabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "estatelabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "businesstowerlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "businesstowerlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "companylabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "companylabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "governmentlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "governmentlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "restaurantlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "restaurantlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "hotellabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "hotellabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "shoppinglabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "shoppinglabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "lifeservicelabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "lifeservicelabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "carservicelabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "carservicelabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "financelabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "financelabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "otherlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "otherlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "airportlabel",
                elementType: "labels",
                stylers: {
                  visibility: "on"
                }
              },
              {
                featureType: "airportlabel",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff"
                }
              },
              {
                featureType: "airportlabel",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff"
                }
              },
              {
                featureType: "airportlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6"
                }
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7"
                }
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8"
                }
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9"
                }
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10"
                }
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6"
                }
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7"
                }
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8"
                }
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9"
                }
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10"
                }
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6"
                }
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7"
                }
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8"
                }
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9"
                }
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10"
                }
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6"
                }
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7"
                }
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8"
                }
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9"
                }
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10"
                }
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6"
                }
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7"
                }
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8"
                }
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9"
                }
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10"
                }
              },
              {
                featureType: "provincialway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "8"
                }
              },
              {
                featureType: "provincialway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "9"
                }
              },
              {
                featureType: "provincialway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "8"
                }
              },
              {
                featureType: "provincialway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "9"
                }
              },
              {
                featureType: "provincialway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "8"
                }
              },
              {
                featureType: "provincialway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "9"
                }
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6"
                }
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7"
                }
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8"
                }
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9"
                }
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10"
                }
              },
              {
                featureType: "arterial",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "9"
                }
              },
              {
                featureType: "arterial",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "10"
                }
              },
              {
                featureType: "arterial",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "9"
                }
              },
              {
                featureType: "arterial",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "10"
                }
              },
              {
                featureType: "arterial",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "9"
                }
              },
              {
                featureType: "arterial",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "10"
                }
              },
              {
                featureType: "building",
                elementType: "geometry.fill",
                stylers: {
                  color: "#2a3341ff"
                }
              },
              {
                featureType: "building",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#1a212eff"
                }
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff"
                }
              },
              {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff"
                }
              },
              {
                featureType: "provincialway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff"
                }
              },
              {
                featureType: "arterial",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff"
                }
              },
              {
                featureType: "provincialway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff"
                }
              },
              {
                featureType: "cityhighway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff"
                }
              },
              {
                featureType: "arterial",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff"
                }
              },
              {
                featureType: "local",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "manmade",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff"
                }
              },
              {
                featureType: "manmade",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff"
                }
              },
              {
                featureType: "subwaystation",
                elementType: "geometry",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "transportationlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "transportationlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "estate",
                elementType: "geometry",
                stylers: {
                  color: "#2a3341ff"
                }
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "road",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              }
            ]
          }
        },
        series: [
          {
            name: "pm2.5",
            type: "scatter",
            coordinateSystem: "bmap",
            data: convertData(data),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#3888ff"
              }
            }
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "bmap",
            data: convertData(
              data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(0, 6)
            ),
            symbolSize: function(val) {
              return val[2] / 10;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#3888ff",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#chinaSdkChart {
  width: 100%;
  height: 450px;
  padding: 0 20px;
}
</style>
