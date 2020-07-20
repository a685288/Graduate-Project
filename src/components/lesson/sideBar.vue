<script src="@/courseData/course.js"></script>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      Lessons: [
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
  }
};
</script>
<template lang="pug">
.div
  Menu(accordion='true')
    Submenu(name="1")
      template(slot="title")
        Icon.icon(type="ios-paper")
        | 第一單元
      MenuItem(name="1-1") 影片
      MenuItem(name="1-2") 課後測驗
</template>
<style lang="scss" scoped>
.div {
  margin: 1%;
}
</style>