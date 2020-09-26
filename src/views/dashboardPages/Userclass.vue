<script>
import myInfoCard from "@/components/sider/myInfoCard.vue";
import classCard from "@/components/classCard.vue";
import { getMyClass } from "../../apis/course.js";
export default {
  name: "myclass",
  components: {
    myInfoCard,
    classCard
  },
  data() {
    return {
      user: {
        id: "",
        email: "",
        name: ""
      },
      classData: [
        
      ]
    };
  },
  mounted() {
    getMyClass()
      .then(res => {
        console.log("data---"+res.data.data.classinfo)
        this.user.id = res.data.data.ID;
        this.user.email = res.data.data.email;
        this.user.name = res.data.data.name;
        this.classData = res.data.data.classinfo;
        console.log("this.class---" + this.classData);
      })
      .catch(err => {
        alert(err);
      });
  },
  methods: {}
};
</script>
<template lang="pug">
.div
  myInfoCard.info(:user="user")
  Tabs.tabs
    TabPane(label="進行中" v-for="item in classData" :key="item.id") 進行中的課程
      //- classCard( :classInfo="item" )
      h1 rtrhyerj
    TabPane(label="已完成") 已完成的課程
</template>

<style lang="scss" scoped>
.div {
  display: flex;
  margin: 5%;
  .info {
    flex: 1;
    margin: 20px;
  }
  .tabs {
    flex: 5;
    margin: 0% 5%;
  }
}
</style>>