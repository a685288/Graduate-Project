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
          classID: "",
          createAt: "",
          imgUrl: "",
          intro: "",
          isOpen: "",
          isPublic: "",
          sectionNum: "",
          teacherName: "",
          topic: ""
        }
      ]
    };
  },
  mounted() {
    getAllClass().then(res => {
      console.log(res.data.data);
      this.allClass = res.data.data;
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
    },
    getClassId(id) {
      this.$router.push("course/" + id);
      localStorage.removeItem("classId");
      localStorage.setItem("classId", id);
    }
  }
};
</script>
<template lang="pug">
.allclass
  CheckboxGroup.CheckboxGroup(@on-change="checkBoxGroup")
    h2 課程主題數
    Checkbox.box(label="1", border)
      span 小於2章
    Checkbox.box(label="2", border)
      span 2-10章
    Checkbox.box(label="11", border) 
      span 11-20章
    Checkbox.box(label="20", border)
      span 20章以上
  .right
    .classcard(v-for="item in allClass", :key="item.classId")
      Card.card(
        v-if="first <= item.sectionNum && item.sectionNum <= last",
        @click.native="getClassId(item.classId)"
      )
        .img
          img(v-if="item.img != ''", :src="item.img")
          img(v-else, :src="defaultClass") 
        .title {{ item.topic }}
        .topics
          img(:src="topic")
          | 主題：{{ item.sectionNum }}
        .teacher
          img(:src="teacher") 
          | 授課老師：{{ item.teacherName }} 老師
        hr
        .content {{ item.intro }}
</template>
<style lang='scss' scoped>
.allclass {
  display: flex;
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
  .right {
    flex: 8;
    padding: 50px;
    flex-wrap: wrap;
    .classcard {
      .card {
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
}
</style>