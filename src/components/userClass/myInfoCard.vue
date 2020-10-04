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
      value: ""
      // oldUserName: "",
    };
  },
  methods: {
    editName() {
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: "請輸入你的姓名"
            },
            on: {
              input: val => {
                this.value = val;
              }
            }
          });
        }
      });
      this.user.name = this.value;
      console.log("this.user.name---" + this.user.name);
      console.log("this value---" + this.value);
      // this.updateName();
    }
    // updateName() {
    //   if (this.user.name != this.oldUserName) {
    //     console.log("改變");
    //   } else {
    //     console.log("無改變");
    //   }
    //   console.log("update name fun");
    //   console.log(this.user.name);
    // }
  }
};
</script>
<template lang="pug">
Card
  img(:src="photo")
  h2 {{ user.name }}
  p {{ user.email }}
  br
  Button.btn(
    type="primary",
    ghost,
    shape="circle",
    icon="md-brush",
    @click="editName",
    v-model="user.name"
  )
</template>
<style lang="scss" scoped>
img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.btn {
  margin: 10px;
}
</style>