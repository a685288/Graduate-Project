<template lang="pug">
    Tabs.tabs
        TabPane(label='進行中') 進行中的課程
        TabPane(label='已完成') 已完成的課程
</template>
<script>
export default {
  name: "myclass"
};
</script>
<style scoped>
.tabs{
    margin: 50px 200px;
    
}
</style>>