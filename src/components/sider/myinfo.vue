<script>
// 我的課程左邊
import photo from "@/assets/photo.jpg";
// import { updateName } from "@/apis/member.js"
export default {
  name: "myinfo",
  props: {
    user: {
      name: String,
      email: String
    }
  },
  data() {
    return {
      photo,
      value: "",
      username: "",
    };
  },
  methods: {
    editName() {
      this.username = this.user.name;
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: "請輸入你的姓名"
            },
            on: {
              input: () => {
                this.value = this.user.name;
              }
            }
          });
        }
      });
      this.updateName();
    },
    updateName() {
      if (this.user.name != this.str) {
        console.log("改變");
      } else {
        console.log("無改變");
      }
      console.log("ip");
      console.log(this.user.name);
    }
  }
};
</script>
<template lang="pug">
  Card
    img(:src='photo')
    h2 {{user.name}}
    Icon(type="ios-people")
    | 信箱： {{user.email}}
    br
    Button(type="primary" ghost shape="circle" icon="md-brush" @click='editName' v-model="value")
</template>
<style lang="scss" scoped>
img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
</style>