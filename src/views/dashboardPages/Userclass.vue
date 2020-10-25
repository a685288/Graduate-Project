<template lang="pug">
//- .div
//-   myInfoCard.info(:user="this.user")
//-   Tabs.tabs
//-     TabPane.box(label="全部")
//-       div
//-         ClassCard(v-for="(item, index) in classInfo" :key="index" :classInfo="item")
//-     TabPane.box(label="進行中") 進行中的課程
//-     TabPane.box(label="已完成") 已完成的課程
.userClass
  .userInfo
    myInfoCard(:user="this.user")
  .classInfo
    ClassCard(v-for="(item, index) in classInfo" :key="index" :classInfo="item" @click.native="toCourse(item.ClassID)")
</template>
<script>
import myInfoCard from "@/components/userClass/myInfoCard.vue";
import ClassCard from "@/components/classCard.vue";
import { getMyClass } from "../../apis/course.js";
export default {
  name: "myclass",
  components: {
    myInfoCard,
    ClassCard
  },
  data() {
    return {
      user: {
        id: "",
        email: "",
        name: ""
      },
      classInfo: []
    };
  },
  mounted() {
    this.userCalss()
  },
  methods: {
    toCourse(id){
      this.$router.push(`course/${id}`);
    },
    userCalss() {
      getMyClass()
        .then(res => {
            if(res.data.status.code === 0){
              this.user = res.data.data;
              this.classInfo = res.data.data.classinfo;
            }else{
              this.$Message.error(`err: ${res.data.status.code}`);
            }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.userClass{
  display: flex;
  align-items: flex-start;
  .userInfo{
    margin-top: 50px;
    flex: 1;
    min-width: 100px;
  }
  .classInfo{
    flex: 4;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;

  }
}
// .div {
//   display: flex;
//   margin: 5%;
//   .info {
//     flex: 1;
//     margin: 20px;
//   }
//   .tabs {
//     flex: 5;
//     margin: 0% 5%;
//     .box{
//       height: 100%;;
//     }
//   }
// }
</style>>