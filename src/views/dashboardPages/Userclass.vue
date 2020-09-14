<script>
import myinfo from "@/components/sider/myinfo.vue";
import { getMyClass } from "@/apis/course.js";
export default {
  name: "myclass",
  components: {
    myinfo
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
    getMyClass(localStorage.getItem("uid"))
    .then(res => {
      console.log(res.data);
      //測res.data.classinfo資料
      this.user.id = res.data.ID;
      this.user.email = res.data.email;
      this.user.name = res.data.name;
      console.log(this.user.id);
      this.class = res.data.classinfo;
    });
  },
  methods: {}
};
</script>
<template lang="pug">
.div
  myinfo.info(:user='user')
  Tabs.tabs
    TabPane(label='進行中') 進行中的課程
    TabPane(label='已完成') 已完成的課程
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