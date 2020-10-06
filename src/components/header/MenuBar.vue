<script>
import { getNotOpenClass } from "@/apis/course.js";
export default {
  name: "TitleBar",
  data() {
    return {
      theme: "light",
      value: "",
      barItems: {
        onlineClass: `線上課程`,
        userClass: `我的課程`,
        setting: `登出`
      }
    };
  },
  methods: {
    route(n) {
      switch (n) {
        case `1`:
          this.$router.push("/dashboard/myclass");
          console.log("myclass");
          break;
        case `2`:
          this.$router.push("/dashboard/allclass");
          break;
        default:
          localStorage.clear();
          this.$router.push("/");
          break;
      }
    },
    search() {
      console.log("search()");
      console.log("this.value---" + this.value);
      getNotOpenClass({ invite: toString(this.value) }).then(res => {
        console.log(res.data.ClassID);
        this.$router.push("course/"+res.data.ClassID);
      });
    }
  }
};
</script>
<template lang="pug">
.TitleBar
  Menu.left(
    mode="horizontal",
    :theme="theme",
    active-name="2",
    @on-select="route"
  )
    MenuItem(name="1")
      | {{ barItems.userClass }}
    MenuItem(name="2")
      Icon(type="ios-paper")
      | {{ barItems.onlineClass }}
    MenuItem(name="3")
      | {{ barItems.setting }}
    .right
      Input.right(
        search,
        enter-button,
        @on-search="search()",
        v-model="value",
        placeholder="請輸入課程邀請碼"
      )
</template>
<style scoped>
.right {
  float: right;
  padding: 8px;
  width: 50%;
}
</style>  