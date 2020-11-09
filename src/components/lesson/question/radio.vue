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
    }
  }
};
</script>
<template lang="pug">
.div
  .left(v-if='isAnswerData')
    RadioGroup(vertical, v-model="this.question.answer[0]") 
      h3 正確答案 
      Radio.radio(v-for='(item,index) in question.select' :key='index' :label="index") {{ }}
  .right
    RadioGroup(v-if='this.question.records != undefined ' vertical, v-model="this.question.records.selects[0]", @on-change="ans()") 
      h3 {{ question.content }}
      Radio(v-for='(item,index) in question.select' :key='index' :label="index") {{item}}
    RadioGroup(v-else vertical, v-model="userAns.selects[0]", @on-change="ans()") 
      h3 {{ question.content }}
      Radio(v-for='(item,index) in question.select' :key='index' :label="index" ) {{item}}
</template>
<style lang="scss" scoped>
.div {
  .left,
  .right {
    display: inline-flex;
  }
  .left {
    margin-right: 7px;
    .radio {
      width: 20px;
      margin: 0px auto;
    }
    h3 {
      color: #c00000;
    }
  }
}
</style>