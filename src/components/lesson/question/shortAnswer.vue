<script>
// 簡答題
export default {
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
    console.log(this.question)
    if (this.question.records != undefined) {
      console.log(this.question.records.selects[0])
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
div
  h3 {{ question.content }}
  p(v-if='this.isAnswerData') {{question.records.selects[0]}}
  Input.input(v-else 
    v-model="userAns.selects[0]",
    @on-change="ans()",
    size="large",
    clearable
  )
</template>
<style lang="scss" scoped>
div {
  width: 100%;
  input {
    margin: auto;
  }
}
</style>