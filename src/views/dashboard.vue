<script>
import HeaderBar from "@/components/HeaderBar.vue";
export default {
  name: "Dashboard",
  components: {
    HeaderBar
  }
};
</script>
<template lang="pug">
.dashboard
  HeaderBar
  router-view
</template>
<style lang="scss" scoped>
.dashboard{
  height: 100%;
}
</style>
