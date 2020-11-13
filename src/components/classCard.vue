<script>
import defaultClass from "@/assets/defaultClass.png";
import topic from "@/assets/topic.png";
import teacher from "@/assets/teacher.png";
export default {
  name: "classInfoCard",
  props: {
    classInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      defaultClass,
      topic,
      teacher
    };
  }
};
</script>
<template lang="pug">
Card.card
  .topcon
    .img
      img(v-if="classInfo.imgUrl != ''", :src="classInfo.imgUrl")
      img(v-else, :src="defaultClass") 
    .title {{ classInfo.topic }}
    .topics
      img(:src="topic")
      | 章節：{{ classInfo.sectionNum }} 章
    .teacher
      img(:src="teacher") 
      | 老師：{{ classInfo.teacherName }} 
  hr(noshade)
  .content {{ classInfo.intro }}
</template>
<style lang="scss" scoped>
.card {
  display: flex;
  margin: 10px;
  width: 240px;
  height: 350px;
  flex-wrap: wrap;
  margin: 10px;
  .topcon {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 200px;
    .img {
      flex: 1;
      height: 110px;
      line-height: 110px;
      img {
        max-height: 100%;
        vertical-align: middle;
      }
    }
    .title {
      flex: 1;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .topics,
    .teacher {
      flex: 1;
      line-height: 18px;
      font-size: 14px;
      text-align: left;
      width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      img {
        width: 18px;
        vertical-align: middle;
        margin: 5px;
      }
    }
  }
  hr {
    margin: 1%;
    height: 0px;
    border-top: 1px solid #cfd1d3;
    border-right: 0px;
    border-bottom: 0px;
    border-left: 0px;
  }
  .content {
    flex: 1;
    width: 200px;
    height: 110px;
    margin: auto;
    padding: 5px;
    display: -webkit-box;
    -webkit-line-clamp: 5; //行數
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
  }
}
</style>