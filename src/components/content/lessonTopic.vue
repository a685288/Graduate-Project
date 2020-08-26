<script>
// components
export default {
  name: "lessonTopic",
  components: {},
  prop: {},
  data() {
    return {
      Lessons: [
        {
          id: "1",
          title: "時間邏輯"
        },
        {
          id: "2",
          title: "句型"
        }
      ]
    };
  }
};
</script>
<template lang="pug">
  .div
    h1 包含的課程
    .lessons(v-for="(item, index) in Lessons",:key="item.id")
      Card.card 第{{index+1}}課－{{item.title}}
        Icon.icon(type="md-arrow-dropright-circle") 
</template>
<style lang='scss' scoped>
.div {
  background-color: lightgray;
  padding: 2% 15%;
  h1 {
    line-height: 120%;
  }
  .card {
    font-size: 20px;
    text-align: left;
    margin: 1%;
    padding: 0% 25%;
    font-weight: bold;
    .img {
      height: 20px;
    }
    .icon {
      float: right;
    }
  }
}
</style>    