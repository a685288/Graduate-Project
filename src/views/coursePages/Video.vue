<script>
// youtube 影片
import Youtube from "@/components/lesson/youtube.vue";
import radio from "@/components/lesson/question/radio.vue";
import multipleChoice from "@/components/lesson/question/multipleChoice.vue";
import shortAnswer from "@/components/lesson/question/shortAnswer.vue";
export default {
  name: "video",
  components: {
    Youtube,
    radio,
    multipleChoice,
    shortAnswer
  },
  data() {
    return {
      show: true,//false
      btnshow: true
    };
  },
  // methods: {
  //   exam() {
  //     this.show = true;
  //     this.btnshow = false;
  //   }
  // }
};
</script>
<template lang="pug">
.div
  h1 第一單元 
  Youtube.youtube(src="http://www.youtube.com/embed/mLVfozgYKFM")
  br
  Button(type="primary" shape="circle" @click='exam' v-if="btnshow") 開始測驗
  .exam(v-if="show")
    radio
    multipleChoice
    shortAnswer
</template>
<style lang="scss" scoped>
.exam {
  width: 80%;  
}
</style>