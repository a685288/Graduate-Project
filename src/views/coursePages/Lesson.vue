<script>
import { getCourseInfo } from "@/apis/course.js";
export default {
  name: "lesson",
  data() {
    return {
      theClassId: "",
      theSectionId:'',
      section: []
    };
  },
  mounted() {
    this.theClassId = this.$route.params.classId;
    this.theSectionId = this.$route.params.sectionId;
    getCourseInfo(this.theClassId).then(res => {
      if (res.data.status.code === 0) {
        this.section = res.data.data.sections;
      } else {
        this.$Message.error(`err:${res.data.status.code}`);
      }
    });
  },
  methods: {
    toSection(id) {
      console.log(id);
      this.$router.push("/dashboard/course/" + this.theClassId + "/lesson/exam/" + id);
    }
  }
};
</script>
<template lang="pug">
.lesson
  Menu.leftBar(:active-name="this.theSectionId",@on-select="toSection")
    MenuItem(
      :name="item.sectionId",
      v-for="(item, index) in section",
      :key="index"
    )
      | {{ index + 1 }}.{{ item.title }}
  router-view.content
</template>
<style lang="scss" scoped>
.lesson {
  display: flex;
  flex-direction: row;
  .leftBar {
    flex: 1;
  }
  .content {
    margin: 0px;
    padding: 0px;
    flex: 4;
  }
}
</style>