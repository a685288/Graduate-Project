<template lang="pug">
  .TitleBar
    Menu.left(mode="horizontal",:theme="theme",active-name="1",@on-select='route')
      MenuItem(name='1')
        | {{ barItems.userClass }}
      MenuItem(name='2')
        Icon(type="ios-paper")
        | {{ barItems.onlineClass }}
      Submenu(name='3')
        template(slot='title')
          Icon(type='ios-construct')
          |{{ barItems.setting }}
        MenuGroup(:title=`barItems.setitem.title`)
          MenuItem(name='3-1') {{ barItems.setitem.userinfo }}
          MenuItem(name='3-2') {{ barItems.setitem.logout }}
      .right
        Input.right(search enter-button @click="search()" placeholder="請輸入課程邀請碼")
</template>
<script>
export default {
  name: "TitleBar",
  data() {
    return {
      theme: "light",
      value: "",
      barItems: {
        userClass: `我的課程`,
        onlineClass: `線上課程`,
        setting: `設定`,
        setitem: {
          title: `個人`,
          logout: `登出`,
          userinfo: `個人資訊`
        }
      }
    };
  },
  methods: {
    route(n) {
      console.log(n);
      switch (n) {
        case `1`:
          this.$router.push("/dashboard/myclass");
          break;
        case `2`:
          this.$router.push("/dashboard/allclass");
          break;
        default:
          this.$router.push("/");
          break;
      }
    },
    search() {
      console.log("search()");
      // console.log(value);
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