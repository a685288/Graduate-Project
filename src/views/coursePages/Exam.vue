<script>
// youtube 影片+測驗畫面
import radio from "@/components/lesson/question/radio.vue";
import multipleChoice from "@/components/lesson/question/multipleChoice.vue";
import shortAnswer from "@/components/lesson/question/shortAnswer.vue";
import {
  getExamContent,
  getExamAns,
  postExamRecord,
  getSectionRecord,
} from "@/apis/exam.js";

export default {
  components: {
    radio,
    multipleChoice,
    shortAnswer,
  },
  data() {
    return {
      show: false,
      btnshow: true,
      check: false,
      theClassId: this.$route.params.classId,
      theSectionId: this.$route.params.sectionId,
      theSectionIndex: this.$route.params.sectionIndex,
      section: {}, //課程資料
      records: {}, //紀錄資料
      storage: {}, //暫存
      studentAns: [], //學生答案
      correctAns: [], //正確答案
      countScore: Number,
      userScore: Number,
      recordsData: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.theClassId = to.params.classId;
    this.theSectionId = to.params.sectionId;
    this.theSectionIndex = to.params.sectionIndex;
    next(this.getData());
  },
  mounted() {
    this.getData();
  },
  methods: {
    init() {
      this.studentAns = [];
      this.correctAns = [];
      this.countScore = 0;
      this.userScore = 0;
      this.storage = {};
      this.section = {};
      this.records = {};
      this.show = false;
      this.btnshow = true;
      this.check = false;
    },
    loadingShow() {
      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
      }, 2000);
    },
    getData() {
      this.loadingShow();
      this.init();
      getSectionRecord(this.theSectionId).then((res) => {
        if (res.data.status.code === 0) {
          this.recordsData = true;
          this.records = res.data.data.records;
          this.getExamContentFun();
          this.writtenExam();
        } else {
          this.recordsData = false;
          console.log("沒有作答紀錄");
          this.getExamContentFun();
        }
        this.$forceUpdate();
      });
    },
    //Exam 畫面內容
    getExamContentFun() {
      getExamContent(this.theSectionId).then((res) => {
        if (res.data.status.code === 0) {
          this.storage = res.data.data;
          //將records資料放進 this.storage 中
          if (this.recordsData) {
            this.submit();
            for (let n = 0; n < this.storage.question.length; n++) {
              for (let m = 0; m < this.records.length; m++) {
                if (
                  this.records[m].questionId ===
                  this.storage.question[n].questionId
                ) {
                  this.storage.question[n].records = this.records[m];
                }
              }
            }
          } else {
            this.section = this.storage;
          }
        } else {
          this.$Message.error(`err:${res.data.status.code}`);
        }
        this.$forceUpdate();
      });
    },
    checkPush() {
      this.$Modal.confirm({
        title: "送出後，答案將無法更改",
        content: "<p>如要更改，請按取消送出</p>",
        okText: "送出",
        cancelText: "取消送出",
        onOk: () => {
          this.submit();
        },
        onCancel: () => {
          console.log(this.studentAns);
        },
      });
    },
    //拿正確答案
    submit() {
      console.log("拿正確答案");
      getExamAns(this.theSectionId)
        .then((res) => {
          if (res.data.status.code === 0) {
            this.correctAns = res.data.data;
            if (this.recordsData) {
              for (let n = 0; n < this.storage.question.length; n++) {
                for (let m = 0; m < this.correctAns.length; m++) {
                  if (
                    this.correctAns[m].sort === this.storage.question[n].sort
                  ) {
                    this.storage.question[n].answer = this.correctAns[m].answer;
                  }
                }
              }
              this.Unify();
            } else {
              this.score();
            }
          } else {
            this.$Message.error(`err:${res.data.status.code}`);
          }
        })
        .catch((err) => {
          this.$Message.error(`err: ${err}`);
          console.log(err);
        });
    },
    //有紀錄，統整渲染畫面資料
    Unify() {
      this.section = this.storage;
    },
    //拿到emit學生答案，比對sort
    ans(userAns) {
      const rule = (element) => element.sort === userAns.sort;
      let index = this.studentAns.findIndex(rule);
      if (index === -1) {
        this.studentAns.push(userAns);
      } else {
        this.studentAns[index] = {};
        this.studentAns[index] = userAns;
      }
      console.log(this.studentAns);
    },
    //對答案
    async score() {
      console.log("score()");
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
        const rule = (element) => element.sort === this.studentAns[n].sort;
        console.log(this.studentAns);
        let x = this.correctAns.findIndex(rule);
        if (x != -1) {
          //有資料
          this.studentAns[x].isTrue = 0;
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
              console.log("多選");
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
      this.studentAns.forEach((item) => {
        delete item.type;
      });
      this.studentAns.forEach((item) => {
        delete item.sort;
      });
    },
    post() {
      this.userScore = this.countScore;
      this.countScore = 0;
      console.log("post");
      postExamRecord({
        classId: this.theClassId,
        sectionId: this.theSectionId,
        records: this.studentAns,
        step: parseInt(this.theSectionIndex),
      }).then((res) => {
        if (res.data.status.code === 0) {
          this.$router.go(0);
        }
      });
    },
    showExam() {
      this.show = true;
      this.btnshow = false;
      this.check = true;
    },
    writtenExam() {
      this.show = true;
      this.btnshow = false;
      this.check = false;
    },
  },
};
</script>
<template lang="pug">
div
  .video
    span.h1 {{ this.section.title }}
    .txtDiv(v-if="this.section.type === 0")
      span 請閱讀完以下文章，再開始測驗
      p {{ this.section.url }}
    .youtubeDiv(v-if="this.section.type === 1")
      iframe.youtube(
        :src="'https://www.youtube.com/embed/' + this.section.url",
        frameborder="0",
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      )
    br
    Button.startbtn(@click="showExam()", v-if="this.btnshow") 開始測驗
  .exam(v-if="this.show")
    span.h1 {{ this.section.title }}－課堂小考
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
    Button.btn(
      type="primary",
      shape="circle",
      v-if="check",
      @click="checkPush"
    ) 送出答案
</template>
<style lang="scss" scoped>
div {
  background-color: #fafafa;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
  .h1 {
    font-size: 30px;
    line-height: 250%;
    text-align: center;
    // background-image: linear-gradient(transparent 60%, #ffe7ba 42%);
    font-weight: bold;
    letter-spacing: 5px;
    color: #000;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    white-space: normal;
    overflow: hidden;
  }
  .txtDiv {
    max-width: 80%;
    margin: 0px auto;
    span {
      font-size: 15px;
      font-weight: bold;
      line-height: 140%;
      color: #000;
    }
    p {
      text-align: left;
      margin-top: 20px;
      white-space: pre-line;
      max-width: 100%;
    }
  }
  .video {
    padding: 50px;
    .youtube {
      width: 800px;
      height: 500px;
    }
    .startbtn {
      margin: 10px;
      height: 60px;
      width: 120px;
      font-size: 20px;
      background-color: white;
      color: black;
      border: 2px solid #008cba;
    }
    .startbtn:hover {
      background-color: #008cba;
      color: white;
    }
  }
  .exam {
    max-width: 80%;
    margin: 0px auto;
    text-align: left;
    button {
      margin: 10px;
    }
    .ques {
      height: 100%;
      width: 100%;
      margin: 20px 0px;
      padding: 3%;
      background-color: #fff;
    }
  }
}
</style>