<template lang="pug">
  .Header
    img(:src='logo')
    .Menu
      MenuBar
</template>

<script>
import MenuBar from "./MenuBar.vue";
import logo from "@/assets/logo.png";
export default {
  name: "TitleBar",
  components: {
    MenuBar
  },
  data() {
    return {
      logo
    };
  }
};
</script>
<style lang='scss' scoped>
.Header {
  display: flex;
  background-color: #ffffff;
  img {
    height: 60px;
  }
  .Menu {
    flex: 1;
  }
}
</style>