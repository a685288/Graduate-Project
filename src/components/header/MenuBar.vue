<template lang="pug">
  .TitleBar
    Menu.left(mode="horizontal" :theme="theme" active-name="2" @on-select='route')
      MenuItem(name='1')
        | {{ barItems.userClass }}
      MenuItem(name='2')
        Icon(type="ios-paper")
        | {{ barItems.onlineClass }}
      MenuItem(name='3')
        | {{ barItems.setting }}
      .right
        Input.right(search enter-button @on-search="search()" v-model="value" placeholder="請輸入課程邀請碼")
</template>
<script>
// import { getNotOpenClass } from "@/apis/course.js";
export default {
  name: "TitleBar",
  data() {
    return {
      theme: "light",
      value: "",
      barItems: {
        userClass: `我的課程`,
        onlineClass: `線上課程`,
        setting: `登出`
      }
    };
  },
  methods: {
    route(n) {
      switch (n) {
        case `1`:
          this.$router.push("/dashboard/myclass");
          console.log('myclass')
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
      console.log(this.value);
      // getNotOpenClass(this.value).then(res => {
      //   this.$router.push("course/ ${this.value}");
      // });
    }
  }
};
</script>
<style scoped>
.right {
  float: right;
  padding: 8px;
  width: 50%;
}
</style>  