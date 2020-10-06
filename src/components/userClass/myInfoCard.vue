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
    editName() {
      this.inputFun();
      if (this.value !== "") {
        this.newName();
        this.user.name = this.value;
      } else {
        console.log("未輸入內容");
      }
      console.log("this.user.name---" + this.user.name);
      console.log("this.value---" + this.value);
    },
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
                this.value = val;
              }
            },
            onOk: () => {
              this.$Message.info("成功更改姓名");
            }
          });
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