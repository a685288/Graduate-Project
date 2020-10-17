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
        { sectionId: "",title: "" },
      ]
    };
  },
  mounted() {
    this.theClassId = this.$route.params.classId;
    getCourseInfo(this.theClassId).then(res => {
      this.section = res.data.data.sections;
    });
  },
  methods:{
    toSection(id){
      console.log('toSection')
      this.$router.push("/dashboard/course/"+this.theClassId+"/lesson/exam/" + id);
    }
  }
};
</script>
<template lang="pug">
.div
  Menu(active-name="1" @on-select="toSection")
    MenuItem(:name="item.sectionId", v-for="(item,index) in section", :key="index",)
      | L{{ index+1 }}－{{ item.title }}
</template>
<style lang="scss" scoped>
</style>