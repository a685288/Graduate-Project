<script>
// youtube 影片+測驗畫面
import radio from "@/components/lesson/question/radio.vue";
import multipleChoice from "@/components/lesson/question/multipleChoice.vue";
import shortAnswer from "@/components/lesson/question/shortAnswer.vue";
import { getExamContent, getExamAns, postExamRecord } from "@/apis/exam.js";

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
      theSectionIndex: this.$route.params.sectionIndex,
      section: {},
      studentAns: [], //學生答案
      correctAns: [], //正確答案
      array: [],
      countScore: Number,
      userScore: Number,
      isModalShow: false,
      isCorrectAnsShow: false
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.theSectionId = to.params.sectionId;
    this.theSectionIndex = to.params.sectionIndex;
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
        } else {
          this.$Message.error(`err:${res.data.status.code}`);
        }
        this.$forceUpdate();
      });
    },
    //拿到emit學生答案，比對sort
    ans(userAns) {
      const rule = element => element.sort === userAns.sort;
      let index = this.studentAns.findIndex(rule);
      if (index === -1) {
        this.studentAns.push(userAns);
      } else {
        this.studentAns[index] = {};
        this.studentAns[index] = userAns;
      }
    },
    //拿正確答案
    submit() {
      getExamAns(this.theSectionId)
        .then(res => {
          if (res.data.status.code === 0) {
            this.correctAns = res.data.data;
          } else {
            this.$Message.error(`err:${res.data.status.code}`);
          }
          this.score();
        })
        .catch(err => {
          this.$Message.error(`err: ${err}`);
          console.log(err);
        });
    },
    //對答案
    async score() {
      // 將select ans to string
      for (let n = 0; n < this.studentAns.length; n++) {
        for (let m = 0; m < this.studentAns[n].selects.length; m++) {
          let str = this.studentAns[n].selects[m].toString();
          this.studentAns[n].selects[m] = str;
        }
        this.studentAns[n].selects = Array.from(this.studentAns[n].selects);
      }
      this.countScore = 0; //學生分數
      for (let n = 0; n < this.studentAns.length; n++) {
        let type2Ans = 1; //多選對答使用的參數
        const rule = element => element.sort === this.studentAns[n].sort;
        let x = this.correctAns.findIndex(rule);
        if (x != -1) {
          //有資料
          this.studentAns[x].isTrue = 0;
          // console.log(this.studentAns[x]);
          switch (this.studentAns[x].type) {
            case 0: //單選
              if (
                this.correctAns[x].answer[0] === this.studentAns[x].selects[0]
              ) {
                this.studentAns[x].isTrue = 1;
                this.countScore++;
              } else {
                this.studentAns[x].isTrue = 0;
              }
              break;
            case 1: //多選
              if (
                this.correctAns[x].answer.length ===
                this.studentAns[x].selects.length
              ) {
                for (let i = 0; i < this.correctAns[x].answer.length; i++) {
                  if (
                    !this.correctAns[x].answer.includes(
                      this.studentAns[x].selects[i]
                    )
                  ) {
                    type2Ans = 0; //錯
                    break;
                  }
                }
              } else {
                type2Ans = 0; //錯
              }
              this.studentAns[x].isTrue = type2Ans;
              if (type2Ans === 1) {
                this.countScore++;
              }
              type2Ans = 1;
              break;
            case 2: //簡答
              this.studentAns[x].isTrue = 1;
              break;
            default:
              console.log("未知錯誤");
              break;
          }
        }
      }
      await this.del();
      await this.post();
    },
    del() {
      this.studentAns.forEach(item => {
        delete item.type;
      });
      this.studentAns.forEach(item => {
        delete item.sort;
      });
    },
    post() {
      console.log("post()");
      this.userScore = this.countScore;
      console.log("學生分數" + this.userScore);
      this.countScore = 0;
      postExamRecord({
        classId: this.theClassId,
        sectionId: this.theSectionId,
        records: this.studentAns,
        step: parseInt(this.theSectionIndex)
      });
      this.isModalShow = true;
      this.isCorrectAnsShow = true;
    },
    showExam() {
      this.show = true;
      this.btnshow = false;
      this.check = true;
      this.isModalShow = false;
      this.isCorrectAnsShow = false;
    }
  }
};
</script>
<template lang="pug">
div
  .video
    h1 {{ this.section.title }}
    .txtDiv(v-if="this.section.type === 0")
      p {{ this.section.url }}
    .youtubeDiv(v-if="this.section.type === 1")
      iframe.youtube(
        :src="'https://www.youtube.com/embed/' + this.section.url",
        frameborder="0",
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      )
    br
    Button.startbtn(
      type="primary",
      shape="circle",
      @click="showExam()",
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
    Modal(v-model="isModalShow", title="你的作答")
      h1 答對{{ this.userScore }}題
      Divider 
      p 簡答題不計分
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
    .correctAns {
      color: #c00000;
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