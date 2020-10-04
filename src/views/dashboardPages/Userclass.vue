<script>
import myInfoCard from "@/components/userClass/myInfoCard.vue";
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
        email: "33",
        name: "22"
      },
      // classInfo: [{
      //     ClassID: String,
      //     createAt: String,
      //     imgUrl: String,
      //     intro: String,
      //     sectionNum: String,
      //     teacherId: String,
      //     teacherName: String,
      //     topic: String,
      //     type: String
      //   }
      // ]
      classInfo: [{
          ClassID: '123',
          createAt: '123',
          imgUrl: '',
          intro: 'dhrthfjgjfjgoiertjfcjjdjtriirjthjtrijihjitrjihjijhirtji',
          sectionNum: '123',
          teacherId: '123',
          teacherName: '123',
          topic: '123',
          type: '123'
        },{
          ClassID: '123',
          createAt: '123',
          imgUrl: '',
          intro: '123',
          sectionNum: '123',
          teacherId: '123',
          teacherName: '123',
          topic: '123',
          type: '123'
        }
      ]
    };
  },
  mounted() {
    this.userCalss()
  },
  methods: {
    userCalss() {
      getMyClass()
        .then(res => {
          this.user = res.data.data;
          this.classInfo = res.data.data.classInfo;
          console.log("this.user---" + this.user);
          console.log("this.classData---" + this.classData);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<template lang="pug">
.div
  myInfoCard.info(:user="this.user")
  Tabs.tabs
    TabPane.box(label="全部")
      div
        classCard( :classInfo="classInfo" )
    TabPane.box(label="進行中") 進行中的課程
    TabPane.box(label="已完成") 已完成的課程
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
    .box{
      height: 100%;;
    }
  }
}
</style>>