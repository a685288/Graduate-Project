<script>
// 多選題
export default {

}
</script>
<template lang="pug">
.div 
  CheckboxGroup(v-model="border") 最愛吃的水果?
    br
    Checkbox(label="1") 香蕉
    Checkbox(label="2") 蘋果
    Checkbox(label="3") 鳳梨
    Checkbox(label="4") 荔枝
</template>
<style lang="scss" scoped>

</style>