<script>
import coursetopic from "@/components/content/coursetopic.vue";
import topic from "@/assets/topic.png";
import time from "@/assets/time.png";
export default {
  name: "courseinfo",
  comments: {
    coursetopic
  },
  data() {
    return {
      topic,
      time
    };
  }
};
</script>
<template lang="pug">
    .content
        .info
            .left
                h1 英文基礎課
                h3 成就你的未來
                Button(type="primary",icon="md-arrow-round-forward") 開始上課
            Divider(type="vertical")
            .right
                .box
                    h3 課程進度
                    i-circle(:percent="80")
                        span.demo-Circle-inner 80%
                .box  
                    h3 課程資訊
                    img(:src='topic')
                    | 主題：13  
                    img(:src='time') 
                    |時間（小時）：
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
      background-color: ivory;
      padding: 30px;
    }
    .right {
      flex: 2;
      background-color: ivory;
      display: flex;
      padding: 30px;
      .box {
        flex: 1;
        .demo-Circle-inner {
          font-size: 24px;
        }
        img {
          width: 18px;
          vertical-align: middle;
          margin: 5px;
        }
      }
    }
  }
}
</style>