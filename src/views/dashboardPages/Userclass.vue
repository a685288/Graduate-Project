<script>
import myinfo from "@/components/sider/myinfo.vue";
import classInfoCard from "@/components/classCard.vue";
import { getMyClass } from "../../apis/course.js";
export default {
  name: "myclass",
  components: {
    myinfo,
    classInfoCard
  },
  data() {
    return {
      user: {
        id: "",
        email: "",
        name: ""
      },
      class: [
        {
          classId: "",
          imgUrl: "",
          topic: "",
          intro: "",
          sectionNum: "",
          type: "",
          teacherName: "",
          createAt: ""
        }
      ]
    };
  },
  mounted() {
    getMyClass()
      .then(res => {
        this.user.id = res.data.data.ID;
        this.user.email = res.data.data.email;
        this.user.name = res.data.data.name;
        this.class = res.data.data.classinfo;
        console.log('user class data'+this.class);
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
  myinfo.info(:user="user")
  classCard
  Tabs.tabs
    TabPane(label="進行中", :classInfo="this.class") 進行中的課程
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
    padding: 0% 5%;
  }
}
</style>>