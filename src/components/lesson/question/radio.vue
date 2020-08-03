<script>
// 單選題
export default {
  name:'radio'
}
</script>
<template lang="pug">
.div
  RadioGroup(vertical)
    Radio(label="1") 選項A
    Radio(label="2") 選項B
    Radio(label="3") 選項A
    Radio(label="4") 選項B
</template>
<style lang="scss" scoped>

</style> 