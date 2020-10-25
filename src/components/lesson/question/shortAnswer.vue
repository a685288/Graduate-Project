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
div
  p {{ question.content }}
  Input.input(
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