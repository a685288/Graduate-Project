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
    route(n) {
      switch (n) {
        case "1":
          this.$router.push("video");
          break;
        case "2":
          this.$router.push("exam");
          break;
        default:
          this.$router.push("/");
          break;
      }
    }
  }
};
</script>
<template lang="pug">
.div
  Menu(:theme='theme3' active-name='1')
    MenuItem(name='' v-for="item in lessons" :key="item.id")
      | L{{item.id}}－{{item.title}} 

  //- Menu(accordion='true' @on-select='route')
  //-   Submenu(name="0" v-for="item in lessons" :key="item.id")
  //-     template(slot="title")
  //-       Icon(type="ios-paper")
  //-       |
  //-     MenuItem(name='1') 上課影片
  //-     MenuItem(name='2') 課後測驗
</template>
<style lang="scss" scoped>
</style>