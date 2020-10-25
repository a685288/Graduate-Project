<template lang="pug">
.allclass
  RadioGroup.CheckboxGroup(v-model="radioNum" @on-change="radioBoxGroup")
    h2 課程主題數
    Radio.box(label="0", border)
      span 全部
    Radio.box(label="1", border)
      span 小於2章
    Radio.box(label="2", border)
      span 2-10章
    Radio.box(label="11", border) 
      span 11-20章
    Radio.box(label="20", border)
      span 20章以上
  .right
    ClassCard(v-for="(item, index) in classInfo" :key="index" v-if="first <= item.sectionNum && item.sectionNum <= last" :classInfo="item" @click.native="getClassId(item.ClassID)")
</template>
<script>
import defaultClass from "@/assets/defaultClass.png";
import topic from "@/assets/topic.png";
import teacher from "@/assets/teacher.png";
import ClassCard from "@/components/classCard.vue";
import { getAllClass } from "@/apis/course.js";

export default {
  name: "allclass",
  components: {
    ClassCard
  },
  data() {
    return {
      first: 0,
      last: 100,
      defaultClass,
      topic,
      teacher,
      classInfo: [],
      radioNum: "0"
    };
  },
  mounted() {
    getAllClass().then(res => {
      if(res.data.status.code === 0 ){
        this.classInfo = res.data.data;
      }else{
        this.$Message.error(`err: ${res.data.status.code}`);
      }
    });
  },
  methods: {
    radioBoxGroup() {
      switch (this.radioNum) {
        case "1":
          this.first = 0;
          this.last = 1;
        break;

        case "2":
          this.first = 2;
          this.last = 10;
        break;

        case "11":
          this.first = 11;
          this.last = 19;
        break;

        case "20":
          this.first = 20;
          this.last = 100;
        break;

        default:
          this.first = 0;
          this.last = 100;
        break;
      }
    },
    getClassId(id) {
      this.$router.push("course/" + id);
    }
  }
};
</script>
<style lang='scss' scoped>
.allclass {
  display: flex;
  text-align: center;
  .CheckboxGroup {
    max-width: 300px;
    padding: 80px;
    flex: 1;
    margin: 0px auto;
    h2 {
      line-height: 200%;
    }
    .box {
      text-align: left;
      margin: 10px;
      width: 90%;
      min-width: 130px;
      span {
        margin: auto;
        font-size: 110%;
      }
    }
  }
  .right {
    flex: 8;
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>