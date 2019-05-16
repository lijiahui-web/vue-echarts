<template>
  <div id="#scrollTable">
    <div class="scrollTable">
      <div class="scrollTableHead">
        <div class="headCell">班级</div>
        <div class="headCell">班主任</div>
        <div class="headCell">平均分</div>
      </div>
      <div class="scrollTableBody">
        <div class="absContent">
          <div class="scrollContent1">
            <div class="bodyRow" v-for="item in scrollData" :key="item.index">
              <div class="bodyCell">{{item.group}}</div>
              <div class="bodyCell">{{item.teacher}}</div>
              <div class="bodyCell">{{item.score}}</div>
            </div>
          </div>
          <div class="scrollContent2">
            <div class="bodyRow" v-for="item in scrollData" :key="item.index">
              <div class="bodyCell">{{item.group}}</div>
              <div class="bodyCell">{{item.teacher}}</div>
              <div class="bodyCell">{{item.score}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'scrollTable',
  data() {
    return {
      timeInter: null,
      scrollData: [
        { group: "10级1班", id: 3, score: 87, teacher: "赵老师" },
        { group: "10级2班", id: 3, score: 56, teacher: "钱老师" },
        { group: "10级3班", id: 3, score: 87, teacher: "孙老师" },
        { group: "10级4班", id: 3, score: 88, teacher: "李老师" },
        { group: "10级5班", id: 3, score: 100, teacher: "马老师" },
        { group: "10级6班", id: 3, score: 78, teacher: "周老师" },
        { group: "10级7班", id: 3, score: 90, teacher: "吴老师" },
        { group: "10级8班", id: 3, score: 76, teacher: "郑老师" },
        { group: "10级9班", id: 3, score: 54, teacher: "王老师" },
        { group: "10级10班", id: 3, score: 45, teacher: "诸葛老师" }
      ],
      activeIndex: 0,
      view:''
    };
  },
  mounted() {
    this.scrollInit()
  },
  methods: {
    scrollInit() {
      let that = this
      let height = $('.scrollContent1')[0].clientHeight;
      $('.scrollTable').css({'height':height+37+'px'})
      $('.scrollTableBody').css({'height':height+'px'})
      this.setInter()
      $('.scrollTableBody').on('mouseover',function(){
        window.clearInterval(that.timeInter)
      })
      $('.scrollTableBody').on('mouseout',function(){
        that.setInter()
      })
    },
    setInter() {
      let height = $('.scrollContent1')[0].clientHeight;
      this.timeInter = setInterval(() => {
        let top = $('.absContent').css('top')
        let oldValue = top.substring(0,top.length-2)
        let newValue = Number(oldValue) - 1
        if(newValue == height * (-1)){
          newValue = 0
        }
        $('.absContent').css({'top':newValue +'px'})
      }, 70);
    }
  },
};
</script>
<style lang="scss" scoped>
.scrollTable{
  .scrollTableHead{
    display: flex;
    display: -ms-flexbox;
    justify-content: space-around;
    align-items: center;
    height: 37px;
    width: 100%;
    .headCell{
      font-size: 14px;
      color: #586c86;
      width: 25%;
      height: 100%;
      display: flex;
      display: -ms-flexbox;
      justify-content: center;
      align-items: center;
    }
  }
  .scrollTableBody{
    position: relative;
    overflow: hidden;
    .absContent{
      position: absolute;
      top: 0;
      width: 100%;
      overflow: hidden;
    }
    .bodyRow:nth-child(odd){
      background-color: #1f3854;
    }
    .bodyRow:nth-child(2n){
      background-color: #182b41;
    }
    .bodyRow{
      display: flex;
      display: -ms-flexbox;
      justify-content: space-around;
      align-items: center;
      height: 37px;
      width: 100%;
      .bodyCell{
        font-size: 14px;
        color: #42b6f6;
        width: 25%;
        height: 100%;
        display: flex;
        display: -ms-flexbox;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>