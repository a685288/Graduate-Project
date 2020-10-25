<script>
// 單選題
export default {
  name: "radio",
  props: {
    question: {
    }
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
  RadioGroup(vertical, v-model="userAns.selects[0]", @on-change="ans()") {{ question.content }}
    Radio(label="0") {{ question.select[0] }}
    Radio(label="1") {{ question.select[1] }}
    Radio(label="2") {{ question.select[2] }}
    Radio(label="3") {{ question.select[3] }}
</template>
<style lang="scss" scoped>
</style> 