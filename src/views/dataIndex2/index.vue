<template>
  <div class="data-show-container clearfix">
    <div class="left-container">
      <!-- 雷达图 -->
      <radialChart class="chartComponent radialChart"/>
      <bar3DChart class="chartComponent bar3DChart"/>
    </div>
    <div class="middle-container">
      <!-- 横向柱状图 -->
      <!-- <categoryChart class="chartComponent categoryChart"/> -->
      <chinaSdkChart class="chartComponent chinaSdkMap"/>
      <beautyPieChart class="chartComponent beautyPieChart"/>
    </div>
    <div class="right-container">
      <circleLineChart class="chartComponent circleLineChart"/>
      <scrollTable class="chartComponent scrollTable"/>
    </div>
  </div>
</template>
<script>
// import CategoryChart from './components/categoryChart'
import RadialChart from './components/radialChart'
import CircleLineChart from './components/circleLineChart'
import ScrollTable from './components/scrollTable'
import BeautyPieChart from './components/beautyPieChart'
import Bar3DChart from './components/bar3DChart'
import ChinaSdkChart from './components/chinaSdkMap'
export default {
  name: 'dataIndex2',
  components: {
    // CategoryChart,
    RadialChart,
    CircleLineChart,
    ScrollTable,
    BeautyPieChart,
    Bar3DChart,
    ChinaSdkChart
  }
}
</script>
<style lang="scss" scoped>
.data-show-container{
  .chartComponent{
    margin: 20px;
    background: #1d344d;
    .el-header{
      text-align: left;
    }
  }
  .left-container{
    float: left;
    width: 500px;
    .categoryChart{
      color: #ffffff;
    }
  }
  .middle-container{
    float: left;
    width: calc(100vw - 1020px);
    .radialChart{
      color: #ffffff;
    }
    .chinaSdkMap{
      color: #ffffff;
    }
  }
  .right-container{
    float: left;
    width: 500px;
    .circleLineChart{
      color: #ffffff;
    }
  }
}
</style>
