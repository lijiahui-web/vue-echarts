<template>
  <div>
    <!-- <el-table
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
    </el-table> -->
    <lottie :options="defaultOptions" :height="300" :width="400" v-on:animCreated="handleAnimation"/>
    <div>
        <p>Speed: x{{animationSpeed}}</p>
        <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="animationSpeed">
    </div>
    <button v-on:click="stop">stop</button>
    <button v-on:click="pause">pause</button>
    <button v-on:click="play">play</button>
  </div>
</template>
<script>
import Lottie from './lottie.vue';
import * as animationData from "@/assets/loading.json";
export default {
  name: 'tableData',
  components: {
    'lottie': Lottie
  },
  data() {
    return {
      // tableData: [{
      //   date: '2016-05-02',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }, {
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1517 弄'
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1519 弄'
      // }, {
      //   date: '2016-05-03',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1516 弄'
      // }],
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
    stop: function () {
      this.anim.stop();
    },

    play: function () {
      this.anim.play();
    },

    pause: function () {
      this.anim.pause();
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
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
