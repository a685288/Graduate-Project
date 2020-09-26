<script>
export default {
  name: "classInfoCard",
  props: {
    classInfo: 
    [
      {
        ClassID: String,
        createAt: String,
        imgUrl: String,
        intro: String,
        sectionNum: String,
        teacherId: String,
        teacherName: String,
        topic: String,
        type: String
      }
    ]
  },
  mounted() {
    console.log("porps class info" + this.classInfo);
  }
};
</script>
<template lang="pug">
div 
  h2 {{classInfo}}
  //- Card(v-for="item in classInfo", :key="item.classId")
  //-   .img
  //-     img(v-if="item.img != ''", :src="item.img")
  //-     img(v-else, :src="defaultClass") 
  //-   .title {{ item.topic }}
  //-   .topics
  //-     img(:src="topic")
  //-     | 主題：{{ item.sectionNum }}
  //-   .teacher
  //-     img(:src="teacher") 
  //-     | 授課老師：{{ item.teacherName }} 老師
  //-   hr
  //-   .content {{ item.intro }}
</template>
<style lang="scss" scoped>
</style>