<script>
// components
export default {
  name: "lessonTopic",
  props: {
    section: {
      sectionId: String,
      title: String
    }
  },
  data(){
    return{
    }
  },
  methods:{
    toExam(id){
      // this.theClassId = this.$route.params.classId;
      // console.log("course-this.classId---" + this.theClassId);
      // this.$router.push("/dashboard/course/"+this.theClassId+"/lesson/exam/" + id);
      this.$emit("toExam", id);
    }
  }
};
</script>
<template lang="pug">
.lessonTopic
  h1 課程內容
  .div
    .lessons(v-for="(item, index) in section",:key="index")
      Card.card(@click.native="toExam(item.sectionId)") {{index+1}}. {{item.title}}
        //- Icon.icon(type="md-arrow-dropright-circle") 
        
</template>
<style lang='scss' scoped>
.lessonTopic{
  padding: 1%;
  height: 100%;
  h1 {
      line-height: 120%;
    }
  .div {
    height: 80%;
    padding: 1% 15%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;  
    .card {
      flex: 1;
      font-size: 20px;
      text-align: left;
      padding: 0% 25%;
      font-weight: bold;
      margin: 10px 0px;
    }
  }
}
</style>    