<template lang="pug">
.content
  .info
    .left
      img.classImg(:src="classInfo.imgUrl")
      .detail
        img(:src="topic")
        | 章節數：{{ classInfo.sectionNum }}
        br
        img(:src="teacher") 
        | 授課老師：{{ classInfo.teacherName }} 老師
    hr.middle
    .right
      .title
        h1 {{ classInfo.topic }}
      .intro
        h3 {{ classInfo.intro }}
      .button
        Button.btn(v-if="classInfo.isAdd===0", @click="addClass()") 加入課程
        Button.btn(v-else, @click="start()") 開始上課
  .sectionsArea
    lessonTopic(:section="this.classInfo.sections", @toExam="toSection")
</template>
<script>
import lessonTopic from "@/components/content/lessonTopic.vue";
import topic from "@/assets/topic.png";
import teacher from "@/assets/teacher.png";
import { getCourseInfo, putAddClass } from "@/apis/course.js";

export default {
  name: "courseinfo",
  components: {
    lessonTopic
  },
  data() {
    return {
      topic,
      teacher,
      status: {
        isAdd: false
      },
      theClassId: "",
      classInfo: {}
    };
  },
  mounted() {
    this.theClassId = this.$route.params.classId;
    getCourseInfo(this.theClassId).then(res => {
      this.classInfo = res.data.data;
    });
  },
  methods: {
    addClass() {
      putAddClass({
        classId: this.theClassId
      })
        .then(res => {
          if (res.data.status.code === 0) {
            this.$Message.success("加選課程成功");
            this.classInfo.isAdd=1
          } else if (res.data.status.code === 21107) {
            this.$Message.success("重複加選成功");
            this.classInfo.isAdd=1
          }
        })
        .catch(err => {
          this.$Message.error;
          `err: ${err}`;
          console.log(err);
        });
    },
    start() {
      this.$router.push(
        "/dashboard/course/" +
          this.theClassId +
          "/lesson/exam0/" +
          this.classInfo.sections[0].sectionId
      );
    },
    toSection(sectionId) {
      if (this.classInfo.isAdd===1) {
        this.$router.push(
          "/dashboard/course/" + this.theClassId + "/lesson/exam/" + sectionId
        );
      } else {
        this.$Message.error("請先加入課程喔！");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  .info {
    flex: 1;
    display: flex;
    .left {
      padding: 20px 50px;
      flex: 3;
      .classImg {
        max-width: 600px;
        max-height: 400px;
      }
      .detail {
        font-size: 20px;
        text-align: left;
        max-width: 70%;
        margin: 0px auto;
        padding: 0px 10px;
        img {
          width: 25px;
          margin: 5px;
        }
      }
    }
    .middle {
      flex: 0 0;
      flex-basis: 1px;
      background-color: black;
      height: auto;
    }
    .right {
      flex: 3;
      display: flex;
      flex-direction: column;
      padding: 20px 50px;
      .title {
        font-size: 25px;
      }
      .intro {
        flex: 10;
        font-size: 18px;
        margin: 10px auto;
        text-align: left;
      }
      .button {
        flex: 1;
        flex-basis: 80px;
        .btn {
          height: 70px;
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
    }
  }
  .sectionsArea {
    flex: 1;
    background-color: lightgray;
  }
}
// .content {
//   .info {
//     display: flex;
//     text-align: left;
//     margin: 5% 15%;
//     align-items: stretch;
//     .right {
//       flex: 3;
//       // padding: 30px;
//       h1 {
//         font-size: 400%;
//       }
//       h3 {
//         font-size: 150%;
//       }
//       .btn {
//         color: #494949 !important;
//         text-transform: uppercase;
//         text-decoration: none;
//         background: #ffffff;
//         padding: 5%;
//         border: 5px solid #bac94a !important;
//         display: inline-block;
//         transition: all 0.4s ease 0s;
//         font-weight: bold;
//         font-size: 20px;
//         margin: 10% 10% 0% 10%;
//         line-height: -0px;
//       }
//       .btn:hover {
//         color: #ffffff !important;
//         background: #f6b93b;
//         border-color: #f6b93b !important;
//         transition: all 0.4s ease 0s;
//       }
//     }
//     .middle{
//       flex: 1;
//       height: 100%;
//     }
//     .left {
//       flex: 2;
//       display: flex;
//       padding: 30px;
//       .box {
//         flex: 1;
//         .demo-Circle-inner {
//           font-size: 24px;
//         }
//         .circle {
//           margin: 10%;
//         }
//         h3 {
//           line-height: 150%;
//         }
//         .news {
//           margin: 0%;
//           img {
//             width: 18px;
//             vertical-align: middle;
//             margin: 10px 5px;
//           }
//         }
//       }
//     }
//   }
// }
</style>