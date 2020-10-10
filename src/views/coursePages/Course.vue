<script>
import lessonTopic from "@/components/content/lessonTopic.vue";
import topic from "@/assets/topic.png";
import teacher from "@/assets/teacher.png";
import { getCourseInfo, postAddClass } from "@/apis/course.js";

export default {
  name: "courseinfo",
  components: {
    lessonTopic
  },
  data() {
    return {
      topic,
      teacher,
      theClassId: "",
      classInfo: {
        classId: "",
        createAt: "",
        imgUrl: "",
        intro: "",
        isOpen: "",
        isPublic: "",
        section: [
          { sectionId: "5f797dd3048cab61b8da238f", sectionTitle: "gbgfn" },
          { sectionId: "hrtjhytj", sectionTitle: "gbnhgnghhgfn" }
        ],
        teacherName: "",
        topic: ""
      }
    };
  },
  mounted() {
    this.theClassId = this.$route.params.classId;
    console.log("course-this.classId---" + this.theClassId);
    getCourseInfo(this.theClassId).then(res => {
      this.classInfo = res.data.data;
    });
  },
  methods: {
    addClass() {
      this.$Message["success"]({
        background: true,
        content: "加選課程成功"
      });
      console.log("加選classID" + this.classId);
      postAddClass({
        uid: localStorage.uid,
        classId: this.classId
      });
    },
    start() {
      console.log("start()"+this.classInfo.section)
      this.$router.push("/dashboard/course/"+this.theClassId+"/lesson/exam/" + this.classInfo.section);
    }
  }
};
</script>
<template lang="pug">
.content
  .info
    .left
      h1 {{ classInfo.topic }}
      h3 {{ classInfo.intro }}
      .button(align="center")
        Button.btn(@click="addClass()") 加入課程
        Button.btn(@click="start()") 開始上課
    .right
      .box
        h3 課程進度
        i-circle.circle(:percent="50")
          span.demo-Circle-inner 50%
      .box
        h3 課程資訊
        .news
          img(:src="topic")
          | 主題：{{ classInfo.topic }}
          br
          img(:src="teacher") 
          | 授課老師：{{ classInfo.teacherName }} 老師
  lessonTopic(:section="this.classInfo.section")
</template>
<style lang="scss" scoped>
.content {
  .info {
    display: flex;
    text-align: left;
    margin: 5% 15%;
    .left {
      flex: 3;
      padding: 30px;
      h1 {
        font-size: 400%;
      }
      h3 {
        font-size: 150%;
      }
      .btn {
        color: #494949 !important;
        text-transform: uppercase;
        text-decoration: none;
        background: #ffffff;
        padding: 5%;
        border: 5px solid #bac94a !important;
        display: inline-block;
        transition: all 0.4s ease 0s;
        font-weight: bold;
        font-size: 20px;
        margin: 10% 10% 0% 10%;
        line-height: -0px;
      }
      .btn:hover {
        color: #ffffff !important;
        background: #f6b93b;
        border-color: #f6b93b !important;
        transition: all 0.4s ease 0s;
      }
    }
    .right {
      flex: 2;
      display: flex;
      padding: 30px;
      border-left: 2px solid #d9d9d9;
      .box {
        flex: 1;
        .demo-Circle-inner {
          font-size: 24px;
        }
        .circle {
          margin: 10%;
        }
        h3 {
          line-height: 150%;
        }
        .news {
          margin: 5%;
          img {
            width: 18px;
            vertical-align: middle;
            margin: 10px 5px;
          }
        }
      }
    }
  }
}
</style>