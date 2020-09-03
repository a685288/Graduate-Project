<script>
import classCard from "@/components/classCard.vue";
import course from "@/components/Course.vue";
import defaultClass from "@/assets/defaultClass.png";
import topic from "@/assets/topic.png";
import teacher from "@/assets/teacher.png";
import { getAllClass } from "@/apis/course.js";
export default {
  name: "allclass",
  components: {
    classCard,
    course
  },
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
          topic: "0", //主題
          intro: "0",
          sectionNum: "0", //主題數
          teacherName: "0",
          createAt: "0"
        }
      ]
    };
  },
  mounted() {
    getAllClass().then(res => {
      console.log("長度" + res.data.data.length);
      for (var i = 0; i < res.data.data.length; i++) {
        console.log("舊" + this.allClass[i]);
        this.allClass[i] = res.data.data[i];
        console.log("新" + this.allClass[i]);
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
    .classcard(v-for="item in allClass" :key='item.id' )
      Col
        router-link(v-if='first<=item.sectionNum&&item.sectionNum<=last' :to="{path: 'course/' + item.classId }" :propsClassId='item.classId' )
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