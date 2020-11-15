<script>
// components
export default {
  name: "lessonTopic",
  props: {
    section: {
      sectionId: String,
      title: String,
    },
  },
  methods: {
    toExam(id, n) {
      this.$emit("toExam", id, n);
    },
  },
};
</script>
<template lang="pug">
.lessonTopic
  .div(v-if="this.section == ''")
    Alert.alert(type="warning", show-icon="")
      | 老師還未新增課程喔~~
      p.p(slot="desc") 快去提醒老師吧
  .div(v-else) 
    h1 章節內容
    .section(v-for="(item, index) in section", :key="index")
      Card.card(@click.native="toExam(item.sectionId, index)") 
        p.cardContent {{ index + 1 }}. {{ item.title }}
        //- Icon.icon(type="md-arrow-dropright-circle") 
</template>
<style lang='scss' scoped>
.lessonTopic {
  padding: 1%;
  background-color: #f0f0f0;
  height: 100%;
  .div {
    height: 80%;
    padding: 1% 15%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    h1 {
      line-height: 120%;
    }
    .card {
      flex: 1;
      font-size: 20px;
      text-align: left;
      padding: 0% 15%;
      font-weight: bold;
      margin: 10px 0px;
      transition-duration: 0.6s;
      .cardContent {
        white-space: nowrap;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        white-space: normal;
        overflow: hidden;
      }
    }
    .card:hover {
      background-color: #7cb305;
      color: white;
    }
    .alert {
      width: 50%;
      margin: 0px auto;
      font-size: 20px;
      height: 50%;
    }
    .p {
      text-align: center;
    }
  }
}
</style>    