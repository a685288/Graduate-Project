<script>
import defaultClass from "@/assets/defaultClass.png";
import topic from "@/assets/topic.png";
import teacher from "@/assets/teacher.png";
import { getAllClass } from "@/apis/course.js";
export default {
  name: "allclass",
  data() {
    return {
      first: 0,
      last: 100,
      defaultClass,
      topic,
      teacher,
      class: {
        classId: "",
        imgUrl: "",
        topic: "",
        intro: "",
        sectionNum: "",
        teacherName: "",
        createAt: ""
      },
      cardData: [
        {
          id: 1,
          title: "基礎英文課",
          topics: 1,
          content: "基礎英文課，等你來上課",
          //學英文沒有捷徑，但是有方法。吉娜英格網站將致力於研發電腦輔助教學的教材，以及有效率的英語學習方法。站長有很多的英語教學創意，透過網路，實現教學理想。吉娜英格網站所有內容，著作權均屬於吉娜英格所有，嚴禁任意拷貝或是散播。我們在此聲明，任何侵權行為，將採取適當之法律行動。
          teacher: "Abby",
          img: ""
        },
        {
          id: 2,
          title: "進階英文課",
          topics: 3,
          content: "程度好嗎?來試試身手吧!",
          teacher: "Abby",
          img: ""
        },
        {
          id: 3,
          title: "英文課",
          content: "content2",
          topics: 9,
          teacher: "Abby",
          img:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c6d42972507957.5be9f78763e91.jpg"
        },
        {
          id: 4,
          title: "title2",
          content: "content2",
          topics: 15,
          teacher: "Abby",
          img:
            "https://www.planesandballoons.com/wp-content/uploads/2018/12/large-printable-numbers-1-20-02-255x329.png"
        },
        {
          id: 5,
          title: "title2",
          content: "content2",
          topics: 20,
          teacher: "Abby",
          img:
            "https://www.planesandballoons.com/wp-content/uploads/2018/12/large-printable-numbers-1-20-02-255x329.png"
        },
        {
          id: 6,
          title: "title2",
          content: "content2",
          topics: 27,
          teacher: "Abby",
          img:
            "https://www.planesandballoons.com/wp-content/uploads/2018/12/large-printable-numbers-1-20-02-255x329.png"
        },
        {
          id: 7,
          title: "title2",
          content: "content2",
          topics: 3,
          teacher: "Abby",
          img:
            "https://www.planesandballoons.com/wp-content/uploads/2018/12/large-printable-numbers-1-20-02-255x329.png"
        }
      ]
    };
  },
  mounted() {
    getAllClass().then(res => {
      console.log(res.data);
      console.log(res.data);
    });
  },
  methods: {
    checkBoxGroup(x) {
      if (x == 1) {
        this.first = 0;
        this.last = 1;
      } else if (x == 2) {
        this.first = 2;
        this.last = 10;
      } else if (x == 11) {
        this.first = 11;
        this.last = 19;
      } else if (x == 20) {
        this.first = 20;
        this.last = 100;
      } else {
        this.first = 0;
        this.last = 100;
      }
      console.log("x" + x);
      console.log(this.first);
      console.log(this.last);
    }
  }
};
</script>
<template lang="pug">
  .allclass
    CheckboxGroup.CheckboxGroup(@on-change="checkBoxGroup")
      h2 課程主題數
      Checkbox.box(label="1" border)
        span 小於2章    
      Checkbox.box(label="2" border)
        span 2-10章
      Checkbox.box(label="11" border)
        span 11-20章
      Checkbox.box(label="20" border)
        span 20章以上
    .classcard
      Col(v-for="item in cardData" :key='item.id' )
        router-link(v-if='first<=item.topics&&item.topics<=last' :to="{path: 'course/' + item.id }" )
          Card.card
            .img
              img(v-if='item.img != "" ' :src="item.img" )
              img(v-else :src="defaultClass") 
            .title {{item.title}}
            .topics
              img(:src='topic')
              |主題：{{item.topics}}
            .teacher
              img(:src='teacher') 
              |授課老師：{{item.teacher}} 老師
            hr
            .content {{item.content}}
</template>
<style lang='scss' scoped>
.allclass {
  display: flex;
  justify-content: center;
  text-align: center;
  .CheckboxGroup {
    padding: 100px;
    flex: 1;
    h2 {
      line-height: 200%;
    }
    .box {
      margin: 10px;
      width: 90%;
      span {
        font-size: 110%;
      }
    }
  }
  .classcard {
    display: flex;
    flex: 8;
    margin: 50px;
    flex-wrap: wrap;
    .card {
      flex: 1;
      margin: 15px;
      width: 240px;
      height: 350px;
      color: #000000;
      hr {
        size: 1px;
        color: #e8eaec;
      }
      .img {
        height: 110px;
        line-height: 110px;
        img {
          width: 75px;
          vertical-align: middle;
        }
      }
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .topics,
      .teacher {
        line-height: 18px;
        font-size: 14px;
        text-align: left;
        margin: 5px;
        img {
          width: 18px;
          vertical-align: middle;
          margin: 5px;
        }
      }
      .content {
        margin: 10px 0px;
      }
    }
  }
}
</style>