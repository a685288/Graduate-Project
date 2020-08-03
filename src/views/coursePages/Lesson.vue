<script>
import SideBar from "@/components/lesson/sideBar.vue";
export default {
  name: "lesson",
  components: {
    SideBar
  }
};
</script>
<template lang="pug">
  .lesson
    SideBar.SideBar
    router-view.content
</template>
<style lang="scss" scoped>
.lesson {
  display: flex;
  flex-direction: row;
  .SideBar {
    flex: 1;
  }
  .content {
    flex: 4;
  }
}
</style>