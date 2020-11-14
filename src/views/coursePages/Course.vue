<template lang="pug">
.content
  .info
    .left
      img.classImg(:src="classInfo.imgUrl")
      .detail
        img(:src="topic")
        | 章節：{{ classInfo.sectionNum }} 章
        br
        img(:src="teacher") 
        | 授課老師：{{ classInfo.teacherName }} 老師
    hr.middle
    .right
      .title
        h3 {{ classInfo.topic }}
      .intro
        span {{ classInfo.intro }}
      .button
        Button.btn(v-if="classInfo.isAdd === 0", @click="addClass()") 加選課程
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
    lessonTopic,
  },
  data() {
    return {
      topic,
      teacher,
      status: {
        isAdd: false,
      },
      theClassId: "",
      classInfo: {},
    };
  },
  mounted() {
    this.theClassId = this.$route.params.classId;
    getCourseInfo(this.theClassId).then((res) => {
      this.classInfo = res.data.data;
    });
  },
  methods: {
    addClass() {
      putAddClass({
        classId: this.theClassId,
      })
        .then((res) => {
          if (res.data.status.code === 0) {
            this.$Message.success("加選課程成功");
            this.classInfo.isAdd = 1;
          } else if (res.data.status.code === 21107) {
            this.$Message.success("重複加選成功");
            this.classInfo.isAdd = 1;
          }
        })
        .catch((err) => {
          this.$Message.error;
          `err: ${err}`;
          console.log(err);
        });
    },
    start() {
      this.$router.push(
        "/dashboard/course/" +
          this.theClassId +
          "/lesson/exam1/" +
          this.classInfo.sections[0].sectionId
      );
    },
    toSection(sectionId, index) {
      console.log(index);
      if (this.classInfo.isAdd === 1) {
        this.$router.push(
          "/dashboard/course/" +
            this.theClassId +
            "/lesson/exam" +
            index +
            "/" +
            sectionId
        );
      } else {
        this.$Message.error("請先加選課程喔！");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 100%;
  .info {
    flex: 1;
    display: flex;
    height: 100%;
    .left {
      padding: 20px 50px;
      flex: 1;
      .classImg {
        max-width: 70%;
        height: auto;
        // min-width: 100px;
        // max-width: 600px;
        // min-height: 150px;
        // max-height: 400px;
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
      background-color: #e8eaec;
      width: 1px;
      border: 0px;
      float: left;
      height: 80%;
      margin: auto 0px;
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 20px 50px;
      .title {
        font-size: 25px;
        display: -webkit-box;
        -webkit-line-clamp: 2; //行數
        -webkit-box-orient: vertical;
        white-space: normal;
        overflow: hidden;
      }
      .intro {
        flex: 10;
        font-size: 18px;
        margin: 10px auto;
        text-align: left;
        overflow: overflow-x;
        height: 40px;
        background: #000;
        span{
          //
        //   overflow-x: hidden;
        // overflow-y: auto;
        overflow: auto;
        }
        
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
    background-color: #f0f0f0;
    height: 100%;
  }
}
</style>