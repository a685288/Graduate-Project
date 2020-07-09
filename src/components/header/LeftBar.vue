<template lang="pug">


Menu.left(:theme='theme3',active-name='1')
    MenuGroup(title='課程長度')
        //- MenuItem(name='1')
        //-     Icon(type='md-document')
        //-     |小於2小時
        //- MenuItem(name="2")
        //-     Icon(type="md-chatbubbles")
        //-     |2到10小時
        CheckboxGroup.CheckboxGroup(lable='課程長度' )
          Checkbox.box(label='2' border)
            span 不到2小時
          Checkbox.box(label='2-10小時' border)
            span 2-10小時 
    MenuGroup(title='统计分析')
        MenuItem(name='3')
            Icon(type='md-heart')
            | 用户留存
        MenuItem(name="4")
            Icon(type='md-leaf')
            |流失用户
</template>
<script>
export default {
  name: "leftbar"
};
</script>
<style lang='scss' scoped>
.left {
  flex: 1;
  padding: 100px;
}
.box {
  margin: 5px
}
</style>
<stylescoped>

</style>
