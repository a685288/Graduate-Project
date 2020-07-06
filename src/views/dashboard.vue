<template lang="pug">
.dashboard
    HeaderBar
    h1 jjjj
    router-view
</template>
<script>
import HeaderBar from '@/components/header/HeaderBar.vue';
export default {
    name: `Dashboard`,
    components: {
        HeaderBar
    }
}


</script>

<style scoped>

</style>
