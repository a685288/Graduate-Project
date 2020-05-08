<template lang="pug">
    .aaa
        h1 signinpage
        ul
            li(v-for="(post, index) in posts") {{post.id}} +++ {{post.title}}
</template>
<script>
import axios from "axios";

export default {
    name: 'SignIn',
    data(){
        return {
            posts: []
        }
    },
    mounted(){
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.posts = res.data;
            })
    }
}
</script>

<style scoped>
.aaa {

    text-align: left;
}

</style>