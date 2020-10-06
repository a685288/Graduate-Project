<script>
import defaultClass from "@/assets/defaultClass.png";
import topic from "@/assets/topic.png";
import teacher from "@/assets/teacher.png";
export default {
  name: "classInfoCard",
  props: {
    classInfo: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      defaultClass,
      topic,
      teacher
    };
  },
  methods:{
    toCourse(id){
      this.$router.push("course/" + id);
    }
  }
};
</script>
<template lang="pug">
.div 
  Card.card(
    v-for="(item,index) in classInfo",
    :key="item.ClassID",
    @click.native="toCourse(item.ClassID)"
  )
    .img
      img(v-if="item.imgUrl != ''", :src="item.imgUrl")
      img(v-else, :src="defaultClass") 
    .title {{ item.topic }}
    .topics
      img(:src="topic")
      | 主題：{{ item.sectionNum }}
    .teacher
      img(:src="teacher") 
      | 授課老師：{{ item.teacherName }} 老師
    hr
    .content {{ item.intro }}
</template>
<style lang="scss" scoped>
.div {
  display: flex;
  margin: 15px;
  width: 240px;
  height: 350px;
  color: #000000;
  .card {
    flex-wrap: wrap;
    margin: 0px 5px;
    .img {
      height: 110px;
      line-height: 110px;
      img {
        width: 50px;
        vertical-align: middle;
      }
    }
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .topics,
    .teacher {
      line-height: 18px;
      font-size: 14px;
      text-align: left;
      margin: 5px;
      img {
        width: 18px;
        vertical-align: middle;
        margin: 5px;
      }
    }
    hr {
      size: 1px;
      color: #e8eaec;
    }
    .content {
      margin: 10px 0px;
      width: 200px;
      word-wrap: break-word;
      word-break: normal;
    }
  }
}
</style>