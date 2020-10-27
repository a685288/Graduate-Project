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
  router-view
  Footer
</template>
<style lang="scss" scoped>
.dashboard{
  height: 100%;
}
</style>
