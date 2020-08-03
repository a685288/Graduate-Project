<script>
import HeaderBar from "@/components/header/HeaderBar.vue";
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
<style scoped>
</style>
