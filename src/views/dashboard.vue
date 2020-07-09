<template lang="pug">
.dashboard
    HeaderBar
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
