<script>
// youtube 影片+測驗畫面
// import radio from "@/components/lesson/question/radio.vue";
// import multipleChoice from "@/components/lesson/question/multipleChoice.vue";
// import shortAnswer from "@/components/lesson/question/shortAnswer.vue";
import { getExamContent, submitExamAns } from "@/apis/course.js";

export default {
  name: "video",
  components: {
    // radio,
    // multipleChoice,
    // shortAnswer
  },
  data() {
    return {
      show: false,
      btnshow: true,
      check: false,
      theSectionId: "",
      section: {
        sectionId: "5f797dd3048cab61b8da238f",
        title: "", // 單元標題
        url: "sjfBgZTNLGY", // youtube url
        type: "",
        question: [
          {
            questionId: "",
            content: "", // 問題敘述
            select: ["", "", "", ""], // 選項
            sort: ""
          }
        ]
      },
      userAns: [],
      correctAns: [],
      score: 0
    };
  },
  mounted() {
    this.theSectionId = this.$route.params.sectionId;
    console.log("course-this.theSectionId---" + this.theSectionId);
    getExamContent(this.theSectionId).then(res => {
      this.section = res.data.data;
      console.log("this.section---" + res.data.data);
    });
  },
  methods: {
    submit() {
      console.log("ans" + this.ans);
      submitExamAns("5f472ace8d33d47194b8d332").then(res => {
        this.correctAns = res.data.data;
        console.log(this.correctAns);
        this.countScore();
      });
    },
    countScore() {
      for (var i = 0; i < this.correctAns.length; i++) {
        console.log("正確答案" + this.correctAns[i].answer);
        console.log("用戶答案" + this.userAns[i]);
        if (
          this.correctAns[i].answer.toString() === this.userAns[i].toString()
        ) {
          this.score++;
          console.log("加1分");
        }
      }
      console.log("分數" + this.score);
    },
    exam() {
      this.show = true;
      this.btnshow = false;
      this.check = true;
    }
  }
};
</script>
<template lang="pug">
div
  .video
    h1 第一單元 時間邏輯
    iframe.youtube(:src="'https://www.youtube.com/embed/' + this.section.url", frameborder='0', allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='')
    br
    Button.startbtn(
      type="primary",
      shape="circle",
      @click="exam",
      v-if="btnshow"
    ) 開始測驗
  .exam(v-if="show")
    h1 課堂小考
    CheckboxGroup.ques(
      v-for="item in section.question",
      :key="item.questionId",
      v-model="userAns[item.sort]",
      vertical
    ) {{ item.content }}
      Checkbox(label="A") {{ item.select[0] }}
      Checkbox(label="B") {{ item.select[1] }}
      Checkbox(label="C") {{ item.select[2] }}
      Checkbox(label="D") {{ item.select[3] }}
      br
    //- radio.ques
    //- radio.ques
    //- multipleChoice.ques
    //- multipleChoice.ques
    //- shortAnswer.ques
    Button(type="primary", shape="circle", v-if="check", @click="submit") 送出答案
</template>
<style lang="scss" scoped>
div {
  background-color: #f5f5f5;
  h1 {
    line-height: 250%;
    text-align: center;
  }
  .video {
    padding: 50px;
    .youtube{
      width:560px;
      height: 315px;
    }
    .startbtn {
      margin: 10px;
      height: 70px;
      width: 120px;
      font-size: 20px;
    }
  }
  .exam {
    width: 80%;
    margin: 10px auto;
    text-align: left;
    button {
      margin: 10px;
    }
    .ques {
      width: 100%;
      margin: 20px 0px;
    }
  }
}
</style>