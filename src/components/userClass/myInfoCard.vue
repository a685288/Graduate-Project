<script>
// 我的課程左邊 個人資訊卡
import photo from "@/assets/photo.jpg";
import { updateName } from "@/apis/member.js";
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
    };
  },
  methods: {
    inputFun() {
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
                this.user.name = val;
                this.value = val;
              }
            }
          });
        },
        onOk: () => {
          if (this.value !== "") {
            this.newName();
          } else {
            console.log("未輸入內容");
          }
        }
      });
    },
    newName() {
      updateName({ name: this.value })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      console.log("update name fun");
      console.log(this.user.name);
    }
  }
};
</script>
<template lang="pug">
div
  img(:src="photo")
  h2 {{ user.name }}
  p {{ user.email }}
  br
  Button.btn(
    type="primary",
    ghost,
    shape="circle",
    icon="md-brush",
    @click="inputFun"
  )
</template>
<style lang="scss" scoped>
img {
  height: 50%;
  width: 100%;
  border-radius: 50%;
}
</style>