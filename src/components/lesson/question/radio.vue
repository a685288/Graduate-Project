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
  RadioGroup(vertical) Antonio, I had no idea you were such a talented public speaker! The entire audience was really ____________ by what you said!
    Radio(label="1") 選項A
    Radio(label="2") 選項B
    Radio(label="3") 選項C
    Radio(label="4") 選項D
</template>
<style lang="scss" scoped>

</style> 