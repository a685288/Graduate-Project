<script src="@/courseData/course.js"></script>
<script>
import { getCourseInfo } from "@/apis/course.js";

// 課程影片測驗左邊的bar
export default {
  name: "sidebar",
  data() {
    return {
      theClassId: "",
      section: [
        { sectionId: "5f797dd3048cab61b8da238f", sectionTitle: "gbgfn" },
        { sectionId: "hrtjhytj", sectionTitle: "gbnhgnghhgfn" }
      ]

      // lessons: [
      //   {
      //     id: "1",
      //     title: "時間邏輯",
      //     url: ""
      //   },
      //   {
      //     id: "2",
      //     title: "句型",
      //     url: ""
      // }
      // ]
    };
  },
  mounted() {
    this.theClassId = this.$route.params.classId;
    console.log("ExamLeftBar-this.theClassId---" + this.theClassId);
    getCourseInfo(this.theClassId).then(res => {
      this.section = res.data.data.section;
      // 須測試
    });
  },
  methods:{
    toSection(id){
      this.$router.push("/dashboard/course/"+this.theClassId+"/lesson/exam/" + id);
    }
  }
};
</script>
<template lang="pug">
.div
  Menu(active-name="1")
    MenuItem(:name="item.sectionId", v-for="(item,index) in lessons", :key="index",@click="toSection(item.sectionId)")
      | L{{ index+1 }}－{{ item.title }}
</template>
<style lang="scss" scoped>
</style>