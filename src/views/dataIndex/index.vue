<template>
  <div class="data-show-container clearfix">
    <div class="left-container">
      <lineChart class="chartComponent lineChart"/>
      <linesChart class="chartComponent linesChart"/>
      <barChart class="chartComponent barChart"/>
    </div>
    <div class="middle-container">
      <chinaMap class="chartComponent chinaMap"/>
      <tableData class="chartComponent tableData"/>
    </div>
    <div class="right-container">
      <pieChart class="chartComponent pieChart"/>
      <barChart2 class="chartComponent barChart2"/>
    </div>
  </div>
</template>
<script>
import LineChart from './components/lineChart'
import LinesChart from './components/linesChart'
import ChinaMap from './components/chinaMap'
import PieChart from './components/pieChart'
import TableData from './components/tableData'
import BarChart from './components/barChart'
import BarChart2 from './components/barChart2'
export default {
  name: 'dataIndex',
  components: {
    LineChart,
    LinesChart,
    ChinaMap,
    PieChart,
    TableData,
    BarChart,
    BarChart2
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
    .lineChart{
      color: #ffffff;
    }
    .linesChart{
      color: #ffffff;
    }
    .barChart{
      color: #ffffff;
    }
  }
  .middle-container{
    float: left;
    width: calc(100vw - 1020px);
    .chinaMap{
      color: #ffffff;
    }
  }
  .right-container{
    float: left;
    width: 500px;
    .pieChart{
      color: #ffffff;
    }
    .barChart2{
      color: #ffffff;
    }
  }
}
</style>

