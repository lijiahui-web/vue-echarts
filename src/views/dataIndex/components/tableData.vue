<template>
  <div>
    <el-table
      :data="tableData"
      class="tableDemo"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'tableData',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>
<style lang="scss">
.tableDemo{
  thead{
    color: #586c86;
  }
  th,tr{
    background: #1f3853
  }
  td,th.is-leaf{
    border-bottom: 1px solid #182b41;
  }
  tbody{
    color: #ffffff;
  }
  .el-table__body tr:hover>td{
    background-color: #1f3853;
  }
}
.el-table::before{
  height: 0;
}
</style>
