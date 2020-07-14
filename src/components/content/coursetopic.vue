<script>
export default {
  name: "coursetopic",
  prop: {},
  data() {
    return {
      Lessons: [
        {
          id: "1",
          title: "英文的時間邏輯",
          url: ""
        },
        {
          id: "2",
          title: "萬用句型",
          url: ""
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
  padding: 5% 15%;
  h1 {
    text-align: left;
    line-height: 50px;
  }
  .card {
    font-size: 20px;
    text-align: left;
    margin: 1%;
    padding: 0% 25%;
    font-weight: bold;
    .icon{
      float: right;
    }
  }
}
</style>    