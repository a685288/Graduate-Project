<template lang="pug">
.Header
  .Menu
    Menu.left(
      mode="horizontal",
      :theme="theme",
      active-name="2",
      @on-select="route"
    )
      //- MenuItem
      MenuItem(name="0")
        img(:src="logo")
      MenuItem(name="1")
        | {{ barItems.userClass }}
      MenuItem(name="2")
        Icon(type="ios-paper")
        | {{ barItems.onlineClass }}
      MenuItem(name="3")
        | {{ barItems.setting }}
      Submenu(name="4" v-if="false")
        MenuGroup(title="主題")
          MenuItem(name="4-1") 客家白
          MenuItem(name="4-2") 尼哥黑
          MenuItem(name="4-3") 尼多藍
      .right
        Input.right(
          search,
          enter-button,
          @on-search="search()",
          v-model="value",
          placeholder="請輸入課程邀請碼"
        )
</template>

<script>
import logo from "@/assets/logo.png";
import { getNotOpenClass } from "@/apis/course.js";
import { postSignOut } from "@/apis/member.js";

export default {
  name: "TitleBar",
  data() {
    return {
      theme: "light",
      logo,
      // theme: "light",
      value: "",
      barItems: {
        onlineClass: `公開課程`,
        userClass: `我的課程`,
        setting: `登出`
      }
    };
  },
  methods: {
    route(n) {
      switch (n) {
        case `0`:
          this.$router.push("/dashboard/myclass");
          break;
        case `1`:
          this.$router.push("/dashboard/myclass");
          break;
        case `2`:
          this.$router.push("/dashboard/allclass");
          break;
        case `3`:
          this.signOut();
          break;
        case `4-1`:
          this.theme = `light`;
          break;
        case `4-2`:
          this.theme = `dark`;
          break;
        case `4-3`:
          this.theme = `primary`;
          break;
        default:
          // localStorage.clear();
          // this.$router.push("/");
          break;
      }
    },
    search() {
      getNotOpenClass(this.value)
        .then(res => {
          this.$router.push("/dashboard/course/" + res.data.data.classId);
          if (res.data.status.code === 0) {
            this.$Message.success("搜尋課程成功");
          } else {
            this.$Message.error("查詢不到此課程");
          }
        })
        .catch(err => {
          this.$Message.error(`err: ${err}`);
          console.log(err);
        });
    },
    signOut() {
      postSignOut().then(res => {
        if (res.data.status.code === 0) {
          localStorage.removeItem("studentToken");
          this.$Message.success("登出成功");
          this.$router.push("/");
        } else {
          this.$Message.error(`err: ${res.data.status.code}`);
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.Header {
  display: flex;
  background-color: #ffffff;
  img {
    height: 60px;
  }
  .Menu {
    flex: 1;
    height: 60px;
    .left {
      color: white;
      background-color: #e6f7ff;
    }
    .right {
      float: right;
      padding: 8px;
      width: 50%;
    }
  }
}
</style>