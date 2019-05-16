<template>
  <div class="data-show-container clearfix">
    <div class="left-container">
      <!-- 横向柱状图 -->
      <categoryChart class="chartComponent categoryChart"/>
      <beautyPieChart class="chartComponent beautyPieChart"/>
    </div>
    <div class="middle-container">
      <!-- 雷达图 -->
      <radialChart class="chartComponent radialChart"/>
      <bar3DChart class="chartComponent bar3DChart"/>
    </div>
    <div class="right-container">
      <circleLineChart class="chartComponent circleLineChart"/>
      <!-- <scrollTable class="chartComponent scrollTable"/> -->
    </div>
  </div>
</template>
<script>
import CategoryChart from './components/categoryChart'
import RadialChart from './components/radialChart'
import CircleLineChart from './components/circleLineChart'
// import ScrollTable from './components/scrollTable'
import BeautyPieChart from './components/beautyPieChart'
import Bar3DChart from './components/bar3DChart'
export default {
  name: 'dataIndex2',
  components: {
    CategoryChart,
    RadialChart,
    CircleLineChart,
    // ScrollTable,
    BeautyPieChart,
    Bar3DChart
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
    width: 600px;
    .categoryChart{
      color: #ffffff;
    }
  }
  .middle-container{
    float: left;
    width: 500px;
    .radialChart{
      color: #ffffff;
    }
  }
  .right-container{
    float: left;
    width: 800px;
    .circleLineChart{
      color: #ffffff;
    }
  }
}
</style>
