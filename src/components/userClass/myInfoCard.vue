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
      newName: ""
    };
  },
  methods: {
    inputFun() {
      this.$Modal.confirm({
        render: h => {
          return h("Input", {
            props: {
              value: this.newName,
              autofocus: true,
              placeholder: "請輸入你的姓名"
            },
            on: {
              input: val => {
                this.newName = val;
              }
            }
          });
        },
        onOk: () => {
          if (this.newName !== "") {
            this.updName();
          } else {
            console.log("未輸入內容");
          }
        }
      });
    },
    updName() {
      updateName({ name: this.newName })
        .then(res => {
          if (res.data.status.code === 0){
            this.$Message.success("修改成功");
            this.user.name = this.newName;
            this.newName = "";
          }else{
            this.$Message.error("error");
            this.newName = "";
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<template lang="pug">
div
  //- img(:src="photo")
  .name
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
.name{
  width: 80%;
  margin: 0px auto;
  word-wrap: break-word;
  word-break: break-all;

}
// img {
//   height: 50%;
//   width: 100%;
//   border-radius: 50%;
// }
</style>