<script>
import { getSectionTitle } from "@/apis/exam.js";
export default {
  name: "lesson",
  data() {
    return {
      theClassId: "",
      theSectionId: "",
      section: [],
      step:0
    };
  },
  mounted() {
    this.theClassId = this.$route.params.classId;
    this.theSectionId = this.$route.params.sectionId;
    getSectionTitle(this.theClassId).then((res) => {
      if (res.data.status.code === 0) {
        this.section = res.data.data.data;
        this.step=res.data.data.step;
      } else {
        this.$Message.error(`err:${res.data.status.code}`);
      }
    });
  },
  methods: {
    toSection(n) {
      console.log(this.step)
      if (n <= this.step) {
        this.$router.push(
          "/dashboard/course/" +
            this.theClassId +
            "/lesson/exam" +
            (n + 1) +
            "/" +
            this.section[n].sectionId
        );
      } else {
        this.$Modal.warning({
          title: "請先完成前面章節呦！！",
        });
      }
    },
  },
};
</script>
<template lang="pug">
.lesson
  Menu.leftBar(:active-name="this.theSectionId", @on-select="toSection")
    .MenuIteGroup(v-for="(item, index) in section", :key="index")
      MenuItem(:name="index")
        p {{ index + 1 }}. {{ item.title }}
  router-view.content
</template>
<style lang="scss" scoped>
.lesson {
  display: flex;
  flex-direction: row;
  .leftBar {
    flex: 1;
    min-width: 150px;
    width: 100%;
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2; //行數
      -webkit-box-orient: vertical;
      white-space: normal;
      overflow: hidden;
    }
  }
  .content {
    margin: 0px;
    padding: 0px;
    flex: 4;
  }
}
</style>