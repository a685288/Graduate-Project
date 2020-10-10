<script src="@/courseData/course.js"></script>
<script>
import { getExamContent } from "@/apis/course.js";
// 課程影片測驗左邊的bar
export default {
  name: "sidebar",
  data() {
    return {
      theClassId:'',
      lessons: [
        {
          id: "1",
          title: "時間邏輯",
          url: ""
        },
        {
          id: "2",
          title: "句型",
          url: ""
        }
      ]
    };
  },
  mounted() {
    this.theClassId = this.$route.params.classId;
    console.log("ExamLeftBar-this.theClassId---" + this.theClassId);
    getExamContent(this.theSectionId).then(res => {
      this.section = res.data.data;
      console.log("this.section---" + res.data.data);
    });
  },
};
</script>
<template lang="pug">
.div
  Menu(active-name='1')
    MenuItem(name='' v-for="item in lessons" :key="item.id")
      | L{{item.id}}－{{item.title}} 
</template>
<style lang="scss" scoped>
</style>