<script>
import ExamLeftBar from "@/components/lesson/ExamLeftBar.vue";
export default {
  name: "lesson",
  components: {
    ExamLeftBar
  }
};
</script>
<template lang="pug">
  .lesson
    ExamLeftBar.ExamLeftBar
    router-view.content
</template>
<style lang="scss" scoped>
.lesson {
  display: flex;
  flex-direction: row;
  .ExamLeftBar {
    flex: 1;
  }
  .content {
    flex: 4;
  }
}
</style>