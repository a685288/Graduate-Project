<template lang="pug">
    .Header
        img(:src=`logo`)
        .Menu
            MenuBar
</template>

<script>
import MenuBar from './MenuBar.vue';
import logo from '@/assets/logo.jpeg';
export default {
    name: 'TitleBar',
    components:{
        MenuBar
    },
    data(){
        return {
            logo
        }
    }
    
}
</script>
<style lang='scss' scoped>
.Header{
    display: flex;
    
    img {
        height: 60px;
    }
    .Menu {
        flex: 1;
    }
}
</style>