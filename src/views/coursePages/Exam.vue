<script>
// youtube 影片+測驗畫面
import Youtube from "@/components/lesson/youtube.vue";
import radio from "@/components/lesson/question/radio.vue";
import multipleChoice from "@/components/lesson/question/multipleChoice.vue";
import shortAnswer from "@/components/lesson/question/shortAnswer.vue";
import { getExamContent } from "@/apis/course.js";

export default {
  name: "video",
  components: {
    Youtube,
    radio,
    multipleChoice,
    shortAnswer
  },
  data() {
    return {
      show: false,
      btnshow: true,
      check: false,
      sid: "5f472ace8d33d47194b8d332",
      section: {
        sectionId: "",
        title: "", // 單元標題
        url: "", // youtube url
        type: "",
        question: [
          {
            questionId: "",
            content: "", // 問題敘述
            select: [] // 選項
          }
        ]
      }
    };
  },
  mounted() {
    this.content();
  },
  methods: {
    content() {
      getExamContent('5f472ace8d33d47194b8d332').then(res => {
        console.log(res.data.data);
        this.section=res.data.data;
        console.log(this.section)
      });
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
    Youtube.youtube(src="http://www.youtube.com/embed/mLVfozgYKFM")
    br
    Button.startbtn(type="primary" shape="circle" @click='exam' v-if="btnshow") 開始測驗
  .exam(v-if="show")
    h1 課堂小考
    RadioGroup.ques(vertical v-for="item in section.question" :key="item.questionId") {{item.content}}
      Radio(label="1") {{item.select[0]}}
      Radio(label="2") {{item.select[1]}}
      Radio(label="3") {{item.select[2]}}
      Radio(label="4") {{item.select[3]}}
      br

    //- radio.ques
    //- radio.ques
    //- multipleChoice.ques
    //- multipleChoice.ques
    //- shortAnswer.ques
    Button(type="primary" shape="circle" v-if="check") 送出答案
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