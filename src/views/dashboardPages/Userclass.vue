<script>
import myinfo from "@/components/sider/myinfo.vue";
// import { getMyClass } from "@/apis/course.js";
export default {
  name: "myclass",
  components: {
    myinfo
  },
  methods:{
    getMyClass(){
      
    }
  }
};
</script>
<template lang="pug">
.div
  myinfo.info
  Tabs.tabs
    TabPane(label='進行中') 進行中的課程
    TabPane(label='已完成') 已完成的課程
</template>

<style lang="scss" scoped>
.div {
  display: flex;
  margin: 5%;
  .info {
    flex: 1;
    margin: 20px;
  }
  .tabs {
    flex: 5;
    padding: 0% 5%;
  }
}
</style>>