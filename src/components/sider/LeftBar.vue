<template lang="pug">
  CheckboxGroup.CheckboxGroup(lable='課程長度' )
    h2 課程長度
    Checkbox.box(label='0' border)
      span 不到2小時
    Checkbox.box(label='2' border)
      span 2-10小時 
    Checkbox.box(label='11' border)
      span 11-20小時 
    Checkbox.box(label='20' border)
      span 20小時以上 
</template>
<script>
export default {
  name: "leftbar"
};
</script>
<style lang='scss' scoped>
.CheckboxGroup {
  padding: 100px;
  h2 {
    line-height: 200%;
  }
  .box {
    margin: 10px;
    width: 90%;
    span {
      font-size: 110%;
    }
  }
}
</style>