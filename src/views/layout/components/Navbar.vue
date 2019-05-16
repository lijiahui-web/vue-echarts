<template>
  <el-container>
    <el-header class="top_header">数据展示平台</el-header>
    <el-radio-group class="top-button-group" v-model="value" @change="lineTo">
      <el-radio-button label="数据展示1"></el-radio-button>
      <el-radio-button label="数据展示2"></el-radio-button>
    </el-radio-group>
  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        value: '数据展示1'
      };
    },
    methods: {
      lineTo() {
        if(this.value == '数据展示1'){
          this.$router.push('/dataIndex')
        }else if(this.value == '数据展示2'){
          this.$router.push('/dataIndex2')
        }
      }
    }
  }
</script>
<style lang="scss">
.top_header{
  color: #ffffff;
  text-align: left;
  font-weight: 700;
  border-bottom: 2px solid #1f3d5a;
  font-size: 24px;
}
.top-button-group{
  position: absolute;
  right: 20px;
  top: 10px;
  .el-radio-button__inner{
    color: #586c86;
    background-color: #203a58;
    border: none;
  }
  .el-radio-button:first-child .el-radio-button__inner{
    border: none;
  }
}
</style>
