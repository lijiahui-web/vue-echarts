<template>
  <div id="#scrollTable">
    <el-table
      :data="dutyRateData"
      class="tableDemo scroll-content"
      :style="{top}">
      <el-table-column
        prop="group"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="bookNum"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sceneNum"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="dutyRate"
        label="地址">
      </el-table-column>
    </el-table>

    <!-- <div class="body" :style="view">
      <div class="scroll-content" :style="{top}" >
        <tr v-for="item in dutyRateData" :key="item.id">
          <td>{{item.group}}</td>
          <td>{{item.bookNum}}</td>
          <td>{{item.sceneNum}}</td>
          <td>{{item.dutyRate}}</td>
        </tr>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'scrollTable',
  props: {
    viewHeight: {//可视窗口
      type: [Number, String],
      default: "200px"
    },
    // animationTime: {//移动间隔
    //   type: [Number, String],
    //   default: "0.825s"
    // },
    // direction:{//移动方向
    //     type:String,
    //     default:top,
    // },
    moveDistance:{//移动距离
        type:Number,
        default:25
    }
  },
  data() {
    return {
      dutyRateData: [
        { group: "电工班1", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班2", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班3", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班4", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班5", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班6", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班7", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班8", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班9", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班10", bookNum: 3, sceneNum: 0, dutyRate: "88%" },
        { group: "电工班11", bookNum: 3, sceneNum: 0, dutyRate: "88%" }
      ],
      activeIndex: 0,
      view:''
    };
  },
  methods: {
  },
  computed: {
    top() {
      return -this.activeIndex * this.moveDistance + "px"; //定义移动的单元高度
    },
    
  },
  mounted() {
    this.view= {"height":this.viewHeight}
    setInterval(() => {
      //自定义滚动 出勤率
      if (
        this.activeIndex <
        this.dutyRateData.length /* this.towerListArr.length */
      ) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, 1500);
  }
};
</script>
<style lang="scss" scoped>
.scroll-content {
  //自定义滚动 间隔时间和方向
  position: relative;
  transition: top 0.825s; //向上移动
}
#scrollTable{
  overflow: hidden;
}
</style>