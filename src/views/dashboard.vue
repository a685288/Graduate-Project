<script>
import HeaderBar from "@/components/HeaderBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Dashboard",
  components: {
    HeaderBar,
    Footer
  }
};
</script>
<template lang="pug">
.dashboard
  HeaderBar
  router-view.router-view
  Footer
</template>
<style lang="scss" scoped>
.dashboard{
  height: 100%;
  // min-height: 900px;
}
.router-view{
  min-height: 90%;
}
header{
  height: 100%;
}
footer{
  height: 100%;
  // min-height: 20%;
}
</style>
