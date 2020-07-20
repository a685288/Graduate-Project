<script>
import coursetopic from "@/components/content/coursetopic.vue";
import topic from "@/assets/topic.png";

export default {
  name: "courseinfo",
  components: {
    coursetopic
  },
  data() {
    return {
      topic,
      course: [
        {
          title: "英文基礎課",
          intro: "成就你的未來",
          topic: "13"
        }
      ]
    };
  },
  methods: {
    background(type) {
      this.$Message[type]({
        background: true,
        content: "加選課程成功"
      });
    },
    start() {
      this.$router.push("lesson");
    }
  }
};
</script>
<template lang="pug">
  .content
    .info(v-for="item in course",:key="item.id")
      .left
        h1 {{item.title}}
        h3 {{item.intro}}
        .button(align='center')
          Button.btn(@click="background('success')") 加入課程
          Button.btn(@click='start()') 開始上課
      .right
        .box
          h3 課程進度
          i-circle.circle(:percent="80")
            span.demo-Circle-inner 80%
        .box
          h3 課程資訊
          .news        
            img(:src='topic')
            | 主題：{{item.topic}}
    coursetopic
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
          margin: 5px;
        }
        }
      }
    }
  }
}
</style>