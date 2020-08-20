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
      allClass: [
        {
          classId: "123",
          imgUrl: "url",
          topic: "0",        //主題
          intro: "0",
          sectionNum: "0",   //主題數
          teacherName: "0",
          createAt: "0"
        }
      ],
      cardData: [
        {
          id: 1,
          title: "基礎英文課",
          topics: 1,
          content: "基礎英文課，等你來上課",
          //學英文沒有捷徑，但是有方法。吉娜英格網站將致力於研發電腦輔助教學的教材，以及有效率的英語學習方法。站長有很多的英語教學創意，透過網路，實現教學理想。吉娜英格網站所有內容，著作權均屬於吉娜英格所有，嚴禁任意拷貝或是散播。我們在此聲明，任何侵權行為，將採取適當之法律行動。
          teacher: "Abby",
          img: ""
        }
      ]
    };
  },
  mounted() {
    getAllClass().then(res => {
      console.log("長度" + res.data.data.length);
      for (var i = 0; i < res.data.data.length; i++) {
        console.log("舊"+this.allClass[i])
        this.allClass[i] = res.data.data[i];
        console.log("新"+this.allClass[i])
      }
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
      Col(v-for="item in allClass" :key='item.id' )
        router-link(v-if='first<=item.sectionNum&&item.sectionNum<=last' :to="{path: 'course/' + item.id }" )
          Card.card
            .img
              img(v-if='item.img != "" ' :src="item.img" )
              img(v-else :src="defaultClass") 
            .title {{item.topic}}
            .topics
              img(:src='topic')
              |主題：{{item.sectionNum}}
            .teacher
              img(:src='teacher') 
              |授課老師：{{item.teacherName}} 老師
            hr
            .content {{item.intro}}
</template>
<style lang='scss' scoped>
.allclass {
  display: flex;
  justify-content: center;
  text-align: center;
  .CheckboxGroup {
    padding: 100px;
    flex: 1;
    margin: 0px auto;
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