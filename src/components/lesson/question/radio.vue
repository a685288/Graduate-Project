<script>
// 單選題
export default {
  name: "radio",
  props: {
    question: {
      type: Object
    }
  },
  data() {
    return {
      userAns: {
        questionId: this.question.questionId,
        type: this.question.type,
        sort: this.question.sort,
        selects: []
      },
      isAnswerData: false
    };
  },
  mounted() {
    if (this.question.records != undefined) {
      this.question.records.selects[0] = parseInt(
        this.question.records.selects[0]
      );
      this.question.answer[0] = parseInt(this.question.answer[0]);
      this.isAnswerData = true;
    }
  },
  methods: {
    ans() {
      this.$emit("emitAns", this.userAns);
    },
    // 判斷回傳是否該渲染打勾
    answercheck(index) {
      let ans = this.question.answer;
      let search = ans.indexOf(index);
      if (search === -1) {
        return false;
      }
      return true;
    }
  }
};
</script>
<template lang="pug">
.div
  .left(v-if='isAnswerData')
    RadioGroup(vertical, v-model="this.question.answer[0]") 
      //- h3 正確答案 
      //- Radio.radio(v-for='(item,index) in question.select' :key='index' :label="index") {{ }}
  .right
    RadioGroup.RadioGroup(v-if='this.question.records != undefined ' , v-model="this.question.records.selects[0]", @on-change="ans()") 
      h3 {{ question.content }}
      .asngroup(v-for='(item, index) in question.select')
        Radio.Radio.mh6(:key='index' :label="index") {{item}}
          icon.coverbox(type='ios-checkmark-circle' v-if="answercheck(index)" size = "22")
          br
    RadioGroup(v-else , v-model="userAns.selects[0]", @on-change="ans()" vertical) 
      h3 {{ question.content }}
      Radio.Radio.mh6(v-for='(item,index) in question.select' :key='index' :label="index"  ) {{item}}
      br
</template>
<style lang="scss" scoped>
.div {
  width: 100%;
  .right {
    width: 100%;
    display: inline-flex;
      .RadioGroup{
        width: 100%;
        .asngroup{
          width: 100%;
          hover 效果
          .mh6{
            transition: all 0.5s;
            border: 1px solid rgba(0,0,0,0.5);
            position: relative; 
          }
          .mh6 span{
            z-index: 2; 
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;   
          }
          .mh6:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0;
            background-color: rgba(124, 255, 124, 0.185);
            transition: all 0.4s;
            transform: scale(1, 0.5);
          }
          .mh6:hover::before{
            opacity: 1;
            transform: scale(1, 1);
          }
          .Radio {
            float: left;
            width: 95%;
            border-bottom: 1px solid;
            display: block;
          }
          .coverbox {
            float: right;
            color: rgb(91, 150, 2);
            margin-top: 4px;
          }
        }
      }
  }
  // .left {
  //   margin-right: 7px;
  //   .radio {
  //     width: 20px;
  //     margin: 0px auto;
  //   }
  //   h3 {
  //     color: #c00000;
  //   }
  // }

  .Radio{
    white-space: pre-line;
    margin: 5px;
  }

}
</style>