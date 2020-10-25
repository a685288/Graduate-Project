<template lang="pug">
  #app
    router-view
</template>

<script>
import SignIn from './views/memberSystem/SignIn';

export default {
    name: 'app',
    components: {
        SignIn
    }
};
</script>

<style>
html, body {
    height: 100%;
    width: 100%;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #0C4A60;
    height: 100%;
}
body{ 
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
}
</style>
