<script>
// 多選題
export default {
  props: {
    question: {
      questionId:String,
      type: Object
    }
  },
  data() {
    return {
      userAns: {
        questionId: String,
        type: this.question.type,
        sort: this.question.sort,
        selects: []
      }
    };
  },
  methods: {
    ans() {
      this.userAns.questionId=this.question.questionId
      this.$emit("emitAns", this.userAns);
    }
  }
};
</script>
<template lang="pug">
div
  CheckboxGroup(v-model="userAns.selects", @on-change="ans()" ) {{ question.content }}
    Checkbox.Checkbox(v-for='(item,index) in question.select' :key='index' :label="index") {{item}}
</template>
<style lang="scss" scoped>
.Checkbox {
  display: block;
  margin: 2% 0%;
}
</style>