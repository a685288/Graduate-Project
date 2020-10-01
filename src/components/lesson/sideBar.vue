<script src="@/courseData/course.js"></script>
<script>
// 課程影片測驗左邊的bar
export default {
  name: "sidebar",
  data() {
    return { 
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
  methods: {
  }
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