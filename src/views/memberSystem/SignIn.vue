<script>
// import { postData } from '@/apis/course.js';

export default {
    name: "SignIn",
    data() {
        return {
            formDate: {
                account: '',
                password: ''
            },
            rules:{

            }
        };
    },
    methods: {
        check() {
            this.$router.push('/dashboard');
        }
    //     axios
    //         .get('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => {
    //             this.posts = res.data;
    //         })

    //     getDatta().then((res) => {
    //         this.posts = res.data;
    //     })

    //     postData({
    //         title: 'foo',
    //         userId: 1,
    //         body: 'bar'
    //     }).then(res => {
    //         this.posts = res.data;
    //     });
    }
};
</script>

<template lang="pug">
    .SignIn
        Card.SignCard
            Form(ref='formData' :model="formData" :rules="rules")
                FormItem(label='account' prop='account')
                    Input(type='text' v-model='account' placeholder='account')
                FormItem(label='password' prop='password')
                    Input(type='password' v-model='password' placeholder='password')
                FormItem
                    Button.btns(type='primary' @click="check()") Submit
                    Button.btns(type='' @click="") Sign up

</template>

<style lang='scss' scoped>
.SignIn {
    min-height: 400px;
    align-items: center;
    display: flex;
    justify-content: center;
}
.SignCard{
    margin: 50px;
    padding: 50px;
    position: relative;
    // max-width: 500px;
    min-width: 500px;
}
.btns {
    margin: 10px;
}
</style>
