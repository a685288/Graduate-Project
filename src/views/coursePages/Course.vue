<script>
import lessonTopic from "@/components/content/lessonTopic.vue";
import topic from "@/assets/topic.png";
import teacher from "@/assets/teacher.png";
import { postAddClass } from "@/apis/course.js";

export default {
  name: "courseinfo",
  components: {
    lessonTopic
  },
  data() {
    return {
      topic,
      teacher,
      course: [
        {
          title: "英文基礎課",
          intro: "成就你的未來",
          topic: "13",
          teacher: "Rudy"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    add(type) {
      console.log("1d");
      this.$Message[type]({
        background: true,
        content: "加選課程成功"
      });
      console.log("加選");
      postAddClass({
        uid: localStorage.uid,
        classId: localStorage.classId
      });
    },
    start() {
      this.$router.push("/dashboard/lesson/exam");
    }
  }
};
</script>
<template lang="pug">
  .content
    .info(v-for="item in course" :key="item.id")
      .left
        h1 {{item.title}}
        h3 {{item.intro}}
        .button(align='center')
          Button.btn(@click="add('success')") 加入課程
          Button.btn(@click='start()') 開始上課
      .right
        .box
          h3 課程進度
          i-circle.circle(:percent="50")
            span.demo-Circle-inner 50%
        .box
          h3 課程資訊
          .news
            img(:src='topic')
            | 主題：{{item.topic}}
            br
            img(:src='teacher') 
            | 授課老師：{{item.teacher}} 老師
    lessonTopic
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
            margin: 10px 0px;
          }
        }
      }
    }
  }
}
</style>