<script>
// 單選題
export default {
  name: "radio",
  props: {
    question: {type: Object}
  },
  data() {
    return {
      userAns: {
        questionId: this.question.questionId,
        type: this.question.type,
        sort: this.question.sort,
        selects: []
      }
    };
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
  RadioGroup(vertical, v-model="userAns.selects[0]", @on-change="ans()") 
    h3 {{ question.content }}
    Radio(v-for='(item,index) in question.select' :key='index' :label="index") {{item}}
</template>
<style lang="scss" scoped>
</style>