<script>
// 單選題
export default {
  name:'radio',
  props: {
    question: {
      questionId: String,
      content: String, // 問題敘述
      select: Array, // 選項
      sort: String,
      type: String
    }
  },
}
</script>
<template lang="pug">
.div
  RadioGroup(vertical) {{question.content}}
    Radio(label="1") {{question.select[0]}}
    Radio(label="2") {{question.select[1]}}
    Radio(label="3") {{question.select[2]}}
    Radio(label="4") {{question.select[3]}}
</template>
<style lang="scss" scoped>

</style> 