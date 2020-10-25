<script>
// 多選題
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
  CheckboxGroup(v-model="userAns.selects", @on-change="ans()") {{ question.content }}
    br
    Checkbox.Checkbox(label="0") {{ question.select[0] }}
    Checkbox.Checkbox(label="1") {{ question.select[1] }}
    Checkbox.Checkbox(label="2") {{ question.select[2] }}
    Checkbox.Checkbox(label="3") {{ question.select[3] }}
</template>
<style lang="scss" scoped>
.Checkbox {
  display: block;
  margin: 2% 0%;
}
</style>