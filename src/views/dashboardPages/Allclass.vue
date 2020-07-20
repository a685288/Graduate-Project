<script>
import LeftBar from "@/components/sider/LeftBar.vue";
import defaultClass from "@/assets/defaultClass.png";
import topic from "@/assets/topic.png";
import time from "@/assets/time.png";
export default {
  name: "allclass",
  components: {
    LeftBar
  },
  data() {
    return {
      defaultClass,
      topic,
      time,
      results: 13,
      cardData: [
        {
          id: 1,
          title: "title1",
          topics: 5,
          content: "content1",
          time: 5,
          img: ""
        },
        {
          id: 2,
          title: "title2",
          topics: 10,
          content: "content2",
          time: 5,
          img: ""
        },
        {
          id: 2,
          title: "英文課",
          content: "content2",
          topics: 15,
          time: 5,
          img:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c6d42972507957.5be9f78763e91.jpg"
        },
        {
          id: 2,
          title: "title2",
          content: "content2",
          topics: 20,
          time: 4,
          img:
            "https://www.planesandballoons.com/wp-content/uploads/2018/12/large-printable-numbers-1-20-02-255x329.png"
        },
        {
          id: 2,
          title: "title2",
          content: "content2",
          topics: 20,
          time: 4,
          img:
            "https://www.planesandballoons.com/wp-content/uploads/2018/12/large-printable-numbers-1-20-02-255x329.png"
        },
        {
          id: 2,
          title: "title2",
          content: "content2",
          topics: 20,
          time: 4,
          img:
            "https://www.planesandballoons.com/wp-content/uploads/2018/12/large-printable-numbers-1-20-02-255x329.png"
        },
        {
          id: 2,
          title: "title2",
          content: "content2",
          topics: 20,
          time: 4,
          img:
            "https://www.planesandballoons.com/wp-content/uploads/2018/12/large-printable-numbers-1-20-02-255x329.png"
        }
      ],
      category: [{}]
    };
  },
  methods: {
    courseinfo() {
      console.log("push");
      this.$router.push("course");
      // name: 'courseinfo', params: { userId:  }
    }
  }
};
</script>
<template lang="pug">
    .allclass
        LeftBar.leftbar
        .classcard
            Button(@click="courseinfo()") 課程介紹測試
            Col(v-for="(item, index) in cardData" :key='item.id')
                Card.card(@click="courseinfo()")
                    .img
                        img(v-if='item.img != "" ' :src="item.img" )
                        img(v-else :src="defaultClass") 
                    Divider
                    //- hr.hr
                    .title {{item.title}}
                    .topics
                        img(:src='topic')
                        |主題：{{item.topics}}
                    .time
                        img(:src='time') 
                        |時間（小時）：{{item.time}}
                    .content {{item.content}}
</template>
<style lang='scss' scoped>
.allclass {
  display: flex;
  justify-content: center;
  text-align: center;
  .leftbar {
    flex: 1;
  }
  .classcard {
    display: flex;
    flex: 7;
    margin: 50px;
    flex-wrap: wrap;
    .card {
      flex: 1;
      margin: 15px;
      width: 250px;
      height: 350px;
      .img {
        height: 110px;
        line-height: 110px;
        img {
          width: 75px;
          vertical-align: middle;
        }
      }
      .hr {
        border-top: 1px solid #e8eaec;
        margin: 10px;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .topics,
      .time {
        line-height: 18px;
        font-size: 12px;
        text-align: left;
        margin: 5px;
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