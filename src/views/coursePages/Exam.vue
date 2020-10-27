<script>
// youtube 影片+測驗畫面
import radio from "@/components/lesson/question/radio.vue";
import multipleChoice from "@/components/lesson/question/multipleChoice.vue";
import shortAnswer from "@/components/lesson/question/shortAnswer.vue";
import { getExamContent, submitExamAns, postExamRecord } from "@/apis/exam.js";

export default {
  components: {
    radio,
    multipleChoice,
    shortAnswer
  },
  data() {
    return {
      show: false,
      btnshow: true,
      check: false,
      theClassId: this.$route.params.classId,
      theSectionId: this.$route.params.sectionId,
      answer: [{}, {}, {}, {}, {}],
      section: {},
      correctAns: [],
      array: []
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.theSectionId = to.params.sectionId;
    next(this.getData());
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      getExamContent(this.theSectionId).then(res => {
        if (res.data.status.code === 0) {
          this.section = res.data.data;
          console.log("this.section---" + this.section.title);
        } else {
          this.$Message.error(`err:${res.data.status.code}`);
        }
        this.$forceUpdate();
      });
    },
    ans(userAns) {
      this.answer[userAns.sort].questionId = userAns.questionId;
      this.answer[userAns.sort].selects = userAns.selects;
      this.answer[userAns.sort].type = userAns.type;
    },
    submit() {
      submitExamAns(this.theSectionId).then(res => {
        if (res.data.status.code === 0) {
          this.correctAns = res.data.data;
        } else {
          this.$Message.error(`err:${res.data.status.code}`);
        }
        this.score();
      });
    },
    score() {
      for (let x = 0; x < 5; x++) {
        let check = 1;
        switch (this.answer[x].type) {
          case 0: //單選
            if (this.correctAns[x].answer[0] === this.answer[x].selects[0]) {
              this.answer[x].isTrue = 1;
            } else {
              this.answer[x].isTrue = 0;
            }
            break;
          case 1: //多選
            if (
              this.correctAns[x].answer.length === this.answer[x].selects.length
            ) {
              for (let i = 0; i < this.correctAns[x].answer.length; i++) {
                if (
                  !this.correctAns[x].answer.includes(this.answer[x].selects[i])
                ) {
                  check = 0;
                  break;
                }
              }
            } else {
              check = 0;
            }
            this.answer[x].isTrue = check;
            check = 1;
            break;
          case 2: //簡答
            this.answer[x].isTrue = 1;
            break;
          default:
            console.log("未知錯誤");
            break;
        }
      }
      this.answer.forEach(item => {
        delete item.type;
      });
      console.log("this.answer---" + this.answer);
      postExamRecord({
        classId: this.theClassId,
        sectionId: this.theSectionId,
        records: this.answer,
        step: 1
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
    h1 {{ this.section.title }}
    iframe.youtube(
      :src="'https://www.youtube.com/embed/' + this.section.url",
      frameborder="0",
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    )
    br
    Button.startbtn(
      type="primary",
      shape="circle",
      @click="exam()",
      v-if="this.btnshow"
    ) 開始測驗
  .exam(v-if="this.show")
    h1 {{ this.section.title }}－課堂小考
    .questionDiv(v-for="(item, index) in section.question", :key="index")
      h3 第{{ index + 1 }}題
      radio.ques(v-if="item.type == 0", :question="item", v-on:emitAns="ans")
      multipleChoice.ques(
        v-if="item.type == 1",
        :question="item",
        v-on:emitAns="ans"
      )
      shortAnswer.ques(
        v-if="item.type == 2",
        :question="item",
        v-on:emitAns="ans"
      )
    Button(type="primary", shape="circle", v-if="check", @click="submit") 送出答案
</template>
<style lang="scss" scoped>
div {
  background-color: #f5f5f5;
  margin: 0px;
  padding: 0px;
  h1 {
    line-height: 250%;
    text-align: center;
  }
  .video {
    padding: 50px;
    .youtube {
      width: 800px;
      height: 500px;
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
      padding: 3%;
      background-color: #fff;
    }
  }
}
</style>
