<script>
// 多選題
export default {
  props: {
    question: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return {
      userAns: {
        questionId: String,
        type: this.question.type,
        sort: this.question.sort,
        selects: []
      },
      isAnswerData: false
    };
  },
  mounted() {
    if (this.question.records != undefined) {
      for (let n = 0; n < this.question.records.selects.length; n++) {
        this.question.records.selects[n] = parseInt(
          this.question.records.selects[n]
        );
      }
      for (let n = 0; n < this.question.answer.length; n++) {
        this.question.answer[n] = parseInt(this.question.answer[n]);
      }
      this.isAnswerData = true;
      let a = [];
      a = Object.assign([], this.question.records.selects);
      this.question.records.selects = [];
      a.forEach(e => {
        this.question.records.selects.push(e);
      });
    }

    // console.log(this.question.records.selects)
    // console.log(this.question.select)
    console.log(this.question.answer);
  },
  methods: {
    ans() {
      this.userAns.questionId = this.question.questionId;
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
  //- .left(v-if='isAnswerData')
  //-   CheckboxGroup.CheckboxGroup(vertical, v-model="question.answer") 
  //-     h3 正確答案 
  //-     Checkbox.checkbox(v-for='(item,index) in question.select' :key='index' :label="index") {{ }}
  .right
    //-做完畫面 
    CheckboxGroup.CheckboxGroup(v-if='question.records != undefined' vertical, v-model="question.records.selects")
      h3 {{ question.content }}
      .asngroup(v-for='(item, index) in question.select')
        Checkbox.checkbox(:key='index' :label="index") {{ item }}
          icon.coverbox(type='ios-checkmark-circle' v-if="answercheck(index)" size = "22")
        //- .coverbox(v-if="answercheck(index)")
    //- 作答中
    CheckboxGroup.CheckboxGroup(v-else vertical, v-model="userAns.selects", @on-change="ans()") 
      h3 {{ question.content }}
      Checkbox.checkbox(v-for='(item,index) in question.select' :key='index' :label="index") {{item}}
</template>
<style lang="scss" scoped>
.div {
  display: flex;
  .left {
    margin-right: 7px;
    // display: inline-block;
    flex: 1;
    .CheckboxGroup {
      background-color: #e6f7ff;
      .checkbox {
        display: block;
        width: 20px;
        margin: 10px auto;
      }
      h3 {
        color: #003a8c;
      }
    }
  }
  .right {
    // display: inline-block;
    flex: 12;
    .CheckboxGroup {
      display: block;
      .asngroup {
        .checkbox {
          border-bottom: 1px solid;;
          float: left;
          width: 95%;
          margin: 10px 0px;
          display: block;
        }
        .coverbox {
          float: right;
          color: rgb(91, 150, 2);
          // margin: 10px 0px;
        }
      }
    }
  }
}
</style>