<script>
// 單選題
export default {
  name:'radio'
}
</script>
<template lang="pug">
.div
  RadioGroup(v-model="vertical",vertical)
    Radio(label="1")
      Icon(type="social-apple")
      span Apple
    Radio(label="2")
      Icon(type="social-apple")
      span Apple
</template>
<style lang="scss" scoped>

</style>