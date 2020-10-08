<script>
// components
export default {
  name: "lessonTopic",
  components: {},
  props: {
    section: {
      sectionId: String,
      sectionTitle: String
    }
  },
  methods:{
    toExam(id){
      this.$router.push("exam/" + id);
    }
  }
};
</script>
<template lang="pug">
  .div
    h1 包含的課程
    .lessons(v-for="(item, index) in section",:key="index")
      Card.card(@click.native="toExam(item.sectionId)") 第{{index+1}}課－{{item.sectionTitle}}
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