<template lang="pug">
div
  .content
    .info
      .left
        img.classImg(:src="classInfo.imgUrl")
        .detail
          img(:src="topic")
          h4 章節：
          p 共 {{ classInfo.sectionNum }} 章
          br
          img(:src="teacher") 
          h4 授課老師：
          p {{ classInfo.teacherName }} 老師
      .middle
      .right
        .title
          h3 {{ classInfo.topic }}
        .intro 
          p {{ classInfo.intro }}
        .button
          .thermometer
            .square(v-if="this.percent >= 100") 上課進度
              i-circle.circle(
                :percent="this.percent",
                :stroke-color="circleColor()",
                :size="100"
              )
                Icon.icon(
                  type="ios-checkmark",
                  style="color: #5cb85c",
                  size="80"
                )
            .square.blue(v-else) 上課進度
              i-circle.circle(
                :percent="this.percent",
                :stroke-color="circleColor()",
                :size="100"
              )
                span {{ percent }}%
          .btnDiv
            Button.btn(v-if="classInfo.isAdd === 0", @click="addClass()") 加選課程
            Button.btn(v-else, @click="start()") 開始上課
  .sectionsArea
    lessonTopic(
      :section="this.classInfo.sections",
      :step="this.step",
      @toExam="toSection"
    )
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
      percent: 10,
      step: 0,
    };
  },
  mounted() {
    this.theClassId = this.$route.params.classId;
    getCourseInfo(this.theClassId).then((res) => {
      this.classInfo = res.data.data;
      this.step = this.classInfo.step;
      this.circle();
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
      if (this.classInfo.sectionNum === this.step) {
        this.$router.push(
          "/dashboard/course/" +
            this.theClassId +
            "/lesson/exam0/" +
            this.classInfo.sections[0].sectionId
        );
      } else {
        this.$router.push(
          "/dashboard/course/" +
            this.theClassId +
            "/lesson/exam" +
            (this.step + 1) +
            "/" +
            this.classInfo.sections[this.step].sectionId
        );
      }
    },
    toSection(sectionId, index) {
      if (this.classInfo.isAdd === 1) {
        this.$router.push(
          "/dashboard/course/" +
            this.theClassId +
            "/lesson/exam" +
            (index + 1) +
            "/" +
            sectionId
        );
      } else {
        this.$Message.error("請先加選課程喔！");
      }
    },
    circle() {
      if (this.classInfo.step === this.classInfo.sectionNum) {
        this.percent = 100;
      } else {
        this.percent = Math.round(
          (this.classInfo.step / this.classInfo.sectionNum) * 100
        );
      }
    },
    circleColor() {
      let color = "#2db7f5";
      if (this.percent == 100) {
        color = "#5cb85c";
      }
      return color;
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  position: relative;
  .info {
    height: 100%;
    max-height: 600px;
    display: flex;
    .left {
      padding: 20px 50px;
      flex: 1;
      flex-direction: column;
      height: 100%;
      .classImg {
        max-width: 70%;
        max-height: 450px;
      }
      .detail {
        font-size: 20px;
        text-align: left;
        height: 70%;
        margin: 0px auto;
        padding: 0px 10px;
        img {
          width: 25px;
          margin: 5px;
        }
        h4 {
          display: inline;
        }
        p {
          display: inline;
        }
      }
    }
    .middle {
      background-color: #e8eaec;
      width: 1px;
      max-height: 80%;
    }
    .right {
      flex: 1;
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
        white-space: pre-line;
        font-size: 18px;
        margin: 1% 0px;
        text-align: left;
        width: 100%;
        height: 50%;
        overflow-y: auto;
      }
      .button {
        // display: inline;
        position: relative;
        display: flex;
        flex-direction: row;
        .thermometer {
          position: relative;
          flex: 1;
          .square {
            width: 120px;
            height: 60px;
            position: absolute;
            top: 30px;
            left: 20%;
            border: 6px #5cb85c solid;
            border-radius: 10px;
            color: #000;
            line-height: 50px;
            font-weight: bold;
            font-size: 20px;
            .circle {
              position: absolute;
              top: -25px;
              left: 100px;
              background-color: #fff;
              border-radius: 45%;
              span {
                font-size: 24px;
              }
            }
          }
          .blue {
            border: 6px #2db7f5 solid;
          }
        }
        .btnDiv {
          padding: 20px 0px;
          flex: 1;
          width: 100%;
          .btn {
            // position: absolute;
            // top: 30px;
            // left: 0px;
            height: 70px;
            width: 50%;
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
  }
  .sectionsArea {
    flex: 1;
    height: 100%;
  }
}
</style>